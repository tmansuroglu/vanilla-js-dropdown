import { createDropdownListBox } from "../component-creators/create-dropdown-list-box.js";
import { getDropdownMainTextInputArr } from "../selectors/dropdown-main-text-input-arr.js";
import { getDropdownPresentationLayerElement } from "../selectors/dropdown-presentation-layer-element.js";
import { preventBodyScroll } from "../utils/prevent-body-scroll.js";
import { handleDropdownPresentationLayerClick } from "./dropdown-presentation-layer-click.js";

export const handleDropdownInputClick = () => {
  for (let element of getDropdownMainTextInputArr()) {
    // TODO: requires cleanup
    element.addEventListener("click", function (e) {
      e.stopPropagation();

      console.info("clicked on dropdown input");

      preventBodyScroll();

      const presentationLayer = getDropdownPresentationLayerElement();

      presentationLayer.style.display = "block";

      handleDropdownPresentationLayerClick();

      const { width, top, height, left } = this.getBoundingClientRect();

      presentationLayer.appendChild(
        createDropdownListBox({ width, top, height, left })
      );
    });
  }
};
