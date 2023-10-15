function checkValidation() {
    let isValid = true;
    if (document.getElementById('name').value === "") {
        document.getElementById("name-error").innerHTML = "Enter a valid full name";
        isValid = false;
    } 
    if (document.getElementById('email').value === '') {
        document.getElementById("email-error").innerHTML = "Enter a valid email";
        isValid = false;
    }
    if (document.getElementById('position').value === '') {
        document.getElementById("position-error").innerHTML = "Please select a position";
        isValid = false;
    } 
    if (document.getElementById('phone').value === '') {
        document.getElementById("phone-error").innerHTML = "Enter a valid phone number";
        isValid = false;
    }

    return isValid;
}

function save() {
    var existUserID = document.getElementById('id').value;

    var isValid = checkValidation();

    var gender;
    document.getElementsByName('gender').forEach((check) => {
        if(check.checked) 
        gender = check.value
    });

    var item = {
        id        : existUserID ? existUserID : userId(),
        name      : document.getElementById('name').value, 
        email     : document.getElementById('email').value, 
        position  : document.getElementById('position').value, 
        phone     : document.getElementById('phone').value,
        gender    : gender,
        confirmation   : document.getElementById('invalidCheck').checked
    }

    const base_url = 'http://localhost:8080/api/users';

    if (isValid) {
        if (document.getElementById('id').value) {
            apiCalling("PATCH", `${base_url}/${document.getElementById('id').value}`, item);
        } else {
            apiCalling("POST", base_url, item);
        }
    } 
}

function apiCalling(method, url, item) {
    $.ajax({
        type: method,
        async: true,
        dataType : 'json',
        url: url,
        data: item,
        success: function (result) {
            allData();
            document.getElementById('form').reset();
        }
    });
}

function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}

function validation(event) {
    if (event.target.value !== '' || event.target.checked) {
        document.getElementById(`${event.target.id}-error`).innerHTML = '';
    }
}


function userId() {
    return ([17]+13).replace(/[0-9]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1)))
    );
}