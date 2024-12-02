

// Readying console
console.log("Ready!"); 


// This array shall be used to hold the default schedule prior to making any changes // 
const defaultschedule = {
  ExamDateOne:"2024-11-24", 
  ExamNameOne:"Adv IT Infrastructure",
  ExamTimeOne:"11:59 PM",
  ExamOneLocal: "Online",
  ExamDateTwo:"11/25/2024",
  ExamNameTwo:"Art Appreciation",
  ExamTimeTwo:"9:00 PM",
  ExamTwoLocal: "Online", 
  ExamDateThree:"11/26/2024",
  ExamNameThree:"Web Development", 
  ExamTimeThree:"11:59 PM",
  ExamThreeLocal: "Online", 
  RememberMe: true
};


// This will load into the input fields the default schedule from the JSON File
const loaddefault = document.getElementById('Default-Schedule');
loaddefault.addEventListener("click", function()  {
document.getElementById('Default-Schedule').addEventListener('click', () => { 
document.getElementById('ExamDateOne').value = defaultschedule.ExamDateOne; 
document.getElementById('ExamNameOne').value = defaultschedule.ExamNameOne; 
document.getElementById('ExamTimeone').value = defaultschedule.ExamTimeOne; 
document.getElementById('ExamOneLocal').value = defaultschedule.ExamOneLocal; 
document.getElementById('ExamDateTwo').value = defaultschedule.ExamDateTwo; 
document.getElementById('ExamNameTwo').value = defaultschedule.ExamNameTwo; 
document.getElementById('ExamTimeTwo').value = defaultschedule.ExamTimeTwo; 
document.getElementById('ExamTwoLocal').value = defaultschedule.ExamTwoLocal; 
document.getElementById('ExamDateThree').value = defaultschedule.ExamDateThree; 
document.getElementById('ExamNameThree').value = defaultschedule.ExamNameThree; 
document.getElementById('ExamTimeThree').value = defaultschedule.ExamTimeThree; 
document.getElementById('RememberMe').value = defaultschedule.RememberMe; 
});


// This is the new schedule produced based on the
const NewSchedule = document.getElementById('Print-Schedule'); 
NewSchedule.addEventListener("click", function() { 
  ExamDateOne: document.getElementbyId('ExamDateOne').value,
  ExamNameOne: document.getElementbyId('ExamNameOne').value,
  ExamTimeOne: document.getElementbyId('ExamTimeOne').value,
  ExamOneLocal: document.getElementbyId('ExamOneLocal').value,
  ExamDateTwo: document.getElementbyId('ExamDateTwo').value,
  ExamNameTwo: document.getElementbyId('ExamNameTwo').value,
  ExamTimeTwo: document.getElementbyId('ExamTimeTwo').value,
  ExamTwoLocal: document.getElementbyId('ExamTwoLocal').value,
  ExamDateThree: document.getElementbyId('ExamDateThree').value, 
  ExamNameThree: document.getElementbyId('ExamNameThree').value,
  ExamTimeThree: document.getElementbyId('ExamTimeThree').value,
  ExamThreeLocal: document.getElementbyId('ExamThreeLocal').value, 
  };

  document.addEventListener("submit", function()  {
  console.log(JSON.stringify(NewSchedule));
  document.getElementById(Final_Schedule).innerText = JSON.stringify(NewSchedule)

  });
