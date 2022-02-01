$(document).ready(function () {
    
    $('#lookup').click(function() {
        var word = {
            word: $('#word').val()
        };
        console.log(word);
        $.post('/look', )
    });

});