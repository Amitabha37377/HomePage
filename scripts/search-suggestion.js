function showSuggestions(str) {
    if (str.length == 0) {
        document.getElementById("search-suggestions").style.display = "none";
        return;
    } else {
        document.getElementById("search-suggestions").style.display = "block";
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var suggestions = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < suggestions[1].length; i++) {
                output += "<a href='https://www.google.com/search?q=" + suggestions[1][i] + "'>" + suggestions[1][i] + "</a>";
            }
            document.getElementById("search-suggestions").innerHTML = output;
        }
    };
    xhttp.open("GET", "https://suggestqueries.google.com/complete/search?client=firefox&q=" + str, true);
    xhttp.send();
}

function searchGoogle() {
    var query = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + query;
}