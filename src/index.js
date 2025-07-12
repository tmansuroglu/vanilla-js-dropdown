import { handleCreateDropdown } from "./component-creators/create-dropdown.js";
import { getCreatorButton } from "./selectors/generator-button.js";
import { getTestContainer } from "./selectors/test-container.js";
addEventListener("load", () => {
  console.info("loaded the page");

  getCreatorButton().addEventListener("click", async () => {
    const testContainer = getTestContainer();
    // TODO: needed paremeters: empty message
    await handleCreateDropdown(testContainer);
  });
});
