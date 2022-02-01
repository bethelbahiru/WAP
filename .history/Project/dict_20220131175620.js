$(document).ready(function () {
    
    $('#lookup').click(function(event) {
        preventDefault();
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:8080/look', data).done(function (data) {
            alert('sucess!');
        })
    });
});