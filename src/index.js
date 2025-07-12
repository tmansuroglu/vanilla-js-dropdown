import { handleCreatorButtonClick } from "./event-handlers/creator-button-click-handler.js";

addEventListener("load", () => {
  console.info("loaded the page");
  handleCreatorButtonClick();
});
