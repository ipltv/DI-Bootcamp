const form = document.forms[0];
console.log(form);

const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");
const inputSubmit = document.getElementById("submit");
console.log(inputFname, inputLname, inputSubmit);

const inputFnameByName = form.firstname;
const inputLnameByName = form.lastname;
console.log(inputFnameByName, inputLnameByName);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = form.firstname.value;
    let lastName = form.lastname.value;
    if (firstName && lastName){
        let fnameLi = document.createElement("li");
        fnameLi.innerText = firstName;
        let lnameLi = document.createElement("li");
        lnameLi.innerText = lastName;
        let ul = document.getElementsByTagName("ul")[0];
        ul.appendChild(fnameLi);
        ul.appendChild(lnameLi);
    }
})