let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("loginBtn");
let loginHeading = document.getElementById("loginheading");

login.addEventListener("click", function (event) {
  event.preventDefault(); // ⛔ stop the page from reloading!

  if (username.value === "lavan" && password.value === "Lavank123") {
    loginHeading.textContent = "Login successful";
    loginHeading.style.color = "green";
  } else {
    loginHeading.textContent = "Invalid Credentials";
    loginHeading.style.color = "red";
  }
});
