'use strict';

//active header

document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll("#right_header .right_header_title a ");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Remove the active class from all menu items
            menuItems.forEach(function (menuItem) {
                menuItem.classList.remove("active");
            });

            // Add the active class to the clicked item
            this.classList.add("active");
        });
    });
});


//Header wise content show



document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll("#right_header .right_header_title a");
    var sections = document.querySelectorAll(".content_section");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Remove the active class from all menu items
            menuItems.forEach(function (menuItem) {
                menuItem.classList.remove("active");
            });

            // Add the active class to the clicked item
            this.classList.add("active");

            // Hide all sections
            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            // Show the corresponding section
            var targetSection = document.getElementById(this.getAttribute("data-target"));
            targetSection.classList.add("active");
        });
    });
});


//Category data showing

function showCategory(categoryId) {
    // Hide all categories and remove active class from all buttons
    const categories = document.querySelectorAll('.data');
    const buttons = document.querySelectorAll('.category_title');

    categories.forEach(category => {
        category.classList.remove('active');
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected category and activate the corresponding button
    const selectedCategory = document.getElementById(categoryId);
    const selectedButton = Array.from(buttons).find(button => button.onclick.toString().includes(categoryId));

    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }

    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Optionally, show the first category by default
document.addEventListener('DOMContentLoaded', () => {
    showCategory('category1');
});
