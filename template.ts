 
export function template(strings: TemplateStringsArray, ...keys: any[]) {
    return (function interpolation(...values: any[]) {
        let dict = values[values.length - 1] || {};
        let result = [strings[0]];
        keys.forEach(function (key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

function test() {
    let interpolationFunc = template`I'm ${'name'}. I'm almost ${'age'} years old-${0}.`;
    let str = interpolationFunc('foo', {name: 'MDN', age: 30}); //"I'm MDN. I'm almost 30 years old."
    console.log('str interpolation is', str);
}

test();
