function init() {
  var a = 3, b = 3, c = 5;
  var x = (a == b);
  var y = (a != b);
  var z = (a < b);
  var p = (a < b);
  var q = (a <= b);
  var r = (a >= b);
  var str = "x= " + x + ", y= " + y + ", z= " + z;
  console.log(str);
  document.getElementById("info").textContent = str;
}