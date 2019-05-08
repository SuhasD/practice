// <h2>Drag and drop Image into selected area</h2>

// <div id='status'></div>
// <div id='drop'>Drop file here.</div>
// <div id='list'></div>

// #drop{
//     min-height: 200px;
//     min-width: 300px;
//     border:2px dashed #ccc;
//     margin:20px;
//     padding:20px;
// }

// get reference to HTML nodes used below
var status = document.getElementById('status');
var drop = document.getElementById('drop');
var list = document.getElementById('list');

// check if browser supports HTML5 FileReader
if (window.FileReader) {
  loadReader();
} else {
  document.getElementById('status').innerHTML = 'Your browser does not support FileReader.';
}

function loadReader(){
    // prevent default behavior of browser from changing URL to local file URL
    addEventHandler(window, 'load', function() {
     function abort(e) {
        e.preventDefault();
        return false;
    }
    
    // Tell browser this is possible
    addEventHandler(drop, 'dragover', abort);
    addEventHandler(drop, 'dragenter', abort);
    
    addEventHandler(drop, 'drop', function(e) {
      // Again, prevent the older browser from redirecting off to the image.
      e = e || window.event;  
      if (e.preventDefault) {
        e.preventDefault();
      } 
      
      // Crux of the logic - Use readAsDataURL() method
      var dt = e.dataTransfer;
      var files = dt.files;
      // This enables us to drag more images. It will be displayed below each. 
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
          
        var reader = new FileReader();
        reader.readAsDataURL(file);
        addEventHandler(reader, 'loadend', function(e, file) {
          var bin = this.result;
            
          // Logic to display file name and filesize
          var newFile = document.createElement('div');
          newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
          list.appendChild(newFile);
          var fileNumber = list.getElementsByTagName('div').length;
          status.innerHTML = fileNumber < files.length ?
            'Loaded 100% of file ' + fileNumber + ' of ' + files.length + '...' :
            'Done loading. processed ' + fileNumber + ' files.';
          
          // Create an Image node and append readAsDataURL result
          var img = document.createElement("img");
          img.file = file;
          img.src = bin;
          drop.appendChild(img);
        }.bindToEventHandler(file));
      }
      return false;
    });
    
    // Bind the events to the handlers
    // Could be avoided if we use ES6 fat arrows for function declarations
    Function.prototype.bindToEventHandler = function bindToEventHandler() {
      var handler = this;
      var boundParameters = Array.prototype.slice.call(arguments);
      console.log(boundParameters);
      // closure
      return function(e) {
        // get window.event if e argument missing (for older browsers) 
        e = e || window.event;   
        boundParameters.unshift(e);
        handler.apply(this, boundParameters);
      }
    };
  });
}

// Add eventHandler for methods defined above
function addEventHandler(obj, evt, handler) {
  if (obj.addEventListener) {
    obj.addEventListener(evt, handler, false);
  } else if (obj.attachEvent) {
    // for older browsers
    obj.attachEvent('on' + evt, handler);
  }
}