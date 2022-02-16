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


input_box.forEach(i=> {
    i.addEventListener('focus', function () {
        label.forEach(j=> {
            j.classList.add('movespan');
            j.classList.remove('movedown');
        });
    });


    i.addEventListener('blur', function () {
        label.forEach(j=> {
            j.classList.remove('movespan');
            j.classList.toggle('movedown');
        });
    });

    i.addEventListener('oninput', function(){
      i.removeEventListener('focus');
      i.removeEventListener('blur');
    });
});