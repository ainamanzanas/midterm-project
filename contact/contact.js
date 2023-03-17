window.onload = () => {

    const form = document.getElementById('form');
    const inputs = document.querySelectorAll('#form');

    const experssions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Can contain letters, space & accents
        email: /^\[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.]+$/, // Email format
        phone: /^.{8,10}$/, // Phone number has from 8 to 10 digits
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Can contain letters, space & accents
    }

    const validateForm = (e) => {
        switch (e.target.name) {
            case "first-name":
                if(experssions.name.test(e.target.value)){
                    document.getElementById('name-section').classList.remove('form-section-incorrect');
                    document.getElementById('name-section').classList.add('form-section-correct');
                    document.querySelectorAll('name-section a')
                } else {
                    document.getElementById('email-section').classList.add('form-section-incorrect');
                }
            break;
            case "email":

            break;
            case "phone":

            break;
            case "message":

            break;
        }
    }

    inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
}

    form.addEventListener('submit', (e) => {
        e.preventDefault();

    });
}