document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const nom = form.querySelector('input[name="nom"]').value.trim();
    const prenom = form.querySelector('input[name="prenom"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    
    if (nom && prenom && email && message && /\S+@\S+\.\S+/.test(email)) {
      console.log('Form submitted:', { nom, prenom, email, message });
      alert('Message envoyé avec succès! Nous vous répondrons bientôt.');
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  });
});

// Add active nav style if needed
const currentPage = window.location.pathname.split('/').pop();
if (currentPage.includes('index.html') || currentPage === '') {
  const links = document.querySelectorAll('.menu-navbar a');
  links.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(links).find(link => link.getAttribute('href')?.includes('index.html'));
  if (activeLink) activeLink.classList.add('active');
}

