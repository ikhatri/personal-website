function darkMode() {
  var button = document.getElementById("dm-button");
  if (button.innerHTML === "Dark Mode") {
    button.innerHTML = "Light Mode";
  } else {
    button.innerHTML = "Dark Mode";
  }
  var element0 = document.getElementById("banner-section");
  var element1 = document.getElementById("photography");
  var element2 = document.getElementById("hum-section");
  var element3 = document.getElementById("project-section");
  var element4 = document.getElementById("gallery");
  var element5 = document.getElementById("footer");
  
  element0.style.transition = 'all 0.75s ease-in-out';
  element1.style.transition = 'all 0.75s ease-in-out';
  element2.style.transition = 'all 0.75s ease-in-out';
  element3.style.transition = 'all 0.75s ease-in-out';
  element4.style.transition = 'all 0.75s ease-in-out';
  element5.style.transition = 'all 0.75s ease-in-out';

  element0.classList.toggle("invert");
  element1.classList.toggle("invert");
  element2.classList.toggle("invert");
  element3.classList.toggle("invert");
  element4.classList.toggle("invert");
  element5.classList.toggle("invert");

  setTimeout(function(){
    element0.style.transition = '';
    element1.style.transition = '';
    element2.style.transition = '';
    element3.style.transition = '';
    element4.style.transition = '';
    element5.style.transition = '';
  }, 750);
}
