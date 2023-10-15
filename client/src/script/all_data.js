
function loadUserData(userList) {
    table.innerHTML = ``;

    userList.forEach(function(value, i) {
        var table = document.getElementById('table');

        table.innerHTML += `
            <tr>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.position}</td>
                <td>${value.phone}</td>
                <td>${value.gender}</td>
                <td>${value.confirmation}</td>
                <td>
                    <div onclick="find(${value.id})">
                        <i class="success fas fa-edit"></i>
                    </div>
                </td>
                <td>
                    <div onclick="removeData(${value.id})">
                        <i class="danger fas fa-trash"></i>
                    </div>
                </td>
            </tr>
        `
    });
}

function allData() {
    const base_url = 'http://localhost:8080/api/users';

    $.ajax({
        type: 'GET',
        async: true,
        url: base_url,
        success: function(result) {
            console.log(result);
            loadUserData(result);
        }
    })
}