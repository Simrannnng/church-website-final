document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the values from the form fields
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;

    // Validate that fields are filled
    if (fullName && email) {
        alert('Thank you for registration!');
        // Optionally, you could clear the form here or send data to a server
        // e.g. this.reset(); // Clears the form after submission
    } else {
        alert('Please fill in all the details.');
    }
});