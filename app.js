// First Section

const menu__mob = document.querySelector(".menu");
const links__mob = document.querySelector(".links__mob");
const links__hidden = document.querySelector(".links__visible");
const container_div = document.querySelector(".links-mob__container");
const close__visible = document.querySelector(".close");
menu__mob.style.cursor = "pointer";
close__visible.style.cursor = "pointer";

// Visible Links With ClassName(".links__visible")

menu__mob.addEventListener("click", () => {
  container_div.classList.toggle("links__visible");
  container_div.classList.remove("links__mob");
});

// Hide Links With ClassName(".links__hidden")

close__visible.addEventListener("click", () => {
  container_div.classList.toggle("links__mob");
  container_div.classList.remove("links__visible");
});

// Second Section

const dynamicText = document.querySelector("h1 span");
dynamicText.classList.add("stop-blinking");
const Words = ["REACH", "ENGAGE", "CONVERT"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = Words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  if (!isDeleting && charIndex < currentWord.length) {
    // if condition is True, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // if condition is True, remote the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // if word is deleted then switch to the next word
    dynamicText.classList.remove("stop-blinking");
    isDeleting = !isDeleting;
    wordIndex = isDeleting ? (wordIndex + 1) % Words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

// Two Section

const btn__submit = document.querySelector("btn__event");
const input__text_1 = document.querySelector("class__1");
const input__text_2 = document.querySelector("class__2");
const input__text_3 = document.querySelector("class__3");
let form__Input = document.forms["sign-up-form"];

// Function ShowValue In Contact

// function showValue(event) {
//   console.log(input__text_1.value);
//   console.log(input__text_2.value);
//   console.log(input__text_3.value);
//   event.preventDefault();
// }

btn__submit.addEventListener("click", function () {
  function showValue(event) {
    console.log(input__text_1.value);
    console.log(input__text_2.value);
    console.log(input__text_3.value);
    event.preventDefault();
  }
});

// Function Message Error And Validation Success !

function showError(errorElement, errorMessage) {
  document.querySelector("." + errorElement).classList.add("display-error");
  document.querySelector("." + errorElement).innerHTML = errorMessage;
}

function clearError() {
  let errors = document.querySelectorAll(".error");
  for (let error of errors) {
    error.classList.remove("display-error");
  }
}

btn__submit.onclick = function (event) {
  clearError();

  if (input__text_1.value === "") {
    showError("name-error", "You have to enter your name");
    return false;
  }

  if (input__text_2.value === "") {
    showError("email-error", "You have to enter your email");
    return false;
  }

  if (input__text_3.value === "") {
    showError("message-error", "You have to enter your message");
    return false;
  }

  document.querySelector(".success").classList.add("display-success");
  document.querySelector(".success").innerHTML =
    "Your registration was successful.";

  event.preventDefault();
};

// Cercle Top Direction

let calcValueScroll = () => {
  let scrollProgress = document.getElementById("top__progress");
  let progressValue = document.getElementById("top__progress__value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcValueScroll;
window.onload = calcValueScroll;

// By Kamal El Beqqal
