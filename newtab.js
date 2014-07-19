TIME = document.getElementById('time');
OPA = 0;

function setTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = changeHour(h)
  m = mAndS(m);
  s = mAndS(s);
  TIME.innerHTML = h + ':' + m + ':' + s;
}

function mAndS(int) {
  if (int < 10) {
    int = "0" + int;
  }
  return int;
}

function changeHour(int){
  if (int > 12) {
    int = int - 12
    int = mAndS(int);
  }
  return int
}

setTimeout(function() {
  TIME.setAttribute('class','show');
}, 250);
// setInterval(setTime, 500);

var req = new XMLHttpRequest();

req.onreadystatechange = function() {
  if (req.readyState == 4) {
    if (req.status == 200) {
      console.log(req.responseText);
      TIME.innerHTML = req.responseText;
    } else if (req.status == 400) {
      TIME.innerHTML = "API Limit Reached";
    } else {
      TIME.innerHTML = "Offline";
    }
  }
}

req.open('GET', 'https://api.github.com/zen');
req.send();
