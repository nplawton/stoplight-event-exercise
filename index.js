(function() {
  'use strict';

   //Green Light Functions
   const goButton = document.getElementById("goButton");
   const goLight = document.getElementById("goLight");
   
   goButton.addEventListener('click', greenLight);
 
   goButton.addEventListener('mouseover', (event) => {
     console.log('Entered ' + goButton.innerText + ' button');
   });
   
   goButton.addEventListener('mouseout', (event) => {
     console.log('Left ' + goButton.innerText + ' button');
   });
   
   
   function greenLight(event) {
     console.log(`${goButton.innerText} button is on`);
     goLight.classList.add("go");
     slowLight.classList.remove("slow");
     stopLight.classList.remove("stop");
   }
 
   //Yellow Light Functions
   const slowButton = document.getElementById('slowButton');
   const slowLight = document.getElementById('slowLight');
   
   slowButton.addEventListener('click', yellowLight);
   
   slowButton.addEventListener('mouseover', (event) => {
     console.log('Entered ' + slowButton.innerText + ' button');
   });
   
   slowButton.addEventListener('mouseout', (event) => {
     console.log('Left ' + slowButton.innerText + ' button');
   });
   
 
   function yellowLight(event) {
     console.log(`${slowButton.innerText} button is on`);
     slowLight.classList.add("slow");
     goLight.classList.remove("go");
     stopLight.classList.remove("stop");
   }
   
   //Red Light Functions
   const stopButton = document.getElementById('stopButton');
   const stopLight = document.getElementById('stopLight');
   
   stopButton.addEventListener('click', redLight);
   
   stopButton.addEventListener('mouseover', (event) => {
     console.log('Entered ' + stopButton.innerText + ' button');
   });
   
   stopButton.addEventListener('mouseout', (event) => {
     console.log('Left ' + stopButton.innerText + ' button');
   });
 
   function redLight(event) {
     console.log(`${stopButton.innerText} button is on`);
     stopLight.classList.add("stop");
     goLight.classList.remove("go");
     slowLight.classList.remove("slow");
   }
 
 })();
