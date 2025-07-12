export const handlePresentationLayerClick = function () {
  console.info("clicked on dropdown presentation layer");

  document.body.classList.remove("css-disable-overflow");

  this.remove();
};
