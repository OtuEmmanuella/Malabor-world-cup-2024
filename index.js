

let loader = document.querySelector(".loader")
window.addEventListener("load", vanish)

function vanish(){
    loader.classList.add("disppear")
}

document.addEventListener("DOMContentLoaded", function () {
    // Simulate preloader animation completion after 1 seconds
    setTimeout(function () {
        document.querySelector(".loader").classList.add("loaded");
    }, 1000); // Adjust time according to your preloader animation duration
});

document.addEventListener("DOMContentLoaded", function () {
    // Delay the execution of preloader animation by 1 seconds
    setTimeout(function () {
        loader.classList.add("loaded");
    }, 1000); // Adjust delay according to your preference
});






  