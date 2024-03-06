const toggleBtn = document.querySelector('.mun__navbar-togglebtn')
const toggleBtnIcon = document.querySelector('mun__navbar-togglebtn i')
const dropDownMenu = document.querySelector('.mun__navbar-dropdown')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classlist.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

var index = 0;
var slides = document.querySelectorAll(".slides");
var dots = document.querySelectorAll(".dot");

function changeSlide() {
  // Hide all slides and remove active class from dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Increment index and reset if necessary
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }

  // Display the current slide and set the corresponding dot as active
  slides[index].style.display = "block";
  dots[index].classList.add("active");

  // Repeat the slideshow after 2 seconds
  setTimeout(changeSlide, 2000);
}

// Initially start the slideshow
changeSlide();