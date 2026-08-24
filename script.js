// ========================================
// RAYDESIGNS JAVASCRIPT
// ========================================


// 1. MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Close mobile menu when a link is clicked

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// ========================================
// 2. PORTFOLIO FILTER
// ========================================

const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from every button

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Make clicked button active

        button.classList.add("active");


        // Get selected category

        const selectedCategory = button.dataset.filter;


        // Show/hide projects

        projects.forEach(function (project) {

            const projectCategory = project.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});






// ========================================
// 4. PROJECT BUTTONS
// ========================================

const projectButtons =
    document.querySelectorAll(".view-project");


projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Project details coming soon! 🚀"
        );

    });

});


// ========================================
// 5. WELCOME MESSAGE
// ========================================

console.log(
    "Welcome to RayDesigns — built by Raymond 🚀"
);