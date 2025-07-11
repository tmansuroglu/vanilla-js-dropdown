import { getDropdownLabelArr } from "../selectors/dropdown-label-arr.js";

export const handleDropdownLabelClick = () => {
  for (let element of getDropdownLabelArr()) {
    // TODO: requires cleanup
    element.addEventListener("click", (e) => {
      console.info("clicked on dropdown label");
    });
  }
};
