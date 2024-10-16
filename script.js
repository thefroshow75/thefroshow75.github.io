let currentIndex = 0;
const images = document.querySelectorAll('.banner img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

//setInterval(showNextImage, 3000); // Change image every 3 seconds


// script.js
document.getElementById('dropdownButton').addEventListener('click', function() {
    var content = document.getElementById('dropdownContent');
    content.classList.toggle('show');
});
