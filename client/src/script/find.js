//method to get detail personal data based on id
function find(id){

    const base_url = 'http://localhost:8080/api/users';

    $.ajax({
        type: "GET",
        async: true,
        url: base_url,
        success: function (result) {
            editUserData(result, id);
        }
    });
}

function editUserData(userData, id) {
    document.getElementById("name-error").innerHTML = '';
    document.getElementById("email-error").innerHTML = '';
    document.getElementById("position-error").innerHTML = '';
    document.getElementById("phone-error").innerHTML = '';
    
    userData.forEach(function (value){
        if(value.id == id){
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('email').value = value.email
            document.getElementById('position').value = value.position
            document.getElementById('phone').value = value.phone
            document.getElementById(value.gender).checked = true
            document.getElementById('invalidCheck').checked = value.confirmation
        }
    })
}