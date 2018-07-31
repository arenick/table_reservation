"use strict";

$(document).ready(function () {
    
    // let currentTable = null;

    // for (let i = 0; i <9; i++) {
    //     $("#table").append(`<div>${(i+1)}</div>`);
    // }
    // $("#table giv").attr("class","table div.available");

    // $("body").on("click", ".table div.available"), (e) => {
    //     $(form).show();
    //         currentTable = $(e.target);
    // });

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

    $(".save").on("click", () => {
        $(".table").addClass(".reserved")
    });

    // $("body").on("click", "form button:first", (e)  => {
    //     $("form").hide();
    //     //we need to add the element to remove the class form
    //     currentTable
    //     .removeClass("available");
    //     .addClass("reserved");
    // });

});