$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:3306/look', data).done(function (data) {
            alert('sucess!');
        })
    });
});