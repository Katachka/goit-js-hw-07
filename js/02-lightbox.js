import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardsMarkup);
// galleryContainer.innerHTML = cardsMarkup;

function createImageCardsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>`;
    })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: 'bottom',
});

// console.log(createImageCardsMarkup(galleryItems));
// console.log(galleryContainer);
// console.log(galleryItems);


{/* <a class="gallery__item" href="large-image.jpg">
  <img 
  class="gallery__image" 
  src="small-image.jpg" 
  alt="Image description" />
</a> */}