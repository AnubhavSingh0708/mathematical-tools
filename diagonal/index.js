var Av =document.getElementById("Ai").value;
var Bv =document.getElementById("Bi").value;
var Cv =document.getElementById("Ci").value;
function Acalc() {
    Av =document.getElementById("Ai").value;
    Bv =document.getElementById("Bi").value;
    Cv =document.getElementById("Ci").value;
    document.getElementById("Ai").value =Math.sqrt(Math.pow(Cv, 2)-Math.pow(Bv,2));
    Av =document.getElementById("Ai").value;
    document.getElementById("Ddiv").innerHTML= (180/Math.PI) * (Math.asin(Av/Cv));
    document.getElementById("Ediv").innerHTML=  (180/Math.PI) * (Math.asin(Bv/Cv));
    document.getElementById("Bluediv").innerHTML =(Math.sin((180/Math.PI) * (Math.asin(Bv/Cv))*(Math.PI/180))*Av);
    document.getElementById("Greendiv").innerHTML = Math.sqrt(Math.pow(Av, 2)+Math.pow((Bv/2), 2));
    document.getElementById("Reddiv").innerHTML =  Math.sqrt(Math.pow((Av/2), 2)+Math.pow(Bv, 2));
}
function Bcalc() {
    Av =document.getElementById("Ai").value;
    Bv =document.getElementById("Bi").value;
    Cv =document.getElementById("Ci").value;
    document.getElementById("Bi").value =Math.sqrt(Math.pow(Cv, 2)-Math.pow(Av,2));
    Bv =document.getElementById("Bi").value;
    document.getElementById("Ddiv").innerHTML= (180/Math.PI) * (Math.asin(Av/Cv));
    document.getElementById("Ediv").innerHTML=  (180/Math.PI) * (Math.asin(Bv/Cv));
    document.getElementById("Bluediv").innerHTML =(Math.sin((180/Math.PI) * (Math.asin(Bv/Cv))*(Math.PI/180))*Av);
    document.getElementById("Greendiv").innerHTML = Math.sqrt(Math.pow(Av, 2)+Math.pow((Bv/2), 2));
    document.getElementById("Reddiv").innerHTML =  Math.sqrt(Math.pow((Av/2), 2)+Math.pow(Bv, 2));
}
function Ccalc(){
    Av =document.getElementById("Ai").value;
    Bv =document.getElementById("Bi").value;
    Cv =document.getElementById("Ci").value;
    document.getElementById("Ci").value =Math.sqrt(Math.pow(Av, 2)+Math.pow(Bv,2));
    Cv =document.getElementById("Ci").value;
    document.getElementById("Ddiv").innerHTML= (180/Math.PI) * (Math.asin(Av/Cv));
    document.getElementById("Ediv").innerHTML=  (180/Math.PI) * (Math.asin(Bv/Cv));
    document.getElementById("Bluediv").innerHTML =(Math.sin((180/Math.PI) * (Math.asin(Bv/Cv))*(Math.PI/180))*Av);
    document.getElementById("Greendiv").innerHTML = Math.sqrt(Math.pow(Av, 2)+Math.pow((Bv/2), 2));
    document.getElementById("Reddiv").innerHTML =  Math.sqrt(Math.pow((Av/2), 2)+Math.pow(Bv, 2));
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
