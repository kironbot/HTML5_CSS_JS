function sum() {
  var v = document.getElementById("number").value;
  var r = 0;
  for (var i = 1; i <= v; i++) {
    r += i;
  }
  var s = "Sum (1, 2, ..., " + v + ") = " + r ;
  document.getElementById("result").textContent = s;
}