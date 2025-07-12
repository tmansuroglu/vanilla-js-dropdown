import { handleCreateDropdown } from "./component-creators/create-dropdown.js";
import { getCreatorButton } from "./selectors/generator-button.js";
import { getTestContainer } from "./selectors/test-container.js";
addEventListener("load", () => {
  console.info("loaded the page");

  getCreatorButton().addEventListener("click", () => {
    const testContainer = getTestContainer();
    handleCreateDropdown(testContainer);
  });
});
