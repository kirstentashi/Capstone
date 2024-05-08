// Populate dropdown menu base on nav-items
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('#navItems .nav-link:not(.dropdown-toggle)');
    const dropdownMenu = document.getElementById('dropdownMenu');

    navItems.forEach(navItem => {
        const text = navItem.textContent;
        const href = navItem.getAttribute('href');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a class="dropdown-item" href="${href}">${text}</a>`;
        dropdownMenu.appendChild(listItem);
    });


    // -------- Date field - reservation form
    // Get the current date
    var currentDate = new Date().toISOString().split('T')[0];

    // Set the current date as the value of the input field
    document.getElementById('date').value = currentDate;
    // -------- / Date field - reservation form
});