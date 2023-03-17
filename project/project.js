const SERVER_URL ='https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

window.onload = () => {

  document.querySelectorAll('a[href^="#services"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  const email = document.getElementById("email-input");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("An email format is expected!");
    } else {
      email.setCustomValidity("Valid email format");
    }
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