$(document).ready(function () {
    
    $('#lookup').click(function() {
        var data = {
            word: $('#word').val()
        };
        console.log(word);
        $.post('/look', )
    });

});