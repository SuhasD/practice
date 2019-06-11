var input = document.getElementById("search");
var searchTimeout;

input.addEventListener('input', function(event) {
    searchTimer();
});

function searchTimer() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout[function() {
        makeAPICall(input.value)
    }, 400);
}
