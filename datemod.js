//creating datetime for last update//


function lmod() {
    let lastmod = new Date(document.lastModified);
    document.getElementById("lastmod").innerHTML = lastmod;
}
lmod();