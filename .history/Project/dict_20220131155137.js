$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };

        $.post('http/look', data).done (function (data) {
            alert('sucess!');
        })
    });
});