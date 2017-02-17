
var myArr = [];

function bouncer(arr) {
  function stripNull(val) {
    return val !== /\0/;

  }
  
      myArr = arr.filter(stripNull);
  // Don't show a false ID to this bouncer.
  return myArr;
}

bouncer([7, "ate", "", false, 9]);
