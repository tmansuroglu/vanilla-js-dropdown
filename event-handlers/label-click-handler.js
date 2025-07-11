import { getLabelArr } from "../selectors/label-arr.js";

export const handleLabelClick = () => {
  for (let element of getLabelArr()) {
    // TODO: requires cleanup
    element.addEventListener("click", (e) => {
      console.info("clicked on dropdown label");
    });
  }
};
