const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav-bar');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  nav.classList.toggle('nav-bar-show');
  hamburger.innerHTML = menuOpen ? '&times;' : '&#9776;';
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Get the input values
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (email === "" || message === "") {
      alert("Please fill in both fields.");
      return;
    }

    const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert("Thank you! Your message has been sent.");
            form.reset();
          } else {
            alert("Oops! Something went wrong.");
          }
        })
        .catch(error => {
          console.error('Network error:', error); 
          alert("Network error. Please try again later.");
        });
   
  });
});


  