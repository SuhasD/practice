
// Document ready, Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
   //  fetch data from navigation.json
   let cities = '';
   getJSON('/static/navigation.json',
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
         cities = data.cities;
         buildNavigation(cities);
      }
  });

  // Remove active tabs 
  function removeActiveTab(){
      var tabs = document.getElementsByClassName('tab');
      Array.from(tabs).forEach(function(element) {
        element.classList.remove('current');
      });
  }
  
  // Build the dynamic HTML
  function buildNavigation(cities){
    var list = document.getElementById("list");
     for (let i = 0; i < cities.length; i++ ) {
        var newLI = document.createElement("li"), // create a new li
            newContent = document.createTextNode(cities[i].label); // grab the city

        newLI.classList.add('tab');
        newLI.appendChild(newContent);
        list.appendChild(newLI);
    }
    listenAndMoveIndicator();
  }

  // Position the indicator according to onclick
  function listenAndMoveIndicator(){
    var tabs = document.getElementsByClassName('tab');
    var indicator = document.getElementById('indicator');  
    var rect = '';
    
    // Make the first menu item active, maybe not required, depending on application
    tabs[0].classList.add('current');
    rect = tabs[0].getBoundingClientRect();
    indicator.style.width = tabs[0].clientWidth + 'px';

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function() {
          // Remove current class from other elements
          removeActiveTab();
          // Add current class to clicked element
          this.classList.add('current');
          // Get position of clicked element to move indicator to the right position          
          rect = this.getBoundingClientRect();
          indicator.style.width = this.clientWidth + 'px';
          indicator.style.left = (rect.left + 'px');
        };

        // check for current class and update indicator position
        if(tabs[i].classList.contains('current')){
          rect = tabs[i].getBoundingClientRect();
          indicator.style.width = this.clientWidth + 'px';
          indicator.style.left = (rect.left + 'px');
        }
    }
  }

  // listen to resize event and move indicator accordingly
  window.addEventListener('resize', () => {
    listenAndMoveIndicator();
  });
});

  // Helper function for fetching data 
  var getJSON = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
          callback(null, xhr.response);
        } else {
          callback(status, xhr.response);
        }
      };
      xhr.send();
  };




