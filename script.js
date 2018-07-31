"use strict";

$(document).ready(function () {
    
    let table;

    $(".table").on("click", (e) => {
        table = $(e.target)
        $("form").show();
    });

    $("button").click(function() {
        $("form").hide();
        table.removeClass(".available").addClass(".reserved")
    });

    $(".exit").click(function(){
        $("form").hide();
    });

    $(".save").click(function() {
        $(table).addClass(".reserved")
    })

});