
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let navLink = document.getElementById('main-nav').querySelectorAll('a');
navLink.forEach(function (element, index) {
  element.addEventListener('click', function () {
    let nav = document.getElementById('main-nav');
    if (nav.classList.contains('nav-modal')) {
      document.getElementById('burger').firstChild.classList.remove('burger-active');
      nav.classList.remove('nav-modal');
      nav.classList.add('main-nav');
    }
  });
});



document.querySelector('.burger-wraper').addEventListener('click', function () {
  toggleNav()
});

function toggleNav() {
  document.getElementById('burger').firstChild.classList.toggle('burger-active');
  document.getElementById('main-nav').classList.toggle('nav-modal');
  document.getElementById('main-nav').classList.toggle('main-nav');
}
