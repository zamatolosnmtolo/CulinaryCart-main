function submitEvent(form) {
    alert("Thank you, we will contact you soon.");
    return false;
  }

  function sendMail(){
    let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      Issue : document.getElementById("Issue").value,
      message : document.getElementById("message").value,
    }

    emailjs.send("service_8sobwrc","template_lq34c3r",parms)
  }