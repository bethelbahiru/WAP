$(document).ready(function () {
    
    $('#lookup').on('submit',function(event) {
        
        $.ajax({ url: 'http://localhost:8080/look', 
                type: "POST" ,
                data: { word: $('#words').val()} , 
                dataType: 'json',
                success: function(result) {
                    $("#result > ul").html("");
                    if (Object.keys(result).length === 0 ) {}
                    // for (let i = 0; i < result.length; i++) {
                    //   let defn = $(
                    //     "<li>(" +
                    //     result[i].wordtype +
                    //     ")::  " + 
                    //     result[i].definition + 
                    //     "</li>"
                    //   );
                    //   defn.appendTo($("#result > ul"));
                    // }
                }})

        event.preventDefault();
    });
});