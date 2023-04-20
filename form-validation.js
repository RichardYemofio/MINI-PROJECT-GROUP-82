function validateForm() {
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Check if the name field is empty
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  
  // Check if the email field is empty and has a valid email format
  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Email format is invalid");
    return false;
  }
  
  // Check if the password field is empty and has at least 8 characters
  if (password == "") {
    alert("Password must be filled out");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  
  // If all fields are valid, submit the form
  alert("Form submitted successfully");
  return true;
}
 