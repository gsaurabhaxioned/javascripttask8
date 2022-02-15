let email_field = document.querySelector('input[name="email"]'),
    email = document.querySelector('#email'),
    label = document.querySelectorAll('.input-label'),
    input_box = document.querySelectorAll('.input-box');
error_msg = document.querySelectorAll('.error'),
    error = document.querySelector('#error'),
    email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

email.addEventListener('keypress', function () {
    let email_value = email_field.value;
    if (email_value.match(email_pattern)) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "please enter valid email";
    }
});


for (let i = 0; i < input_box.length; i++) {
    input_box[i].addEventListener('focus', function () {
        for (let j = 0; j < label.length; j++) {
            label[j].classList.add('movespan');
        }
    });


    input_box[i].addEventListener('blur', function () {
        for (let j = 0; j < label.length; j++) {
            label[j].classList.remove('movespan');
            label[j].classList.add('movespandown');
        }
    });
}