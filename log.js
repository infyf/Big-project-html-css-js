
const imageCards = document.querySelectorAll('.image_card');

imageCards.forEach((card) => {
    card.addEventListener('mouseover', () => {

        const textContent = card.querySelector('.text_content');

        textContent.style.visibility = 'visible';
    });

    card.addEventListener('mouseout', () => {

        const textContent = card.querySelector('.text_content');

        textContent.style.visibility = 'hidden';
    });
});

let images = Array.from(document.getElementsByClassName('tolbar-item'));
let mainPhoto = document.getElementById('mainPhoto');

function updateImages(event) {
  const image = event.target;
  mainPhoto.src = image.src;
}

images.forEach(function (image) {
  image.addEventListener('click', updateImages);
});