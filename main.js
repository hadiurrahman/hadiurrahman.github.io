const form = document.querySelector("form");
const email_id = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hamimrahman20@gmail.com",
    Password: "9B386C3F7A9553BC068B579D95EDBE3C11E8",
    To: "hamimrahman20@gmail.com",
    From: email_id,
    Subject: subject,
    Body: message,
  }).then((message) => {
    if (message == "OK") {
      alert("Mail sent");
    } 
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
