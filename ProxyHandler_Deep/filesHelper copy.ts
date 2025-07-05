// filesHelper.ts

import * as fs from 'fs';
import { Action } from 'myy-common';
//import { ActionFunc } from './helper';

export type PathLike = fs.PathLike;

export function existsSync(wantedPath: fs.PathLike = '.') {
	return fs.existsSync(wantedPath);
}

// write | override file with string
export function writeJSONFileSync(fullPath: fs.PathLike, data: any): void {
	var str = JSON.stringify(data);
	fs.writeFileSync(fullPath, str);
}

//var fileName = "foo.txt";
export function getFile(fillPath: fs.PathLike): any {
	var data = fs.readFileSync(fillPath, "utf8");
	return data;
}

export function getFileJSON<Typ>(fillPath: fs.PathLike): Typ {
	var fileData = getFile(fillPath);
	//console.log('fileData', fileData);
	return JSON.parse(fileData) as Typ;
}

// file object handle single object in file (flat object - no complex prop)
//import { FileObjectHandler } from "../wrapper/files";

// Handle file object, object neets to be flat, no complex property
export class FileObjectHandler<DefaultObjTyp extends Object> {
	static _<DefaultObjTyp extends Object>(fileName: fs.PathLike, defaultObj: DefaultObjTyp) {
		return new FileObjectHandler<DefaultObjTyp>(fileName, defaultObj);
	}

	private _fileName: fs.PathLike;
	public get fileName(): fs.PathLike {
		return this._fileName;
	}

	private _defaultObj: DefaultObjTyp;
	public get defaultObj(): DefaultObjTyp {
		return this._defaultObj;
	}

	constructor(fileName: fs.PathLike, defaultObj: DefaultObjTyp) {
		this._fileName = fileName;
		this._defaultObj = defaultObj;
	}

	private setJSON(objFromFile: DefaultObjTyp) {
		writeJSONFileSync(this.fileName, objFromFile);
	}

	private initJSON() {
		this.setJSON(this.defaultObj);
	}

	// pure, can return undefined if parse failed
	private getJSON(): DefaultObjTyp {
		return getFileJSON<DefaultObjTyp>(this.fileName);
	}

	private notExistInit() {
		// if not exist, init file
		if (!existsSync(this.fileName)) {
			this.initJSON();
		}
	}

	get(): DefaultObjTyp {
		var fileJSON: DefaultObjTyp;

		// if not exist, init file
		this.notExistInit()

		// exist, take and parse.
		// can return undefined if parse failed
		fileJSON = this.getJSON();

		// if undefined(exist but not parse), set file to be default and get again
		if (fileJSON == undefined) {
			this.initJSON();

			// exist after init, get
			fileJSON = this.getJSON();
		}

		return fileJSON;
	}

	getProp(property: PropertyKey) {
		let objFromFile = this.get();

		//console.log('A value has been accessed', [objFromFile, property]);

		// Return the value stored in the key being accessed,
		let valFromFile = Reflect.get(objFromFile, property);

		// if undefined
		if (valFromFile == undefined) {
			// get-set from backup config file.
			let valFromBackup = Reflect.get(this.defaultObj, property);
			this.setProp(property, valFromBackup);
			valFromFile = valFromBackup;
		}

		return valFromFile;
	}

	has(property: PropertyKey): boolean {
		let objFromFile = this.get();
		return Reflect.has(objFromFile, property);
	}

	set(action: Action<DefaultObjTyp>): void {
		let objFromFile = this.get();
		//action(objFromFile);
		Reflect.apply(action, objFromFile, [objFromFile]);
		this.setJSON(objFromFile);

	}

	setProp(property: PropertyKey, value: any): void {
		this.set(objFromFile => {
			Reflect.set(objFromFile, property, value);
		});
	}

	deleteProperty(property: PropertyKey) {
		// delete only config file
		let err = this.set(objFromFile => {
			Reflect.deleteProperty(objFromFile, property);
		});
		return err;
	}

	ownKeys(): PropertyKey[] {
		let objFromFile = this.get();
		return Reflect.ownKeys(objFromFile);
	}

	defineProperty(property: PropertyKey, attributes: PropertyDescriptor): boolean {
		let booly: boolean = false;
		this.set(objFromFile => {
			booly = Reflect.defineProperty(objFromFile, property, attributes);
		});
		return booly;
	}

	getOwnPropertyDescriptor(property: PropertyKey): PropertyDescriptor|undefined {
		let objFromFile = this.get();
		let propertyDescriptor: PropertyDescriptor|undefined = Reflect.getOwnPropertyDescriptor(objFromFile, property);

		if (propertyDescriptor) {
			propertyDescriptor.value = this.getProp(property);
		}

		return propertyDescriptor;
	}

	getPrototypeOf(): object | null {
		let objFromFile = this.get();
		return Reflect.getPrototypeOf(objFromFile);
	}

	enumerate(): PropertyKey[] {
		let objFromFile = this.get();
		return Reflect.ownKeys(objFromFile);
	}
}