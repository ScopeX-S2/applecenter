var menu = document.querySelector('.menu').addEventListener('click', event => {
    if (document.querySelector('header nav').style.right == "0%") {
        document.querySelector('header nav').style.right = "-100%"
    } else {
        document.querySelector('header nav').style.right = "0%"
    }
})

var menu_LI = document.querySelectorAll('header nav ul li');

for(var i = 0; i < menu_LI.length; i++) {
    menu_LI[i].addEventListener('click', (event) => {
        document.querySelector('header nav').style.right = "-100%"
    })
}