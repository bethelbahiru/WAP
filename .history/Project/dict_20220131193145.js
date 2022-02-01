$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:/look', data).done(function (data) {
            alert('sucess!');
        })
    });
});