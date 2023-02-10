import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
        .join('');
}
console.log(createImageCardsMarkup(galleryItems));

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  };
 

 const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
 
instance.show()
}


{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}


  // const closeModel = e => {
  //   if (e.code === 'Escape') {
  //     instance.close();
  //  }
  // }