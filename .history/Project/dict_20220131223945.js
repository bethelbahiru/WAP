$(document).ready(function () {
    
    $('#lookup').click(function() {
    

        $.ajax({ url: 'http://localhost:8080/look', ,data: {
            word: $('#words').val()
        } , dataType: 'json'}).done(function (result) {
            console.log(result);
        })
    });
});