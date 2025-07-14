var Canture = [{ level: -1, points: [] }];

var maxLevel = 3;
//function CantureFunc(left: number, rigth: number, level: number = 0) {
function CantureFunc(left, rigth, level = 0) {
    var obj = { level, points: [left, rigth], children: [] };
    const diff = (rigth - left) / 3;
    if (level === maxLevel) {
        return;
    }

    obj.children.push(CantureFunc(left, left + diff, level + 1));
    obj.children.push(CantureFunc(left + diff, rigth - diff, level + 1));
    obj.children.push(CantureFunc(rigth - diff, rigth, level + 1));


    return obj;

}

Canture.push(CantureFunc(0, 1));

//console.log('Canture', Canture.sort((a, b) => a.level - b.level));
console.log('Canture', Canture);
