import { createPresentationLayer } from "../component-creators/create-presentation-layer.js";
import { getPresentationLayer } from "../selectors/presentation-layer.js";
import { getTextInput } from "../selectors/text-input-arr.js";
import { preventBodyScroll } from "../utils/prevent-body-scroll.js";
import { handlePresentationLayerClick } from "./presentation-layer-click-handler.js";

export const handleTextInputClick = () => {
  for (let element of getTextInput()) {
    // TODO: requires cleanup
    element.addEventListener("click", function (e) {
      e.stopPropagation();

      console.info("clicked on dropdown input");

      // TODO: use class
      preventBodyScroll();

      document.body.appendChild(createPresentationLayer());

      handlePresentationLayerClick();

      const { width, top, height, left } = this.getBoundingClientRect();

      getPresentationLayer().appendChild(
        createDropdownListBox({ width, top, height, left })
      );
    });
  }
};
