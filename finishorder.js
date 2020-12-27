var currentTab = 0; 
showTab(currentTab); 

function showTab(n) { // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("page");
  x[n].style.display = "block";
  // this will fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
    
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  } 
  // call a function that displays the correct step indicator- the tiny circels at the buttom:
  fixStepIndicator(n)
}

function nextPrev(n,phone) {
  // This function will figure out which tab to display next
  var x = document.getElementsByClassName("page");
  // Exit the function if any field in the current tab is invalid(empty):
  if (n == 1 && !validateForm()) return false; //if the form is at page 1 and all fields are full 
  // Hide the current tab:
  if (phonenumber(phone)){ // check for correct phone
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    
  }
  
  // if you have reached the end of the form :
  if (currentTab >= x.length) {
    Submitpage();
    //the form gets submitted:
    document.getElementById("details").submit();
    
   
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() { // function for check the input of feilds
  
  var x, y, i, valid = true;
  x = document.getElementsByClassName("page");
  y = x[currentTab].getElementsByClassName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field- will change th input to red:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    
  }
  //and adds the "active" class to the current step:
  x[n].className += " active";
}

function Submitpage(){ // this function will change the inner html after finishing all the steps
    if(nextBtn='Submit'){
        onclick=document.getElementById("nextBtn").style.visibility='hidden';
        onclick=document.getElementById("prevBtn").style.visibility='hidden';
        onclick= document.getElementById("fiilout").innerHTML='Your order has been sent to the store';
    }

    return false;
}
function phonenumber(inputtxt) //function that check the validation of a phone
{
    
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)){
    
      return true;
}  
      else
        {
        alert("You need to put Phone number");
        return false;
        }
        
}


