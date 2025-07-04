function sendMail(event) {
    event.preventDefault(); // impedisce il reload del form
  
    let parms = {
      name: document.getElementById("name").value,
      mail: document.getElementById("mail").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_7nljpjg", "template_fnoabjk", parms)
      .then(function (response) {
        alert("Email inviata!");
        console.log("SUCCESS", response);
      }, function (error) {
        alert("Invio fallito.");
        console.error("FAILED", error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", sendMail);
    } else {
      console.error("Il form con id 'contact-form' non è stato trovato nel DOM.");
    }
  });
  



  type="text/javascript">
  (function(){
    emailjs.init("hfTNmDMdOVk-Z91ff"); 
  })();