function PCDcalc(){
  document.getElementById("PCD").value =  (document.getElementById("CLi").value)/Math.sin((360/(2*(document.getElementById("hole").value)))*Math.PI/180);
  document.getElementById("abs").innerHTML=360/(document.getElementById("hole").value);
  
}
function Hcalc(){
  var PCr = (document.getElementById("PCD").value)/2;
  var CL = document.getElementById("CLi").value;
  var answer = Math.asin(CL/PCr*2);
  var ans =360/(answer*180/Math.PI);
  document.getElementById("hole").value = ans;
  document.getElementById("abs").innerHTML=360/ans;

}
function CLcalc(){
  var ans1 =2*((document.getElementById("PCD").value)/2)* Math.sin(((360/(document.getElementById("hole").value))/2)*Math.PI/180);
  document.getElementById("CLi").value = ans1;
  document.getElementById("abs").innerHTML=360/(document.getElementById("hole").value);


}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our install button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the prompt');
      } else {
        console.log('User dismissed the prompt');
      }
      deferredPrompt = null;
    });
  });
});
