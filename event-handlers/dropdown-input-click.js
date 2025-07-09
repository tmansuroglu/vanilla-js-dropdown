import { getDropdownMainTextInputArr } from "../selectors/dropdown-main-text-input-arr.js";
import { getDropdownPresentationLayerElement } from "../selectors/dropdown-presentation-layer-element.js";
import { preventBodyScroll } from "../utils/prevent-body-scroll.js";
import { handleDropdownPresentationLayerClick } from "./dropdown-presentation-layer-click.js";

export const handleDropdownInputClick = () => {
  for (let element of getDropdownMainTextInputArr()) {
    element.addEventListener("click", (e) => {
      e.stopPropagation();

      console.info("clicked on dropdown input");

      preventBodyScroll();

      getDropdownPresentationLayerElement().style.display = "block";

      // TODO: requires cleanup
      handleDropdownPresentationLayerClick();
    });
  }
};
