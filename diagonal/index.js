const form1 = document.querySelector('.diagonal');
setTimeout(function(){calculate(); }, 1000);
function calculate() {
 var a = document.getElementById("a-value").value;
   var b = document.getElementById("b-value").value;
  var c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
 var d = Math.asin(a/c);
 var e=  Math.asin(b/c);
 document.getElementById("c-value").innerHTML = c;
  document.getElementById("d-value").innerHTML = d;
  document.getElementById("e-value").innerHTML = e;
 setTimeout(function(){calculate(); }, 1000);
    }
