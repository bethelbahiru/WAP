$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#words').val()
        };
        console.log(word);
        $.post('/look', data).s
    });

});