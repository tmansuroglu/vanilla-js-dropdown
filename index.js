import { handleDropdownInputClick } from "./event-handlers/dropdown-input-click.js";
import { handleDropdownLabelClick } from "./event-handlers/dropdown-label-click.js";

addEventListener("load", () => {
  console.info("loaded the page");
  handleDropdownLabelClick();
  handleDropdownInputClick();
});
