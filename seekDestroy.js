
function destroyer(arr) {
  function kill(val) {
    return val !== 2 && val !== 3;
  }
  return arr.filter(kill);
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
