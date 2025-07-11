import { handleCreateLabel } from "../component-creators/create-label.js";
import { handleCreateLabelText } from "../component-creators/create-label-text.js";
import { handleCreateTextInput } from "../component-creators/create-text-input.js";
import { getGeneratorButton } from "../selectors/generator-button.js";
import { getTestContainer } from "../selectors/test-container.js";
import { handleLabelClick } from "./label-click-handler.js";
import { handleTextInputClick } from "./text-input-click-handler.js";

export const handleGeneratorButtonClick = () => {
  const generatorButton = getGeneratorButton();
  const testContainer = getTestContainer();

  generatorButton.addEventListener("click", () => {
    const labelEl = handleCreateLabel();
    // TODO: needs cleanup
    labelEl.addEventListener("click", handleLabelClick);

    const labelTextEl = handleCreateLabelText("Example");

    const input = handleCreateTextInput();
    // TODO: needs cleanup
    input.addEventListener("click", handleTextInputClick);

    labelEl.appendChild(labelTextEl);
    labelEl.appendChild(input);

    testContainer.appendChild(labelEl);
  });
};
