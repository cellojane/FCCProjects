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
