const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageList = document.createDocumentFragment();

export const generateImage = (image) => {
  const { url, likes, comments } = image;
  const imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;
  imageList.appendChild(imageElement);
};

document.querySelector('.pictures').appendChild(imageList);
