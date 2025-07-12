import { handleCreateLabel } from "./create-label.js";
import { handleCreateLabelText } from "./create-label-text.js";
import { handleCreateTextInput } from "./create-text-input.js";
import { handleLabelClick } from "../event-handlers/label-click-handler.js";
import { handleTextInputClick } from "../event-handlers/text-input-click-handler.js";

// TODO: use mutationobserver to keep track of removed elements
// TODO: use weakmap or set to keep track of the element events

export const handleCreateDropdown = (appendTarget) => {
  const labelEl = handleCreateLabel();
  // TODO: needs cleanup
  labelEl.addEventListener("click", handleLabelClick);

  const labelTextEl = handleCreateLabelText("Example");

  const input = handleCreateTextInput();
  // TODO: needs cleanup
  input.addEventListener("click", handleTextInputClick);

  labelEl.appendChild(labelTextEl);
  labelEl.appendChild(input);

  appendTarget.appendChild(labelEl);
};
