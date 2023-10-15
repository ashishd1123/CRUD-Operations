
function removeData(id) {
    const base_url = 'http://localhost:8080/api/users';

    $.ajax({
        type: 'DELETE',
        async: true,
        dataType: 'json',
        url: `${base_url}/${id}`,
        success: function (result) {
            try {
                allData();
            } catch (error) {
                new Error('Delete request is Fail.')
            }
        },
        error: function(error) {
            console.log(error.statusText);
        }
    })
}