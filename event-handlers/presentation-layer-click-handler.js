import { getPresentationLayer } from "../selectors/presentation-layer.js";
import { allowBodyScroll } from "../utils/allow-body-scroll.js";

export const handlePresentationLayerClick = () => {
  const presentationLayer = getPresentationLayer();

  // TODO: requires cleanup
  presentationLayer.addEventListener("click", (e) => {
    console.info("clicked on dropdown presentation layer");

    allowBodyScroll();

    presentationLayer.remove();
  });
};
