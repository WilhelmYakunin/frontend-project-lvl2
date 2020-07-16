import fs from 'fs';

function genDiff(path1, path2) {
    const f1 = JSON.parse(fs.readFileSync(path1, 'utf8'));
    const f2 = JSON.parse(fs.readFileSync(path2, 'utf8'));
       
    const keys1 = Object.keys(f1);
    const keys2 = Object.keys(f2);

    const jdd = {
      EQUALITY: [],
      MISSING: [],
      MODIFIED: []
    }
  
    for (let key of keys1) {
      let value = f1[key];
      if (f2[key] === value) {
        jdd["EQUALITY"].push({ key, value });
      }
      if (!keys2.includes(key)) {
        jdd["MISSING"].push({ key, value });
      }
      if ((keys2.includes(key)) && (f2[key] !== value)) { 
        jdd["MODIFIED"].push({ key, value });
      }
    }
    for (let key of keys2) {
      let value = f2[key];
      if (!keys1.includes(key)) {
        jdd["MISSING"].push({ key, value });
      }
      if ((keys1.includes(key)) && (f1[key] !== value)) { 
        jdd["MODIFIED"].push({ key, value });
      }
    
    }
    return jddToString(jdd);
  };

  function jddToString(obj) {
    let string = '';
    for (let {key, value} of obj["EQUALITY"]) {
      string += '   ' + key + ':' + ' ' + value + '\r\n';
    }
    for (let {key, value} of obj["MODIFIED"]) {
      string += ' +' + ' ' + key + ':' + ' ' + value + '\r\n';
    }
    for (let {key, value} of obj["MISSING"]) {
      string += ' -' + ' ' + key + ':' + ' ' + value + '\r\n';
    }
    return '{' + '\r\n' + string + '}';
  }
  

  export default genDiff;