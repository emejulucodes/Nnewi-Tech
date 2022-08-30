"use strict";
let form, message, firstname, lastname, email, clas, phonenumber;
window.addEventListener("load", () => {
  form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(true);
    firstname = document.querySelector("#first").value;
    lastname = document.querySelector("#last").value;
    email = document.querySelector("#email").value;
    clas = "Backend Development";
    phonenumber = document.querySelector("#phone").value;
    message = `
    https://wa.me/2348068597140?text=Hi%2C%20i%20just%20applied%20for%20the%20${clas}%20class.%0AHere%20are%20my%20details%3A%0AName%3A%20${firstname}%20${lastname}%2C%0Aemail%3A%20${email}%2C%0APhone%20Number%3A%20${phonenumber}.%0AThanks.
`;
    window.open(message);
    });
});
