// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === "number" || typeof obj === 'boolean' || obj == null){
    return String(obj);
  }else if(typeof obj === 'string'){
    return '\"' + obj + '\"';
  }else if(Array.isArray(obj)){
  	let strArr = [];
    for(let elem of obj){
      strArr.push(stringifyJSON(elem));
    }
    let arrStr = '[' + strArr.join(',') + ']';
    return arrStr;
  }else{
  	let objArr = [];
    for(let key in obj){
      if(typeof key !== 'function' && typeof obj[key] !== 'function' && key !== undefined && obj[key] !== undefined){
        objArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    let objStr = '{' + objArr.join(',') + '}';
    return objStr;
  }
};
