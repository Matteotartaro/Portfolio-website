function sendMail () {
    let parms = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_7nljpjg", "template_fnoabjk", parms)
        .then(function(response) {
            alert("Email Sent!");
            console.log("SUCCESS", response);
        }, function(error) {
            alert("Failed to send email.");
            console.error("FAILED", error);
        });
}