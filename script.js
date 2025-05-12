
  function sendMail(event) {
    event.preventDefault(); // impedisce il reload della pagina

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
    document.getElementById("contact-form").addEventListener("submit", sendMail);
  });