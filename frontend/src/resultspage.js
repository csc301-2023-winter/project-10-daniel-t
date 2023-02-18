
function search_results () {
    var queryString = window.location.search;
    var searchResults = decodeURIComponent(queryString.substring(15));
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = searchResults;

    if (searchResults == "No matches found.") {
        var button = document.createElement("button");
        button.innerHTML = "Go Back";
        button.classList.add("goback-button");

        var link = document.createElement("a");
        link.href = "index.html";
        link.appendChild(button);

        resultsDiv.appendChild(link);

    }
}