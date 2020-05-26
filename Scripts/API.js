const endpoint = "http://moesgaard-designs.dk/kea/10-eksamen/wordpress/wp-json/wp/v2/";

const frontPageOrder = ["landing-page", "about", "videos", "photos", "reviews"];

async function getPage() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    if (!id) {
        id = 1;
    }
    if (id !== 1) {
        const response = await fetch(endpoint + "posts/" + id);
        let post = await response.json();

        var main = document.querySelector("main");
        main.innerHTML = post.content.rendered;
    } else {
        const response = await fetch(endpoint + "posts?categories=2");
        let posts = await response.json();
        let result = [];
        frontPageOrder.forEach(key => {
            let found = false;
            posts.filter(post => {
                if (!found && post.slug === key) {
                    result.push(post);
                    found = true;
                    return false;
                } else {
                    return true;
                }
            })
        });

        var main = document.querySelector("main");
        main.classList.add("frontpage");
        main.innerHTML = result.map(post => post.content.rendered).join();
    }
    APIHook();
}

async function getGallery() {
    const response = await fetch(endpoint + "gallery/" + id)
    let gallery = await response.json();

    visGallery(json);
}

async function getLyrics() {
    const response = await fetch(endpoint + "lyric/");
    return await response.json()
}

async function getAlbums() {
    const response = await fetch(endpoint + "album/");
    return await response.json()
}
