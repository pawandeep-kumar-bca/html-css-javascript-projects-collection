const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitError = document.getElementById("submitError");

function validateName() {
  let name = document.getElementById("contact-name").value;
  if (name.length === 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length === 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits please";
    return false;
  }
  phoneError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  console.log(email);
  if (email.length === 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }
  messageError.innerHTML = `<i class="ri-checkbox-circle-fill"></i>`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMessage() ||
    !validatePhone()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = `Please fix error`;
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
