function camelize(str = '') {
  /* _.camelCase
// all output "equipmentClassName" 
camelize("EquipmentClass name");
camelize("Equipment className");
camelize("equipment class name");
camelize("Equipment Class Name"); 
*/
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}
