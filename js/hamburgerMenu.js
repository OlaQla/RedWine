(function() {
   var button = document.getElementById('toggle-menu');
   button.addEventListener('click', function(event) {
       event.preventDefault(); // stop default event action 
       var menu = document.getElementById('main-menu');
       menu.classList.toggle('is-open');
   });
})();



