function setTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = changeHour(h)
  m = mAndS(m);
  s = mAndS(s);
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
}

function mAndS(int) {
  if (int < 10) {
    return "0" + int;
  }
  else return int;
}
function changeHour(int){
  if (int > 12) {
    int = int - 12
    int = "0" + int
  }
  return int
}

setInterval(setTime, 500);