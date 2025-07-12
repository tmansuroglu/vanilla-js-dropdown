import { handleCreateLabel } from "./create-label.js";
import { handleCreateLabelText } from "./create-label-text.js";
import { handleCreateTextInput } from "./create-text-input.js";
import { handleLabelClick } from "../event-handlers/label-click-handler.js";
import { handleTextInputClick } from "../event-handlers/text-input-click-handler.js";
import { createLoadingIndicator } from "./create-loading-indicator.js";
import { mockRequest } from "../utils/mock-request.js";
import { mockedData } from "../constants/mock-data.js";

// TODO: use mutationobserver to keep track of removed elements
// TODO: use weakmap or set to keep track of the element events

export const handleCreateDropdown = async (
  appendTarget,
  labelText = "Label",
  url = "Lorem"
) => {
  const labelEl = handleCreateLabel();
  // TODO: needs cleanup
  labelEl.addEventListener("click", handleLabelClick);

  const labelTextEl = handleCreateLabelText(labelText);

  const input = handleCreateTextInput();

  labelEl.appendChild(labelTextEl);
  labelEl.appendChild(input);

  const loadingIndicator = createLoadingIndicator();

  labelEl.appendChild(loadingIndicator);

  appendTarget.appendChild(labelEl);

  if (!url) {
    // TODO: needs cleanup
    input.addEventListener("click", handleTextInputClick);

    return;
  }

  try {
    loadingIndicator.classList.remove("css-hidden");
    input.disabled = true;

    const data = await mockRequest(mockedData);

    // TODO: needs cleanup
    input.addEventListener("click", function (e) {
      return handleTextInputClick(e, this, data);
    });
  } catch (e) {
    // TODO: What happens when this fails?
    throw new Error("Unexpected data mocking error");
  } finally {
    loadingIndicator.classList.add("css-hidden");
    input.disabled = false;
  }
};
