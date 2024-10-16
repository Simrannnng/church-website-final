
    document.getElementById('subscribe-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents form from submitting
        const emailInput = document.getElementById('email-input').value;
        
        if (emailInput) {
            alert('Thank you, you have subscribed!');
        } else {
            alert('Please enter a valid email.');
        }
    });

