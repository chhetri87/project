// Contact form input focus effects
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll(".input");

  function addFocus() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function removeFocus() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", addFocus);
    input.addEventListener("blur", removeFocus);
  });

  // Form submission handling
  const contactForm = document.querySelector('form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('.input-div.one .input').value;
    const email = document.querySelector('.input-div:nth-of-type(2) .input').value;
    const phone = document.querySelector('.input-div:nth-of-type(3) .input').value;
    const message = document.querySelector('.input-div.message .input').value;
    
    // Simple validation
    if (name && email && message) {
      // Here you would typically send the data to a server
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
      
      // Reset focus states
      document.querySelectorAll('.input-div').forEach(div => {
        div.classList.remove('focus');
      });
    } else {
      alert('Please fill out all required fields (name, email, and message).');
    }
  });
});
