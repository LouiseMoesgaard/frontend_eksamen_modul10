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
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo(0, 0);
}


function buildLyrics() {
  let lyricDOM = document.querySelector(".lyrics");
  let template = document.querySelector("template#collapse")
  if (template) {
    getLyrics().then(lyrics => {
      console.log(lyrics)
      lyrics.forEach(lyric => {
        let collapse = template.content.cloneNode(true);
        collapse.querySelector(".title").innerHTML = lyric.title.rendered;
        collapse.querySelector("p").innerHTML = lyric.lyrics_original;

        lyricDOM.appendChild(collapse);
      })
      document.querySelectorAll(".collapse").forEach(collapse => {
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

function buildAlbums() {
  let albumDOM = document.querySelector(".albums");
  let template = document.querySelector("template#album");
  if (template) {
    getAlbums().then(albums => {
      albums.forEach(album => {
        let box = template.content.cloneNode(true);
        box.querySelector("img").setAttribute("src", album.image.guid);
        box.querySelector("h2").innerHTML = album.title.rendered;
        box.querySelector(".year").innerHTML = album.year.substring(0, 4);
        box.querySelector(".links .listen").setAttribute("href", album.listen_here);
        box.querySelector(".links .buy").setAttribute("href", album.buy_here);

        albumDOM.appendChild(box);
      })
    })
  }
}

function buildSingles() {
  let singleDOM = document.querySelector(".singles");
  let template = document.querySelector("template#single");
  if (template) {
    getSingles().then(singles => {
      singles.forEach(single => {
        let box = template.content.cloneNode(true);
        box.querySelector("img").setAttribute("src", single.image.guid);
        box.querySelector("h2").innerHTML = single.title.rendered;
        box.querySelector(".year").innerHTML = single.year.substring(0, 4);
        box.querySelector(".links .listen").setAttribute("href", single.listen_here);
        box.querySelector(".links .buy").setAttribute("href", single.buy_here);

        singleDOM.appendChild(box);
      })
    })
  }

}

function buildConcerts() {
  let concertDOM = document.querySelector(".concerts");
  let template = document.querySelector("template#concert");
  if (template) {
    getConcerts().then(concerts => {
      concerts.forEach(concert => {
        let box = template.content.cloneNode(true);
        box.querySelector("img").setAttribute("src", concert.image_of_place.guid);
        box.querySelector("h2").innerHTML = concert.concert_date;
        box.querySelector(".desc").innerHTML = concert.description;
        box.querySelector(".place").innerHTML = concert.destination;
        box.querySelector(".time").innerHTML = concert.time.substring(0, 5);
        box.querySelector(".links .buy").setAttribute("href", concert.buy_tickets);

        concertDOM.appendChild(box);
      })
    })
  }

}

function buildGalleries() {
  let galleryDOM = document.querySelector("#photos_wrapper");
  let template = document.querySelector("template#gallery");
  if (template) {
    getGalleries().then(galleries => {
      galleries.forEach(gallery => {
        let box = template.content.cloneNode(true);

        box.querySelector("h2").innerHTML = gallery.title.rendered;
          gallery.images.forEach(image =>{
              let img = document.createElement("img");
              img.setAttribute("src", image.guid);
              box.querySelector(".slide").appendChild(img);
          })

        galleryDOM.appendChild(box);
      })

        document.querySelectorAll(".left").forEach(left =>{

            left.addEventListener("click", (e)=>{
            let gallery = e.target.parentNode;
            let slide = gallery.querySelector(".slide");
            let currentOffset = parseInt(slide.style.left, 10);
            if(!currentOffset) {
                currentOffset = 0;
            }

            let imageNr = slide.childElementCount;
            if(currentOffset == 0){
               slide.style.left = -1*(gallery.offsetWidth*(imageNr-1)) + "px";
            } else {
                slide.style.left = currentOffset + gallery.offsetWidth + "px";
            }
        })

        })

         document.querySelectorAll(".right").forEach(right =>{
            right.addEventListener("click", (e)=>{
            let gallery = e.target.parentNode;
            let slide = gallery.querySelector(".slide");
            let currentOffset = parseInt(slide.style.left, 10);
            if(!currentOffset) {
                currentOffset = 0;
            }

            let imageNr = slide.childElementCount;
            if(currentOffset == -1*(gallery.offsetWidth*(imageNr-1))){
               slide.style.left = 0;
            } else {
                slide.style.left = currentOffset - gallery.offsetWidth + "px";
            }

        })

         })



    })

  }
}


function APIHook() {
  buildLyrics();
  buildAlbums();
  buildSingles();
  buildConcerts();
    buildGalleries();
}
