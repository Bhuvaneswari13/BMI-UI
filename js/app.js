function calc() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var result = "";
    var c = w / (h/100 * h/100);
    document.getElementById('bmi').innerHTML = c;
  }