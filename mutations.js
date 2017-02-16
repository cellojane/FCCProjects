
function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase().split("");
    /*if (0 <= arr[0].indexOf(arr[1].join(""))){
      return true;
    }*/
    var index = [];
    var reject = []; 
  for (var i = 0; i < arr[1].length; i++) {

      index.push(arr[0].indexOf(arr[1][i])); 

    }
    for (var j = 0; j < index.length; j++) {
      if (index[j] === 0) {
        reject = index.shift();
      }
    }
    var singleIndex = index.reduce(function(previousVal, currentVal) {
  return previousVal * currentVal;
});
    return singleIndex >= 0;
  }

  /*return 0 <= arr[0].indexOf(arr[1]);*/


mutation(["hello", "hey"]);

