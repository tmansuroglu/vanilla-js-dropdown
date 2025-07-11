import { getPresentationLayer } from "../selectors/presentation-layer.js";
import { allowBodyScroll } from "../utils/allow-body-scroll.js";

export const handlePresentationLayerClick = function () {
  console.info("clicked on dropdown presentation layer");

  // TODO: use class
  allowBodyScroll();

  this.remove();
};
