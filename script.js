// script.js

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect the form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        e.target.reset(); // Clear the form
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
