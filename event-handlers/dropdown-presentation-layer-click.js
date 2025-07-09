import { getDropdownPresentationLayerElement } from "../selectors/dropdown-presentation-layer-element.js";
import { allowBodyScroll } from "../utils/allow-body-scroll.js";

export const handleDropdownPresentationLayerClick = () => {
  const presentationLayer = getDropdownPresentationLayerElement();

  return presentationLayer.addEventListener("click", (e) => {
    console.info("clicked on dropdown presentation layer");

    allowBodyScroll();

    presentationLayer.style.display = "none";
  });
};
