var searchInputEl = $("#search-input-text");
var formEl = $("#search-form");
var autoSizingSelectEl = $("#autoSizingSelect");


// Get the search results for a search query
function getSearchResults(searchQuery, format) {
    var requestUrl = encodeURI("https://www.loc.gov/" + format + "/?q=" + searchQuery + "&fo=json");
    console.log(requestUrl);
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // TODO: Add result to UI
        console.log(data);
    });
    document.location.replace('search.html')    
}

// A test
//getSearchResults("Civil War", "maps");

function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
    console.log(searchInputEl.val())
    console.log(autoSizingSelectEl.val());
    getSearchResults(searchInputEl.val().trim(), autoSizingSelectEl.val().toLowerCase().trim());
    // Clear the form values
    searchInputEl.val('');
    autoSizingSelectEl.val('');
}

// Submit event on the form
//We can use .on('submit', ...) as the click event for the <form> element and pass handleFormSubmit() as the callback function:
formEl.on('submit', handleFormSubmit);