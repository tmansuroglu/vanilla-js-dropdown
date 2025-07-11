import { getPresentationLayer } from "../selectors/presentation-layer.js";
import { allowBodyScroll } from "../utils/allow-body-scroll.js";

export const handlePresentationLayerClick = () => {
  const presentationLayer = getPresentationLayer();

  presentationLayer.addEventListener(
    "click",
    () => {
      console.info("clicked on dropdown presentation layer");

      allowBodyScroll();

      presentationLayer.remove();
    },
    { once: true }
  );
};
