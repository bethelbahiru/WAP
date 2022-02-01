$(document).ready(function () {
    
    $('#lookup').on('submit',function(event) {
        
        $.ajax({ url: 'http://localhost:8080/look', 
                type: "POST" ,
                data: { word: $('#words').val()} , 
                dataType: 'json',
                success: function(result) {
                    $("#result > ul").html("");
                    if (Object.keys(result).length === 0 ) {
                      $("<li>No definition found!</li>").appendTo($("#result > ul"));
                    } else {
                         ?
                    }
                 
                }})

        event.preventDefault();
    });
});