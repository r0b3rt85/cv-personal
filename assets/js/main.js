/*======= SHOW MENU =======*/
const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);

  // Validate that the variable exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // Add the show menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/*======= REMOVE MENU MOBILE =======*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click the nav link it will remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*======= SCROLL SECTIONS ACTIVE LINK =======*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const srollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + secionId + ']').classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive);

/*======= SHOW SCROLL TOP =======*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll button
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);

/*======= DARK / LIGHT THEME =======*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme the interface has by validation
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.containes(iconTheme) ? 'bx-moon' : 'bx-sun';

// Check the previous selection from the user
if (selectedTheme) {
  // Add or remove class based on options
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Button to toggle the theme
themeButton.addEventListener('click', () => {
  // Toggle theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Store choice to local storage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})


/*======= REDUCE THE SIZE AND PRINT ON AN A4 SHEET =======*/
function scaleCV() {
  document.body.classList.add('scale-cv')
}

/*======= REMOVE THE SIZE WHEN THE CV IS DOWNLOADED =======*/
function removeScale() {
  document.body.classList.remove('scale-cv')
}

/*======= GENERATE PDF =======*/
// PDF generated area
let areaCV = document.getElementById('area-cv');
let resumeButton = document.getElementById('resume-button');


// Html2pdf options
let opt = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  pagebreak: { mode: 'avoid-all' },
  html2canvas: { scale: 4 },
  jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' }
};

// Function to call areaCv and Html2pdf options
function generateResume() {
  html2pdf(areaCV, opt);
}

// When the button is clicked - 3 functions will run
resumeButton.addEventListener('click', () => {
  // 1. scale the page ('scale-cv')
  scaleCV();
  // 2. pdf is created
  generateResume();
  // 3. scale is removed after 5 seconds
  setTimeout(removeScale, 5000);

})


/*======= =======*/
/*======= =======*/
