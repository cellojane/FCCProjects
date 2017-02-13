function titleCase(str) {
  var myArray = [];
  myArray = str.toLowerCase().split(" ");
  for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].replace(/[a-z]/, myArray[i].charAt(0).toUpperCase());
  }
  str = myArray.join(" ");
  return str;
  }


titleCase("I'm a little tea pot");
