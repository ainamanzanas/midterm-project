window.onload = () => {

  const form = document.getElementById('form');
  const firstName = document.getElementById('first-name-input');
  const email = document.getElementById('email-input');
  const phone = document.getElementById('phone-input');
  const message = document.getElementById('message-input');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if full name input field is equal to "Ironhack"
    if (firstName.value.trim().toLowerCase() === 'ironhack') {
      alert("You cannot be Ironhack, because I am Ironhack.");
      return;
    }

    if (!email.value || !isValidEmail(email.value)) {
      alert("The email address is incorrect, please try again.");
      return;
    }

    form.submit();

    // validate phone between 8 & 10 numbers
    if (phone.value && (phone.value.length < 8 || phone.value.length > 10)) {
      alert("The phone number is incorrect, please enter a number between 8 and 10 digits.");
      return;
    }

    form.submit();

    // Validate message is not empty
    if (!message.value) {
      alert("Please enter a message.");
      return;
    }

    form.submit();
    alert("Form submitted successfully!");
  });

  // Validate email address format
  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  const SERVER_URL = 'http://localhost:3001/contacts';

  window.onload = () => {

    const form = document.getElementById('#form');
    form.addEventListener('.submit', function (event) {
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !phone || !message) {
        event.preventDefault();
        alert('Please fill all the fields.');
      }

      const name = document.getElementById('first-name').value;
      if (name === 'ironhack') {
        alert('You cannot be Ironhack, because I am Ironhack.');
        return;
      }

      _handleSubmit();
    });

    function _handleSubmit() {
      const name = document.querySelector('#first-name-input').value;
      const email = document.querySelector('#email-input').value;
      const phone = document.querySelector('#phone-input').value;
      const message = document.querySelector('#message-input').value;

      const newContact = {
        name,
        email,
        phone,
        message
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
        body: JSON.stringify(contact)
      })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    };
  }

  function _bindElements() {
    const submit = document.querySelector(".submit");

    submit.addEventListener('click', _handleSubmit);
  }

}
