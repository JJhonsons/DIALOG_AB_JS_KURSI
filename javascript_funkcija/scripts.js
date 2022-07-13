var bttn =document.getElementById("submitButton");

   
function showAlert() {
     var name = document.getElementById("fullName").value;
     alert("Hello " + name + "!");
}

function showWelcomeMessage() {
     var name = document.getElementById("fullName").value;
     alert("Welcome, " + name + "!");
} 

//Event listener method
bttn.addEventListener("click", showAlert);
bttn.addEventListener("click", showWelcomeMessage);