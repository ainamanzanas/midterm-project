window.onload = () => {

  document.querySelectorAll('a[href^="#services"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  const form = document.getElementById("form");
  const email = document.getElementById("email-input");
  const submit = document.getElementById("submit-btn");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    if (!isValidEmail(email.value)) {
      email.setCustomValidity("An email format is expected!");
      alert("The email address is incorrect, please try again.");
    } else {
      email.setCustomValidity("Valid email format");
      alert("Form submited succesfully!");
      form.submit();
    }
  });

  // Validate email address format
  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const SERVER_URL = 'http://localhost:3001/newsletter-contacts';

  function _handleSubmit() {
    const email = document.querySelector('email-input').value;

    const newContact = {
      email,
    };

    _saveContactData(newContact);
  }

  function _saveContactData(contact) {
    fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact),
      body: JSON.stringify({ email: email })
    });
  }

  function _bindElements() {
    const submit = document.querySelector(".submit");

    submit.addEventListener('click', _handleSubmit);
  }
}