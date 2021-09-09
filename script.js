// DOM REFERENCE

let year = document.getElementById("year");
const errorMsg = document.getElementById("error");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");

// for animation
const animationContainer = document.getElementById("animated-icons");
const loading = document.getElementById("btn-loading");
const checkmark = document.getElementById("checkmark");

// set the current Year
year.innerHTML = new Date().getFullYear();

// function to apply error style to Email Input box
const applyError = () => {
  email.style.border = "var(--errorBorder)";
  email.style.boxShadow = "var(errorShadow)";
  errorMsg.style.display = "block";
};

// function to reset Email Input to default values and hide error message
const removeError = () => {
  email.style.border = "var(--default-border)";
  email.style.boxShadow = "unset";
  errorMsg.style.display = "none";
};

// function to ensure that information being entered by User is valid
const emailValidation = (input) => {
  const regExp =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(regExp)) {
    removeError();
    submitBtn.style.color = "rgb(0,192,204)";
    submitBtn.style.backgroundColor = "rgb(0,192,204)";
    submitBtn.style.borderColor = "rgb(0,192,204)";
    animationContainer.style.zIndex = 1;
    loading.style.display = "inline-block";
  } else {
    applyError();
  }
};

submitBtn.addEventListener("click", function () {
  if (email.value === "") {
    applyError();
  } else {
    emailValidation(email);
  }
});

loading.addEventListener("animationend", function () {
  this.style.display = "none";
  checkmark.classList.add("confirmed");
});

checkmark.addEventListener("transitionend", function () {
  this.style.display = "none";
  submitBtn.style.color = "black";
  submitBtn.classList.add("disabled");
});
