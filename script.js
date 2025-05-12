function sendMail () {
    let parms = {
        name: document.getElementsByName("name").value,
        mail: document.getElementsByName("mail").value,
        message: document.getElementsByName("message").value,
    
    }
    emailjs.send("service_7nljpjg","template_fnoabjk",parms).then (alert("Email Sent!!"))

}