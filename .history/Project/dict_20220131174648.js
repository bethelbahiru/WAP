$(document).ready(function () {
    
    $('#lookup').click(function() {
        pre
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:8080/look', data).done(function (data) {
            alert('sucess!');
        })
    });
});