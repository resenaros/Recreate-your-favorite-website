// Contact us form validation
let userName = "Jake";
let email = "Jake@gmail.com";
let phone = "1224567890";
let message = "message";

function validateForm(userName, email, phone, message) {
  if (!userName || !email || !phone || !message) {
    console.log("Please fill out all fields.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    console.log("Email looks incorrect.");
    return false;
  }

  if (phone.length < 10) {
    console.log("Phone number seems too short.");
    return false;
  }

  console.log("Looks good! Ready to submit.");
  return true;
}

validateForm("", "", "", "");
validateForm("Jake", "Jakegmail.com", "1234567890", "Hello World");
validateForm("Jake", "Jake@gmail.com", "123", "Hello");
validateForm(userName, email, phone, message);

// End Contact us form validation
