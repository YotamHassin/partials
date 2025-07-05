// proxyHelper.ts

import { FileObjectHandler } from "./filesHelper";


//export {  }


// ------------ ***** specified ***** ------------
/* 
export interface initialObjType {
	//(logName: string): string;
	id: number;
	name: string;
}

const initialObj: initialObjType = {
	id: 1,
	name: 'Foo Bar'
}

const handler: ProxyHandler<initialObjType> = {
	get: function (obj, property) {
		console.log('A value has been accessed', [obj, property]);

		// Return the value stored in the key being accessed.
		//return obj[property];
		return 'some string not relevent to obj, property: ' + property.toString();
	}
}

export const proxiedObject: initialObjType = new Proxy(initialObj, handler);

//console.log(proxiedObject.name);
*/


// ------------ ***** generic file ***** ------------
// File Object Handler
function getFileProxyHandler<ProxyTyp extends object>(fileObjectHandler: FileObjectHandler<ProxyTyp>): ProxyHandler<ProxyTyp> {
	const handler: ProxyHandler<ProxyTyp> = {
		get: function (obj: ProxyTyp, property, receiver) {
			var valFromFile = fileObjectHandler.getProp(property);
			//console.log('in get, ' + property.toString(), [valFromFile]);

			return valFromFile;
		},

		set(obj: ProxyTyp, property: PropertyKey, value: any, receiver: any): boolean {
			// set only config file
			var err = fileObjectHandler.setProp(property, value);

			if (err == undefined) {
				return true;
			} else {
				return false;
			}

			// we don't want to edit backup object anyway, only config file.
			//obj[property] = value;

		},

		has(obj: ProxyTyp, property: PropertyKey): boolean {
			return fileObjectHandler.has(property);
		},

		deleteProperty: function (obj: ProxyTyp, property: PropertyKey): boolean {
			// delete only config file
			var err = fileObjectHandler.deleteProperty(property);

			if (err == undefined) {
				return true;
			} else {
				return false;
			}

		},

		defineProperty(obj: ProxyTyp, property: PropertyKey, attributes: PropertyDescriptor): boolean {
			return fileObjectHandler.defineProperty(property, attributes);
		},

		ownKeys(obj: ProxyTyp): ArrayLike<string | symbol> {
			return fileObjectHandler.ownKeys().map(x => x.toString());
		},

		getOwnPropertyDescriptor(obj: ProxyTyp, property: PropertyKey): PropertyDescriptor|undefined {
			let propertyDescriptor: PropertyDescriptor|undefined = fileObjectHandler.getOwnPropertyDescriptor(property);
			/* if (propertyDescriptor) {
				propertyDescriptor.value = fileObjectHandler.getProp(property);
			} */
			return propertyDescriptor;
		},

		getPrototypeOf(obj: ProxyTyp): object | null {
			return fileObjectHandler.getPrototypeOf();
		},

	}

	return handler;
}

// File Object Proxy
export function getProxiedFileObject<ProxyTyp extends object>(fileObjectHandler: FileObjectHandler<ProxyTyp>): ProxyTyp {
	const handler = getFileProxyHandler(fileObjectHandler);
	const proxiedObject: ProxyTyp = new Proxy(fileObjectHandler.defaultObj, handler);
	return proxiedObject;
}