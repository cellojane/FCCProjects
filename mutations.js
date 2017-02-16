
function mutation(arr) {
  arr[0] = arr[0].toLowerCase().split("").sort().join("");
  arr[1] = arr[1].toLowerCase().split("").sort();
    /*if (0 <= arr[0].indexOf(arr[1].join(""))){
      return true;
    }*/
    for (var i = 0; i < arr[1].length; i++) {
      return 0 <= arr[0].indexOf(arr[1][i]); 
    }

  }

  /*return 0 <= arr[0].indexOf(arr[1]);*/

  

mutation(["hello", "hey"]);
