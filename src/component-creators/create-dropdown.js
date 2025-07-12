import { handleCreateLabel } from "./create-label.js";
import { handleCreateLabelText } from "./create-label-text.js";
import { handleCreateTextInput } from "./create-text-input.js";
import { handleLabelClick } from "../event-handlers/label-click-handler.js";
import { handleTextInputClick } from "../event-handlers/text-input-click-handler.js";
import { mockRequest } from "../utils/mock-request.js";
import { mockedData } from "../constants/mock-data.js";
import { createErrorMessageElement } from "./create-error-message-element.js";

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

  const { inputWrapper, input } = handleCreateTextInput();

  labelEl.appendChild(labelTextEl);
  labelEl.appendChild(inputWrapper);

  const errorMessageEl = createErrorMessageElement();

  labelEl.appendChild(errorMessageEl);

  appendTarget.appendChild(labelEl);

  if (!url) {
    // TODO: needs cleanup
    input.addEventListener("click", handleTextInputClick);

    return;
  }

  const fetchData = async () => {
    try {
      inputWrapper.classList.add("loading");

      input.disabled = true;

      const data = await mockRequest(mockedData);

      // TODO: needs cleanup
      input.addEventListener("click", function (e) {
        return handleTextInputClick(e, this, data);
      });

      inputWrapper.classList.remove("loading");
      input.disabled = false;

      input.classList.remove("css-error-border");

      const isErrorHidden = errorMessageEl.classList.contains("css-hidden");

      if (!isErrorHidden) {
        errorMessageEl.classList.add("css-hidden");
      }
    } catch (e) {
      console.error("Unexpected data mocking error");

      input.classList.add("css-error-border");
      errorMessageEl.classList.remove("css-hidden");

      await fetchData();
    }
  };

  await fetchData();
};
