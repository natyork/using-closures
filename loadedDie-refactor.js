//refactor of loadedDie without using IIFE pattern just to make sure I understand
//how each function is being invoked.

function loadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i =0;
  return function() {
     var result = list[i];
     i++;
     return result;
  }
};

var output = loadedDie();
console.log(output());
console.log(output());
console.log(output());
console.log(output());
console.log(output());

// could also go one step further and try to create a function that creates
// custom lists to pass to loadedDie....stretch exercise.












