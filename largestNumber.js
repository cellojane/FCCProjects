function largestOfFour(arr) {
  // You can do this!
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
      var largest = arr[i].reduce(function(a, b){
        finalArr.push(Math.max(a, b));
      });
  }
  return finalArr;
}


function largestOfFour(arr) {
  // You can do this!
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i];
    tempArr = Math.max(tempArr[i], tempArr[(i+1)], tempArr[(i+2)], tempArr[(i+3)]);
    
    }
  return finalArr;
}
