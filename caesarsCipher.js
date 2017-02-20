
var dexArr = [];
var finalArr = [];
function rot13(str) { // LBH QVQ VG!
  for (var i = 0; i < str.length; i++) {
    var dex = str.charCodeAt(i);
    if (dex < 65) {
      x = String.fromCharCode(dex);
      dexArr.push(x);
      }
    else if (dex <= 77) {
      y = String.fromCharCode(dex + 13);
      dexArr.push(y);
      }
    else if (dex > 77) {
      z = String.fromCharCode((dex + 13) - 26);
      dexArr.push(z);
      }
  }
  return dexArr;
}
