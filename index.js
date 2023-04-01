import './style.css';

const navLinks = document.querySelectorAll('nav a');
const navHeight = document.querySelector('nav').offsetHeight;

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const sectionPos = document.querySelector(sectionId).offsetTop - navHeight;
    window.scrollTo({ top: sectionPos, behavior: 'smooth' });
  });
});
