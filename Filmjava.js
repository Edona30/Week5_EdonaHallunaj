/*function openForm() {
    let form = document.getElementsByClassName("myForm");
    form.style.display = "block";
}*/
let loggedIn = false;

function closeForm() {
    let form = document.getElementById("myForm");
    form.style.display = "none";
}

function save() {
    let email = document.getElementByClassName("email").value;
    localStorage.setItem('email', email);
}
function welcome() {


    if (loggedIn) {
        let email = localStorage.getByClassName("password");
        alert("Benvenuto ");
    }
}