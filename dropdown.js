function navSmallDrop() {
  document.getElementById("nav-small-drop").classList.toggle("nav-small-show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-small-btn-icon')) {
    var dropdowns = document.getElementsByClassName("nav-small-drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('nav-small-show')) {
        openDropdown.classList.remove('nav-small-show');
      }
    }
  }
}
