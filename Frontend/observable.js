var Observable = (function() {
  var observableValue = void 0;
  var observers = [];
  function Observable(initialValue) {
    if (typeof initialValue !== 'undefined') {
      observableValue = initialValue;
    }
  }
  function notifyObservers() {
      observers.forEach(function(observer) {
        observer(observableValue);
      });
  }
  Observable.prototype.setValue = function(value) {
    if (value !== observableValue) {
      observableValue = value;
      notifyObservers();
    }
  }
  Observable.prototype.getValue = function(value) {
    return observableValue;
  }
  Observable.prototype.subscribe = function(observer) {
    return observers.push(observer)
  }
  Observable.prototype.desubscribe = function(index) {
    observers.splice(index, 1);
  }
  return Observable;
})();


// 2 way
function twoWayBinding(element, observableInstance) {
  if (element.tagName === 'INPUT') {
    element.addEventListener('keyup', function() {
      observableInstance.setValue(element.value)
    })
    observableInstance.subscribe(function(value) {
      element.value = value
    })
  } else {
    observableInstance.subscribe(function(value) {
      element.innerHTML = value
    })
  }
}

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      var input = document.querySelector('input')
      var output = document.querySelector('p')
      var nombre = new Observable()
      twoWayBinding(input, nombre)
      twoWayBinding(output, nombre)
      nombre.setValue('Ingresar nombre')
    })
  </script>
