getPage();
scrollFunction();

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav .menu");

    document.querySelector(".burger_open").addEventListener("click", function () {
        nav.classList.toggle("hide")
        this.classList.toggle("open_menu")
    })

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };
});

function scrollFunction() {
        let scrollBtn = document.querySelector("#scroll_btn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.classList.remove("hide");
            scrollBtn.addEventListener("click", topFunction);
        } else {
            scrollBtn.classList.add("hide");
            scrollBtn.removeEventListener("click", topFunction);
        }}

  // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo(0, 0);
    }


function buildLyrics() {
    let lyricDOM = document.querySelector(".lyrics");
    let template = document.querySelector("template#collapse")
    if(template){
        getLyrics().then(lyrics=>{
            lyrics.forEach(lyric => {
                let collapse = template.content.cloneNode(true);
                collapse.querySelector(".title").innerHTML = lyric.title.rendered;
                collapse.querySelector("p").innerHTML = lyric.lyrics_original;

                lyricDOM.appendChild(collapse);
            })
            document.querySelectorAll(".collapse").forEach(collapse=>{
                collapse.addEventListener("click", function () {
                    this.classList.toggle("open");
                    let icon = this.querySelector(".arrow");
                    if (icon.classList.contains("open")) {
                        icon.classList.remove("open");
                    } else {
                        icon.classList.add("open");
                    }
                })
            })
        });
    }


}

function APIHook(){
    buildLyrics();
}



