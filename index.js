import { handleGeneratorButtonClick } from "./event-handlers/generator-button-click-handler.js";

addEventListener("load", () => {
  console.info("loaded the page");
  handleGeneratorButtonClick();
});
