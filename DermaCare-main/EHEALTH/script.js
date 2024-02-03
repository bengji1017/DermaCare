"use strict";
// contact us scroll
const contactScroll = document.querySelector(".scroll");
const footer = document.querySelector(".footer");
const btnLogin = document.querySelector(".btn-footer-login");
const main = document.querySelector(".main");
const appoitment = document.querySelector(".Appoitment");
const navH1 = document.querySelector(".nav-h1");

// Log in Card
const PasswordInput = document.getElementById("Password");
const UsernameInput = document.getElementById("Username");
const loginCard = document.querySelector(".login-card");
const singInBtn = document.querySelector(".singin-btn");
const wrongInput = document.querySelector(".wrong-input");

/// register Card
const btnRegisterFooter = document.querySelector(".btn-footer-register");
const registerCard = document.querySelector(".register-card");
const succssefulRegisterP = document.querySelector(".successful-register-p");
const RegisterUsernameInput = document.getElementById("Register-Username");
const RegisterPasswordInput = document.getElementById("Register-Password");
const RegisterBtn = document.querySelector(".Register-btn");

// btn book
const btnBook = document.querySelector(".btn-book");
//////////////////////////////////////////
let newAcc = {
  username: " ",
  password: "",
};

const account1 = {
  username: "beni",
  password: 1111,
};
const account2 = {
  username: "lisi",
  password: 2222,
};

contactScroll.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth" });
});

btnBook.addEventListener("click", function () {
  alert("Dr.John will contact you when he is available!");
});

btnLogin.addEventListener("click", function () {
  loginCard.classList.toggle("hidden");
  main.classList.toggle("blur");
  appoitment.classList.toggle("blur");

  loginCard.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});

singInBtn.addEventListener("click", function () {
  if (
    UsernameInput.value == account1.username &&
    PasswordInput.value == account1.password
  ) {
    loginCard.classList.add("hidden");
    main.classList.remove("blur");
    appoitment.classList.remove("blur");
    navH1.textContent = `Welcome back Ben`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (
    UsernameInput.value == account2.username &&
    PasswordInput.value == account2.password
  ) {
    loginCard.classList.add("hidden");
    main.classList.remove("blur");
    appoitment.classList.remove("blur");
    navH1.textContent = `Welcome back Lis`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (
    UsernameInput.value == newAcc.username &&
    PasswordInput.value == newAcc.password
  ) {
    loginCard.classList.add("hidden");
    main.classList.remove("blur");
    appoitment.classList.remove("blur");
    navH1.textContent = `Welcome  ${newAcc.username}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    wrongInput.classList.remove("hidden");
  }
});

btnRegisterFooter.addEventListener("click", function () {
  registerCard.classList.toggle("hidden");
  main.classList.toggle("blur");
  appoitment.classList.toggle("blur");

  registerCard.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});

RegisterBtn.addEventListener("click", function () {
  newAcc.username = RegisterUsernameInput.value;
  newAcc.password = RegisterPasswordInput.value;
  console.log(newAcc);

  registerCard.classList.add("hidden");
  main.classList.remove("blur");
  appoitment.classList.remove("blur");
});
