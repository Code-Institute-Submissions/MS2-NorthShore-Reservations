//Send email function

function sendMail(contactForm) {
    // Storing message value in variable
    var user_message = document.getElementById("message").value;

    // Replacing spaces with empty string
    user_message = user_message.replace(/\s/g, '');

    // Sending email with condition met
    if (user_message != "") {
        emailjs.send("service_9950mb8", "ContactForm", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value,
        })
            .then(
                function (response) {
                    location.reload();
                    alert("Thank you! You email has been sent");
                },
                function (error) {
                    alert("Sorry message can not be sent. Please check the format and try it later!");
                }
            );
        return false;  // To block from loading a new page 
    } else {
        alert("Message field can't not be empty or just white spaces!");
        return false;
    }            
}

// reset the contact form after message was sent    
function resetForm() {
    document.getElementById("form").reset();
}