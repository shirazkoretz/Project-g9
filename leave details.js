
    function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(myform.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
