function changeImage(imgClickAndChange) {       /*mark cookie as favorite- mark heart as red */
  var x= imgClickAndChange;

  if (x.src == "https://www.flaticon.com/svg/static/icons/svg/812/812327.svg") 
  {
      x.src = "https://www.flaticon.com/svg/static/icons/svg/803/803087.svg";
  }
  else 
  {
      x.src = "https://www.flaticon.com/svg/static/icons/svg/812/812327.svg";
  }
}

function addedToCart(){ // function for alert customer cookie was added to cart
 
  alert("The cookie was added to the cart");
}

