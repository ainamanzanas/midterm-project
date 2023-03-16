const SERVER_URL ='http://localhost:3001/contacts';

window.onload = () => {

    function _handleSubmit() {
        const name = document.querySelector('#first-name-input').value;
        const email = document.querySelector('#email-input').value;
        const phone = document.querySelector('#phone-input').value;
        const message = document.querySelector('#message-input').value;

        if (form.name === 'Ironhack') {
                alert('You cannot be Ironhack, because I am Ironhack.');
        }

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
                'Content-Type':'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .then(response => {
                if (response.status === 201) {
                  alert('Thank you! We will contact you soon.');
                } else {
                  alert('There was an error while retriving your form, please try again.');
                }
              })
              .catch(error => {
                alert('There was an error while retriving your form, please try again.');
              });
          };
    }

    function _bindElements () {
        const submit = document.querySelector(".submit");

        submit.addEventListener('click', _handleSubmit);
    }