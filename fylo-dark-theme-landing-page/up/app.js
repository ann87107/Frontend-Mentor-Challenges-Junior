const showcase = document.querySelector(".showcase"),
  nav = document.querySelector("nav"),
  hamburger = document.getElementById("hamburger"),
  form = document.getElementById("form"),
  email = document.getElementById("email");

  // Event Listeners
hamburger.addEventListener("click", e => {
  nav.classList.toggle("active");
})

window.addEventListener("scroll", () => {
  showcase.classList.toggle("active", window.scrollY > 1150);

});

form.addEventListener("submit", e => {
  e.preventDefault();
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    form.className = "sign-in__main--form";
  } else {
    form.className = "sign-in__main--form error";
  }
})

email.addEventListener("click", () => {
  form.className = "sign-in__main--form";
})
