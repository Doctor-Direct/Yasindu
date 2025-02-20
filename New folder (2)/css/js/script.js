document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Here you can add code to send the data to a server or handle it as needed
    // For now, we'll just redirect to the confirmation page
    window.location.href = 'confirmation.html';
});