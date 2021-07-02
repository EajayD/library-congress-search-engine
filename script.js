// Get the search results for a search query
function getSearchResults(searchQuery, format) {
    var requestUrl = encodeURI("https://www.loc.gov/" + format + "/?q=" + searchQuery + "&fo=json");
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // TODO: Add result to UI
        console.log(data);
    });    
}

// A test
getSearchResults("Civil War", "maps");