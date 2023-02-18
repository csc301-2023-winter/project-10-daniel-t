function updateFilterBox(filterId) {
  var filterDropdown = document.getElementById(filterId);
  var filterButton = document.getElementById(filterId + "-button");

//   When the user clicks on the button, 
// toggle between hiding and showing the dropdown content
  filterDropdown.classList.toggle("show");

  // If there are results shown, replace the text in the button as the selected option
  if (filterDropdown.classList.contains("show")) {
    var filterLinks = filterDropdown.querySelectorAll("a");
    for (var i = 0; i < filterLinks.length; i++) {
      filterLinks[i].addEventListener("click", function() {
        filterButton.textContent = this.textContent;
        filterDropdown.classList.remove("show");
      });
    }
  }
}



// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function searchbarClicked() {
  var searchbar = document.getElementById("searchbar");
  if (searchbar.value == "Enter a search term") {
    searchbar.value = "";
  }
}


var searchResults = document.getElementById("results").innerHTML;

function search() {
  // Get the search term entered by the user
  var searchTerm = document.getElementById("searchbar").value;
  
  if (searchTerm == "Enter a search term" || searchTerm.length == 0){
    emptySearch();
  } else {
  // Find all elements that contain the search term
  var elements = document.querySelectorAll("#projects *:not(h2):not(script):not(style):not(title)");
  var matches = [];
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.innerHTML.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
      matches.push(element.outerHTML);
    }
  }
  
  // Display the matching results
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (matches.length === 0) {
    
    resultsDiv.innerHTML = "No matches found.";

    var query = "?searchResults=" + encodeURIComponent(resultsDiv.innerHTML);

    window.location.href = "resultspage.html" + query;

  } else {
    for (var i = 0; i < matches.length; i++) {
      resultsDiv.innerHTML += matches[i];
    }
    var query = "?searchResults=" + encodeURIComponent(resultsDiv.innerHTML);
    window.location.href = "resultspage.html" + query;
  }
  }
}


function search_tag(event) {
  const searchTerm = event.target.textContent;
  var elements = document.querySelectorAll("#projects *:not(h2):not(script):not(style):not(title)");
  var matches = [];
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.innerHTML.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
      matches.push(element.outerHTML);
    }
  }
  
  // Display the matching results
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (matches.length === 0) {
    
    resultsDiv.innerHTML = "No matches found.";

    var query = "?searchResults=" + encodeURIComponent(resultsDiv.innerHTML);

    window.location.href = "resultspage.html" + query;

  } else {
    for (var i = 0; i < matches.length; i++) {
      resultsDiv.innerHTML += matches[i];
    }
    var query = "?searchResults=" + encodeURIComponent(resultsDiv.innerHTML);
    window.location.href = "resultspage.html" + query;
  }
}

function emptySearch() {
  var error = document.querySelector('#empty');
  // error.style.height = '30px';
  let timeoutId = null;
  error.classList.add('show');
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(function() {
    error.classList.remove('show');
  }, 1500);
}




