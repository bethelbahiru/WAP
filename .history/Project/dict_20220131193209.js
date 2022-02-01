$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.post('http://localhost:808/look', data).done(function (data) {
            alert('sucess!');
        })
    });
});