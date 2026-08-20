document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let phone =
        document.getElementById("phone").value;

    let address =
        document.getElementById("address").value;

    let service =
        document.getElementById("service").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let problem =
        document.getElementById("problem").value;


    let message =
`Hello Sai Ram AC Service,

New AC Service Booking

Name: ${name}

Customer Phone: ${phone}

Address: ${address}

Service: ${service}

Preferred Date: ${date}

Preferred Time: ${time}

Problem:
${problem}`;


    let whatsappNumber = "919293124560";


    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

});
function sendServiceWhatsApp(service) {

    let whatsappNumber = "919293124560";

    let message =
        "Hello Sai Ram AC Service,\n\n" +
        "I need AC service.\n\n" +
        "Service Required: " + service + "\n\n" +
        "Please contact me.";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}