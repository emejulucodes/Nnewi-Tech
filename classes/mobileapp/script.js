"use strict";
let form,
  message,
  firstname,
  lastname,
  email,
  clas,
  phonenumber,
  address,
  skills;
window.addEventListener("load", () => {
  form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(true);
    firstname = document.querySelector("#first").value;
    lastname = document.querySelector("#last").value;
    address = document.querySelector("#address").value;
    skills = document.querySelector("#skill").value;
    email = document.querySelector("#email").value;
    clas = "Mobile App Development";
    phonenumber = document.querySelector("#phone").value;
    if (skills === "") {  
        message = `https://wa.me/2348188578955?text=Hello%2C%20I%20just%20registered%20for%20${clas}.%0AHere%20are%20my%20details%3A%0AName%3A%20${firstname} ${lastname}.%0AEmail%3A%20${email}.%0APhone%20Number%3A%20${phonenumber}.%0AAddress%3A%20${address}.`
    } else {
        message = `https://wa.me/2348188578955?text=Hello%2C%20I%20just%20registered%20for%20${clas}.%0AHere%20are%20my%20details%3A%0AName%3A%20${firstname} ${lastname}.%0AEmail%3A%20${email}.%0APhone%20Number%3A%20${phonenumber}.%0AAddress%3A%20${address}.%0ASkills%3A%20${skills}.`
    }
    window.open(message);
  });
});
