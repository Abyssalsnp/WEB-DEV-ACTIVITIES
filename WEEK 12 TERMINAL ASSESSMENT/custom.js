// Run code after Document Object Model finishes mapping out elements
document.addEventListener('DOMContentLoaded', function () {
    'use strict';


    // Link form variables
    var myForm = document.getElementById('submissionForm');


    // Add intercept validation submit routine
    myForm.addEventListener('submit', function (event) {
       
        // Check if standard HTML constraint checks pass
        if (!myForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Success flow
            event.preventDefault();


            // Load and pop up our success window indicator
            var modalTarget = document.getElementById('validationSuccessModal');
            var launchModal = new bootstrap.Modal(modalTarget);
            launchModal.show();


            // Reset text states and clear classes safely
            myForm.reset();
            myForm.classList.remove('was-validated');
            return;
        }


        // Toggle native Bootstrap feedback presentation state colors
        myForm.classList.add('was-validated');
    }, false);
});


