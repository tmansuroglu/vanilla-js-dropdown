import { handleCreateListBox } from "../component-creators/create-list-box.js";
import { createPresentationLayer } from "../component-creators/create-presentation-layer.js";
import { getPresentationLayer } from "../selectors/presentation-layer.js";
import { handlePresentationLayerClick } from "./presentation-layer-click-handler.js";

export const handleTextInputClick = function (e, parentThis, data = []) {
  e.stopPropagation();

  console.info("clicked on dropdown input");

  document.body.classList.add("css-disable-overflow");

  document.body.appendChild(createPresentationLayer());

  const presentationLayer = getPresentationLayer();

  presentationLayer.addEventListener("click", handlePresentationLayerClick, {
    once: true,
  });

  const { width, top, height, left } = (
    parentThis || this
  ).getBoundingClientRect();

  presentationLayer.appendChild(
    handleCreateListBox({ width, top, height, left, data })
  );
};
