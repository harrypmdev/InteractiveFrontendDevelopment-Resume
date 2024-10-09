function sendMail(contactForm) {
    emailjs.send("service_wpzrvp5", "template_gl8dur5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    }).then(function(response) {
        console.log("Success!", response);
    }, function(error) {
        console.log("Failed.", error);
    });
}