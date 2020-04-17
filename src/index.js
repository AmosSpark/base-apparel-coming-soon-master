// Variables
const input = document.querySelector(".pg-fm__inp"),
  validationMsg = document.querySelector(".validate"),
  button = document.querySelector(".btn"),
  form = document.querySelector(".pg-fm");

// Events

const loadEvents = () => {
  form.addEventListener("submit", valForm);
  input.addEventListener("keyup", valInput);
};

// Validate

const valForm = (e) => {
  valInput();
  e.preventDefault();
};

// Event fns

// Input
const valInput = () => {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (input.value === "") {
    validationMsg.classList.add("msg");
    validationMsg.textContent = "Email cannot be empty";
    input.classList.add("icon");
    button.classList.add("btn-v");
  } else if (!re.test(input.value)) {
    validationMsg.classList.add("msg");
    validationMsg.textContent = "Please provide a valid email";
    input.classList.add("icon");
    button.classList.add("btn-v");
  } else {
    validationMsg.textContent = "";
    input.classList.remove("icon");
    button.classList.add("btn-f");
  }
  button.classList.add("btn-v");
};

// Invoke Events

loadEvents();
