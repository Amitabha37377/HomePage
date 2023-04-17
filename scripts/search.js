//Duckduckgo
function searchDuckduckgo() {
    let query = document.getElementById("search3").value;
    window.location.href = "https://www.duckduckgo.com/search?q=" + query;
}

//Startpage
function searchStartpage2() {
    let query = document.getElementById("search2").value;
    window.location.href = "https://www.startpage.com/search?q=" + query;
}

//Google
function searchGoogle() {
    let query = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + query;
}

//Google
function searchBing() {
    let query = document.getElementById("search4").value;
    window.location.href = "https://www.bing.com/search?q=" + query;
}

//Startpage for Main Search Box
function searchStartpage() {
    let query = document.getElementById("search_main").value;
    window.location.href = "https://www.startpage.com/search?q=" + query;
}