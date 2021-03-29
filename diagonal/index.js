const form1 = document.querySelector('.diagonal');
setTimeout(function(){calculate(); }, 1000);
function calculate() {
 var a = document.getElementById("a-value").value;
   var b = document.getElementById("b-value").value;
  var c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
 var d = (180/Math.PI) * (Math.asin(a/c));
var e=  (180/Math.PI) * (Math.asin(b/c));
var blue;
var green = Math.sqrt(Math.pow(a, 2)+Math.pow(b/2, 2));;
 var red =  Math.sqrt(Math.pow(a/2, 2)+Math.pow(b, 2));
 document.getElementById("c-value").innerHTML = c;
  document.getElementById("d-value").innerHTML = d;
  document.getElementById("e-value").innerHTML = e;
 document.getElementById("red").innerHTML = red;
  document.getElementById("green").innerHTML = green;
 setTimeout(function(){calculate(); }, 1000);
    }
