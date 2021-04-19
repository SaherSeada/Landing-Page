/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navList = document.querySelector('#navbar__list');
const windowHeight = window.innerHeight;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Creates a and li tags for each section

function addToNavbar(section) {
    const newli = document.createElement('li');
    const newAnchor = document.createElement('a');
    newAnchor.textContent = section.getAttribute('data-nav');
    newAnchor.addEventListener('click', function() {
        section.scrollIntoView({behavior: "smooth"});
    })
    newli.appendChild(newAnchor);
    newli.className = 'menu__link';
    fragment.appendChild(newli);
}

// Removes active class from sections

function toggleClass(section) {
    if (section.classList.contains("your-active-class")) {
        section.classList.remove("your-active-class");
    }
}

// Adds active class to the section currently in the viewport

function checkActiveSection(section) {
    anchors = document.querySelectorAll('a');
    bounds = section.getBoundingClientRect();
    if (bounds.top >= 0 && bounds.bottom <= windowHeight) {
        allSections.forEach(toggleClass);
        section.classList.add("your-active-class");
        anchors.forEach(function(a) {
            if (a.classList.contains("active-section")) {
                a.classList.remove("active-section");
            }
            if (a.textContent == section.getAttribute("data-nav")) {
                a.classList.add("active-section");
            }
        })
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
allSections.forEach(addToNavbar);
navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function() {
    allSections.forEach(checkActiveSection);
});



