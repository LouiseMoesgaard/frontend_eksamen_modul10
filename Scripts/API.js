const endpoint = "http://moesgaard-designs.dk/kea/10-eksamen/wordpress/wp-json/wp/v2/";

async function getPage() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    if (!id) {
        id = 1;
    }
    if (id == 1)
        const response = await fetch(endpoint + "posts/" + id);
    let post = await response.json();

    var main = document.querySelector("main");
    main.innerHTML = post.content.rendered;
}
