var TIME = document.getElementById('time');
var OPA = 0;

setTimeout(function() {
  TIME.setAttribute('class','show');
}, 250);

var req = new XMLHttpRequest();

req.onreadystatechange = function() {
  if (req.readyState == 4) {
    if (req.status == 200) {
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
