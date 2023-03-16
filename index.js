const SERVER_URL ='http://localhost:3001/newsletter-contacts';

window.onload = () => {

    function _handleSubmit() {
        const email = document.querySelector('#email-input').value;

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
                'Content-Type':'application/json'
            },
            body: JSON.stringify(contact)
            body: JSON.stringify({ email: email })
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .then(response => {
              if (response.status === 201) {
                alert('Thanks for subscribing to our newsletter!');
              } else {
                alert('Please try again.');
              }
            })
            .catch(error => {
              alert('Please try again.');
            });
    }

    function _bindElements () {
        const submit = document.querySelector(".submit");

        submit.addEventListener('click', _handleSubmit);
    }
}