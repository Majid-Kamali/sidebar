let dropDownButtons = document.querySelectorAll('.dropdown-btn');
let toggleButton = document.querySelector('.toggle-btn');
let sidebar = document.querySelector('.sidebar');


//toggle submenu
dropDownButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.nextElementSibling.classList.contains('show')) {
            CloseAllSubmenu();
        }
        btn.nextElementSibling.classList.toggle('show')
        btn.classList.toggle('rotate');

        //if sidebar close but click on menu has  submenu
        if (sidebar.classList.contains('close')) {
            sidebar.classList.toggle('close');
            toggleButton.classList.toggle('rotate');
        }
    })
})


// toggle sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    CloseAllSubmenu();
});


function CloseAllSubmenu() {
    // if sidebar close but submenu is open
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}