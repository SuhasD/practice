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
                               
                       
// Approach 2
                               
HTML:

Search Query

javascript

var searchField = document.getElementById("searchField"),
      lastTimeId,
      doSearchFun = function(e) {

      if(typeof lastTimeId !== 'undefined') {
          clearTimeout(lastTimeId);
      }

      lastTimeId = setTimeout[function() {
               // Do search stuff
               console.log('Do search for "' + searchField.value + '"');
          }, 400);
     }
;

searchField.addEventListener("keydown", doSearchFun);
