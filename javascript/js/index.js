/**
 * application script for index.html
 */

document.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function forEachElement(collection, fn) {
        var idx;
        for (idx = 0; idx < closeButtons.length; idx++) {
            fn(collection[idx]);
        }
    }

    console.log('DOM is ready');
    var clickMeButton = document.getElementById("click-me");
    clickMeButton.addEventListener('click', function(){
        alert("you clicked me");
    });

    var closeButtons = document.querySelectorAll(".alert .close");

    /*why
    var idx;
    var closeButton;
    for (idx = 0; idx < closeButtons.length; idx++) {
        closeButton = closeButtons[idx];
        closeButton.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    }*/
    clickMeButton.addEventListener('click', function () {
        var alerts = document.querySelectorAll('.alert');
        forEachElement(alerts, function(alert) {
            alert.style.display = 'block';
        });
    })

    forEachElement(closeButtons, function(button) {
       button.addEventListener('click', function() {
         button.parentElement.style.display = 'none';
        });
    });


});