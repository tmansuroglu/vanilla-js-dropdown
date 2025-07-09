import { getDropdownMainTextInputArr } from "../selectors/dropdown-main-text-input-arr.js";

export const handleDropdownInputClick = () => {
  for (let element of getDropdownMainTextInputArr()) {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      console.info("clicked on dropdown input");
    });
  }
};
