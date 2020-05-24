getPage();
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav .menu");

    document.querySelector(".burger_open").addEventListener("click", function () {
        nav.classList.remove("hide")
    })
    document.querySelector(".burger_close").addEventListener("click", function () {
        nav.classList.add("hide")
    })


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        let scrollBtn = document.querySelector("#scroll_btn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.classList.remove("hide");
        } else {
            scrollBtn.classList.add("hide");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
});
