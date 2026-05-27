// JavaScript Form Validation logic snippet from assignment guidelines
(function () {
  'use strict'


  // Get the form elements using the required class
  var userForms = document.querySelectorAll('.needs-validation')


  // Run over the forms to prevent bad submissions
  Array.prototype.slice.call(userForms).forEach(function (currentForm) {
    currentForm.addEventListener('submit', function (submissionEvent) {
     
      // Check validation constraints
      if (!currentForm.checkValidity()) {
        submissionEvent.preventDefault()
        submissionEvent.stopPropagation()
      } else {
        alert('Success! Your form has been validated and submitted without errors.')
      }


      // Append standard class token to display red/green borders
      currentForm.classList.add('was-validated')
    }, false)
  })
})()


