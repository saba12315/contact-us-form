document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Error fields
    let hasError = false;
  
    // Clear errors
    document.querySelectorAll('.error').forEach(el => el.innerText = '');
  
    // Name validation
    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      hasError = true;
    }
  
    // Email validation
    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('emailError').innerText = 'Invalid email format';
      hasError = true;
    }
  
    // Subject validation
    if (subject === '') {
      document.getElementById('subjectError').innerText = 'Subject is required';
      hasError = true;
    }
  
    // Message validation
    if (message === '') {
      document.getElementById('messageError').innerText = 'Message is required';
      hasError = true;
    }
  
    if (!hasError) {
      alert('Message Sent Successfully!');
      document.getElementById('contactForm').reset();
    }
  });
  
  // Scroll-to-top button
  const topBtn = document.getElementById("topBtn");
  
  window.onscroll = function () {
    topBtn.style.display = window.scrollY > 100 ? "block" : "none";
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  