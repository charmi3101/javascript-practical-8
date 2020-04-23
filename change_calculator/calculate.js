"use strict";
$(document).ready(function () {
    $("#calculate").click(function () {
        var cents = $("#cents").val();
        if (cents <= 0 || cents >= 100) {
            alert("Please Enter Number Between 1 to 99.");
        } else {
            makeChange(cents);
        }
    });
    var makeChange = function (cents) {
        if (cents > 24) {
            var quarters = Math.floor(cents / 25);
            $("#quarters").val(quarters);
            var cents = Math.floor(cents % 25);
        } else {
            $("#quarters").val(0);
        }
        if (cents > 9) {
            var dimes = Math.floor(cents / 10);
            $("#dimes").val(dimes);
            var cents = Math.floor(cents % 10);
        } else {
            $("#dimes").val(0);
        }
        if (cents > 4) {
            var nickels = Math.floor(cents / 5);
            $("#nickels").val(nickels);
            var cents = Math.floor(cents % 5);
        } else {
            $("#nickels").val(0);
        }
        if (cents > 0) {
            var pennies = Math.floor(cents / 1);
            $("#pennies").val(pennies);
        } else {
            $("#pennies").val(0);
        }
    } // end click() method
    // set focus on cents text box on initial load
    $("#cents").focus();

}); // end ready() method
