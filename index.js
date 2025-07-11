import { handleLabelClick } from "./event-handlers/label-click-handler.js";
import { handleTextInputClick } from "./event-handlers/text-input-click-handler.js";

addEventListener("load", () => {
  console.info("loaded the page");
  handleLabelClick();
  handleTextInputClick();
});
