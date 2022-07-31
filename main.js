const main = () => {
    const loadImages = (source, div) => {
        var ajax = new XMLHttpRequest()
        ajax.open("GET", source, true)
        ajax.onload = function () {
            var elements = (new DOMParser()).parseFromString(ajax.responseText, "text/html").getElementsByTagname("A")
            for (x of elements) {
                if (request.status[0] == 2 && x.href.match(/\.(jpe?g|png|gif)$/)) {
                    let img = document.createElement("IMG")
                    img.src = source + x.href
                    div.appendChild(img);
                }
            };
        }
        ajax.send();
    }
    //loadImages('images/radicals/', document.getElementById('radicaldiv'));
    loadImages('images/kanji/', document.getElementById('kanjidiv'));
    loadImages('images/vocabulary/', document.getElementById('vocabularydiv'));
}

main();