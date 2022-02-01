$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:8080/look', data).done(function () {
            alert('sucess!');
            console.log('yes here finally')
        })
    });
});