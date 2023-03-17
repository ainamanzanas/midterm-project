const SERVER_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

window.onload = () => {

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

    console.log(newContact);

    _saveContactData(newContact);
  }

  function _getProjectTitleURL() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    return params.title;
  }

  async function _getProjectData() {
    const response = await fetch(SERVER_URL);
    const data = await response.json();
    const [projectToShow] = projects.filter(project => project.name.toLowerCase() === _getProjectTitleURL());

    _updateProjectData(projectToShow);
  }

  function _updateProjectData(projectToShow) {
    const projectTitleHeader = document.querySelector('.project1');
    projectTitleHeader.textContent = projectToShow.name;
  }

  _getProjectData();
}