

// Readying console
console.log("Ready!"); 


// This array shall be used to hold the default schedule prior to making any changes // 
const defaultschedule = {
  ExamDateOne:"2024-11-24", 
  ExamNameOne:"Adv IT Infrastructure",
  ExamTimeOne:"23:59",
  ExamOneLocal: "Online",
  ExamDateTwo:"2024-11-25",
  ExamNameTwo:"Art Appreciation",
  ExamTimeTwo:"09:00",
  ExamTwoLocal: "Online", 
  ExamDateThree:"2024-11-26",
  ExamNameThree:"Web Development", 
  ExamTimeThree:"23:59",
  ExamThreeLocal: "Online", 
  RememberMe: true
};


// This will load into the input fields the default schedule from the JSON File
const loaddefault = document.getElementById('Default-Schedule');
loaddefault.addEventListener("click", function()  {
  document.getElementById('Default-Schedule').addEventListener('click', () => { 
    document.getElementById('ExamDateOne').value = defaultschedule.ExamDateOne; 
    document.getElementById('ExamNameOne').value = defaultschedule.ExamNameOne; 
    document.getElementById('ExamTimeOne').value = defaultschedule.ExamTimeOne; 
    if(defaultschedule.ExamOneLocal == "Online" ){ 
      document.getElementById("Online1").checked = true;}
    else {
      document.getElementById("In-Person1").checked = true; 
    }  
   
    document.getElementById('ExamDateTwo').value = defaultschedule.ExamDateTwo; 
    document.getElementById('ExamNameTwo').value = defaultschedule.ExamNameTwo; 
    document.getElementById('ExamTimeTwo').value = defaultschedule.ExamTimeTwo; 
  if(defaultschedule.ExamTwoLocal == "Online") { 
      document.getElementById("Online2").checked = true;}
    else {
      document.getElementById("In-Person2").checked = true; 
    }  
   
    document.getElementById('ExamDateThree').value = defaultschedule.ExamDateThree; 
    document.getElementById('ExamNameThree').value = defaultschedule.ExamNameThree; 
    document.getElementById('ExamTimeThree').value = defaultschedule.ExamTimeThree; 
if(defaultschedule.ExamThreeLocal == "Online") { 
      document.getElementById("Online3").checked = true;}
    else {
      document.getElementById("In-Person3").checked = true; 
    }  
   
    document.getElementById('RememberMe').value = defaultschedule.RememberMe; 
  });
});

// This is the new schedule produced based on the
const NewSchedule = document.getElementById('Print-Schedule'); 
NewSchedule.addEventListener("click", function() { 
  let ExamDateOne = document.getElementbyId('ExamDateOne').value;
  let ExamNameOne = document.getElementbyId('ExamNameOne').value;
  let ExamTimeOne = document.getElementbyId('ExamTimeOne').value;
  let ExamOneLocal = document.getElementbyId('ExamOneLocal').value;
  let ExamDateTwo = document.getElementbyId('ExamDateTwo').value;
  let ExamNameTwo = document.getElementbyId('ExamNameTwo').value;
  let ExamTimeTwo = document.getElementbyId('ExamTimeTwo').value;
  let ExamTwoLocal = document.getElementbyId('ExamTwoLocal').value;
  let ExamDateThree = document.getElementbyId('ExamDateThree').value; 
  let ExamNameThree = document.getElementbyId('ExamNameThree').value;
  let ExamTimeThree = document.getElementbyId('ExamTimeThree').value;
  let ExamThreeLocal = document.getElementbyId('ExamThreeLocal').value;
  }
  );

  document.addEventListener("submit", function()  {
  console.log(JSON.stringify(NewSchedule));
  document.getElementById("Final_Schedule").innerText = JSON.stringify(NewSchedule);
  });
