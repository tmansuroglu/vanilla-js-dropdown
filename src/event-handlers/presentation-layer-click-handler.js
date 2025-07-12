import { allowBodyScroll } from "../utils/allow-body-scroll.js";

export const handlePresentationLayerClick = function () {
  console.info("clicked on dropdown presentation layer");

  allowBodyScroll();

  this.remove();
};
