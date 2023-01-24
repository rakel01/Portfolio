//intro effect
const quote = document.querySelector('.quote');

window.addEventListener('DOMContentLoaded', appear);

function appear() {
  quote.classList.add('appear')
}

//nav effect
window.addEventListener('scroll', sticky);

function sticky() {
  var nav = document.querySelector('.nav-bg');
  nav.classList.toggle('sticky', window.scrollY > 0);
}

//light effect
const check = document.getElementById('check')

check.addEventListener('click', light)

function light() {
  const aboutContent = document.querySelector('.about-content');
  aboutContent.classList.toggle('about-filter');
}

// //copyrights year

const date = new Date().getFullYear();
const year = document.getElementById('year');

year.textContent = date;