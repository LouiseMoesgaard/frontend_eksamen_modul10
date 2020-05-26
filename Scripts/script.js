getPage();
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

});


function visGallery(images) {
  var galleryDOM = document.querySelector(".slider");

  if (!galleryDOM) {
    console.error("Trying to add images without DOM object present");
    return;
  } else {
    if (id = 73) {
      const template = document.querySelector(".sli_dj").content;
      images.forEach(image => {
        const klon = template.cloneNode(true);
        klon.querySelector("img").src = image.guid;
        galleryDOM.appendChild(klon);
      });
    }
    if (id = 78) {
      const template = document.querySelector(".sli_c").content;
      images.forEach(image => {
        const klon = template.cloneNode(true);
        klon.querySelector("img").src = image.guid;
        galleryDOM.appendChild(klon);
      });
    }
    if (id = 84) {
      const template = document.querySelector(".sli_k").content;
      images.forEach(image => {
        const klon = template.cloneNode(true);
        klon.querySelector("img").src = image.guid;
        galleryDOM.appendChild(klon);
      });
    }
  }
}

function visLyrics(lyrics) {
  console.log("vis lyrics");
  var lyricsDOM = document.querySelector(".lyricswrapper");
  if (!lyricsDOM) {
    console.error("Trying to add lyrics without DOM object present");
    return;
  } else {
    const template = document.querySelector(".lyric_collapse");
    texts.forEach(lyric => {
      const klon = template.cloneNode(true);
      klon.querySelector(".songtitle").textcontent = lyric.song_title;
      klon.querySelector(".original").textContent = lyric.lyrics_original;
      klon.querySelector(".english").textContent = lyric.lyrics_english;
      lyricsDOM.appendChild(klon);
    });
  }
}
