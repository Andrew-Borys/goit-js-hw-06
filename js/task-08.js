const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  form.reset();

  if (mail === "" || password === "") {
    alert("Будь ласка, заповніть всі поля!");
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);
}
