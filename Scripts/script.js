document.addEventListener("DOMContentLoaded", function () {
    getPage();
    const nav = document.querySelector("nav .menu");

    document.querySelector(".burger_open").addEventListener("click", function () {
        nav.classList.remove("hide")
    })
    document.querySelector(".burger_close").addEventListener("click", function () {
        nav.classList.add("hide")
    })
});
