        function sendMail(contactForm) {
            console.log("sendMail active")
            emailjs.send("service_9950mb8", "ContactForm", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.email.value,
                "message": contactForm.message.value,
            })
            .then(
                function(response) {
                console.log("SUCCESS", response);
                location.reload();
                alert("Thank you! You email has been sent");
                },
                function(error) {
                    console.log("FAILED", error);                    
                }
            );
            return false;  // To block from loading a new page                  
        }  

    function resetForm(){
        document.getElementById("form").reset();
    }