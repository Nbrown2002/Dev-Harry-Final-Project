

// Readying console
console.log("Ready!"); 


// This array shall be used to hold the default schedule prior to making any changes // 
const defaultschedule = {
  ExamDateOne: "2024-11-24", 
  ExamNameOne: "Adv IT Infrastructure",
  ExamTimeOne: "23:59",
  ExamOneLocal: "Online",
  ExamDateTwo: "2024-11-25",
  ExamNameTwo: "Art Appreciation",
  ExamTimeTwo: "09:00",
  ExamTwoLocal: "Online", 
  ExamDateThree: "2024-11-26",
  ExamNameThree: "Web Development", 
  ExamTimeThree: "23:59",
  ExamThreeLocal: "Online", 
  RememberMe: true
};


// This will load into the input fields the default schedule from the JSON File
document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('Default-Schedule').addEventListener('click', function () { 
    document.getElementById('ExamDateOne').value = defaultschedule.ExamDateOne; 
    document.getElementById('ExamNameOne').value = defaultschedule.ExamNameOne; 
    document.getElementById('ExamTimeOne').value = defaultschedule.ExamTimeOne; 
    document.getElementById(defaultschedule.ExamOneLocal === "Online" ? "Online1" : "In-Person1").checked = true;
   
    document.getElementById('ExamDateTwo').value = defaultschedule.ExamDateTwo; 
    document.getElementById('ExamNameTwo').value = defaultschedule.ExamNameTwo; 
    document.getElementById('ExamTimeTwo').value = defaultschedule.ExamTimeTwo; 
    document.getElementById(defaultschedule.ExamTwoLocal === "Online" ? "Online2" : "In-Person2").checked = true;
   
    document.getElementById('ExamDateThree').value = defaultschedule.ExamDateThree; 
    document.getElementById('ExamNameThree').value = defaultschedule.ExamNameThree; 
    document.getElementById('ExamTimeThree').value = defaultschedule.ExamTimeThree; 
    document.getElementById(defaultschedule.ExamThreeLocal === "Online" ? "Online3" : "In-Person3").checked = true; 
   
    document.getElementById('RememberMe').checked = defaultschedule.RememberMe; 
  });

document.getElementById('Print-Schedule').addEventListener("click", function (event) { 
  event.preventDefault(); 

// This is the new schedule produced based on the
const NewSchedule = { 
   ExamDateOne: document.getElementById('ExamDateOne').value,
   ExamNameOne: document.getElementById('ExamNameOne').value,
   ExamTimeOne: document.getElementById('ExamTimeOne').value,
   ExamOneLocal: document.getElementById('input[name="In-Person1"]:checked') ? "In-Person" : "Online",
   ExamDateTwo: document.getElementById('ExamDateTwo').value,
   ExamNameTwo: document.getElementById('ExamNameTwo').value,
   ExamTimeTwo: document.getElementById('ExamTimeTwo').value,
   ExamTwoLocal: document.getElementById('input[name="In-Person2"]:checked') ? "In-Person" : "Online",
   ExamDateThree: document.getElementById('ExamDateThree').value, 
   ExamNameThree: document.getElementById('ExamNameThree').value,
   ExamTimeThree: document.getElementById('ExamTimeThree').value,
   ExamThreeLocal: document.getElementById('input[name="In-Person3"]:checked') ? "In-Person" : "Online",
  RememberMe: document.getElementById('RememberMe').checked
};


  console.log(JSON.stringify(NewSchedule, null, 2));
  
  document.querySelector(".footer").innerText = JSON.stringify(NewSchedule, null, 2);
  });
}); 
