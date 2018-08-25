// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var newList = [];
  var body = document.body;

  var checkElements = function(element){
    
    if(element.classList && element.classList.contains(className)){
      newList.push(element);
    }

    if(element.childNodes.length > 0){
      for(let i = 0; i < element.childNodes.length; i++){
        checkElements(element.childNodes[i])
      }
    }  
  };
  checkElements(body);
  return newList;
}
