var topButton = document.getElementById("topBtn");
var burger = document.getElementById("mob-nav");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function returnToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openBurger(x) {
    x.classList.toggle("change");
    burger.classList.toggle("closed");
}
