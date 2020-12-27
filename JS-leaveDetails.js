
function phonenumber(inputtxt) //function that check the validation of a phone
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)){
    var match= false;
    Submitpage(match);
      return true;
}  
      else
        {
        alert("You need to put Phone number");
        return false;
        }     
}

  function checkValid(phone){ // this function check the input- if it's valid (empty)
      var i,y ,valid=true;
      y = document.getElementsByClassName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field- change the input color to red:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
   
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid==true) {  
  phonenumber(phone);
 }

 // return valid; // return the valid status
}
  
function Submitpage(match){ // function the submit the page
    var x=match
if(x==true){
    
}
else{
    alert("You details has been saved");
}    
}
  