// Number of pictures
const numberOfPictures = 8;

// Get the .pictures div
const picturesContainer = document.querySelector('.pictures');

// Dynamically create and append image elements
for (let i = 1; i <= numberOfPictures; i++) {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const image = document.createElement('img');
  image.src = `picture${i}.png`;
  image.alt = `Picture ${i}`;

  imageContainer.appendChild(image);
  picturesContainer.appendChild(imageContainer);
}
