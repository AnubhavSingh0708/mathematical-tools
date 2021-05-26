function PCDcalc(){
  document.getElementById("PCD").value =  (document.getElementById("CLi").value)/Math.sin((360/(2*(document.getElementById("hole").value)))*Math.PI/180);
  document.getElementById("abs").innerHTML=360/(document.getElementById("hole").value);
  var copyText = document.getElementById("PCD");
  copyText.select();
  document.execCommand("copy");
}
function Hcalc(){
  var PCr = (document.getElementById("PCD").value)/2;
  var CL = document.getElementById("CLi").value;
  var answer = Math.asin(CL/PCr*2);
  var ans =360/(answer*180/Math.PI);
  document.getElementById("hole").value = ans;
  document.getElementById("abs").innerHTML=360/ans;
  var copyText = document.getElementById("hole");
  copyText.select();
  document.execCommand("copy");
}
function CLcalc(){
  var PCr = (document.getElementById("PCD").value)/2;
  var hol = document.getElementById("hole").value;
  var answer = 360/hol;
  var ans =2*PCr* Math.sin((answer/2)*Math.PI/180);
  document.getElementById("CLi").innerHTML = ans;
  document.getElementById("abs").innerHTML=360/(document.getElementById("hole").value);
  var copyText = document.getElementById("CLi");
  copyText.select();
  document.execCommand("copy");
}
