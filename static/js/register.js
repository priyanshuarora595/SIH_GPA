function func1() {
    $('.grid-container').html('').load(
        "new_random_img"
    );
}


function shuffle(event) {
    pswd1 = Array.from(gpwd_set);
    gpwd_set.clear();
    document.getElementById('reload_image').hidden = true;
    document.getElementById('confirm_image').hidden = true;
    document.getElementById('register_btn').hidden = false;
    document.getElementById('info').innerHTML = 'Now find those 3 images in order. These will become blur in 10 seconds. You will be able to select only after images becomes blur.';
    event.preventDefault();
    $('.grid-container').html('').load(
        "shuffle_img"
    );

    timer();
}

var gpwd_set = new Set();
var pswd1 = '';
var pswd2 = '';


function check_email(event) {
    var x = document.getElementById("prompt1");
    var y = document.getElementById("prompt2");
    console.log(document.getElementById('email').value);
    if (document.getElementById('email').value == "") {
        console.log("here");

        x.innerHTML = 'Please enter email id!';
        x.style.color = 'red';
    }
    else
    {

        if (gpwd_set.size < 3) {
            y.innerHTML = "please select 3 images";
            y.style.color = 'red';
        }
        
        else {
            x.innerHTML = '';
            y.innerHTML = '';
            shuffle(event);
            timer();
        }
    }
}


//submission part
function post(path, params, method = 'post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.getElementById('my_form');
    form.method = method;
    form.action = path;
    

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];
            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

// Submit post on submit
var form = document.getElementById('my_form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    post('check_email', {
        email: document.getElementById('email').value,
        password1: pswd1,
        password2: Array.from(gpwd_set),
    })
});
