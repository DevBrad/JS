const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const final_message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fnameValue = fname.value;
  const lnameValue = lname.value;

  if (fnameValue == "") {
    setErrorFor(fname);
  } else {
    setSuccessFor(fname, showElement());
  }
  if (lnameValue == "") {
    setErrorFor(lname);
  } else {
    setSuccessFor(lname, showElement());
  }

  console.log(fname.value + lname.value);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerTest = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Confirmation Banner

function showElement() {
  const confirmation_banner = document.getElementById("confirmation-banner");
  confirmation_banner.style.visibility = "visible";
  final_message.innerHTML = "Thank you for contacting us, " + fname.value;
}

console.log(btn.value);
