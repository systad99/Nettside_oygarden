

                                
var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Check if any of the form fields are empty
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields before sending the email.');
        return;
    }
    
    // Check if email field contains "@"
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    
    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    
    Email.send({
            SecureToken : "28d34dcc-aff6-434b-93b3-fb70a530f6d0", // Sett din sikre token her
            To : 'kundeservice@oygardenfrisbee.no',
            From : "systad99@gmail.com",
            Subject : "Kontaktskjema",                                           
            Body : body
        }).then(
            message => alert(message)
        );
});
    
                          