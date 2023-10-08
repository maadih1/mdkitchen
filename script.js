// Initialize EmailJS with your email service ID
emailjs.init("maadih1@gmail.com");

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields.");
        } else {
            // Use EmailJS to send the email
            emailjs.send("default_service", "template_your_email_template_id", {
                from_name: name,
                from_email: email,
                message: message,
            })
            .then(function (response) {
                console.log("Email sent successfully:", response);
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch(function (error) {
                console.error("Email sending failed:", error);
                alert("Message sending failed. Please try again later.");
            });
        }
    });
});
