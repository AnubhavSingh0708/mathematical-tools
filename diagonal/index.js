const form1 = document.querySelector('.diagonal');
form1.addEventListener('submit', event => {
 var a = document.getElementById("a-value").value;
   var b = document.getElementById("b-value").value;
  var c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
 document.getElementById("c-value").innerHTML = c;
 alert(c);
}
