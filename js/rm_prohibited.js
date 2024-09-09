const images = document.querySelectorAll('img');

images.forEach(image => {
  image.oncontextmenu = () => {
    return false;
  }
});