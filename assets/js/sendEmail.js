function sendMail(contactForm) {
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
}

// reset the contact form after message was sent    
function resetForm() {
    document.getElementById("form").reset();
}