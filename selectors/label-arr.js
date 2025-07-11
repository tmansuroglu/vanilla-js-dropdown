export const getLabelArr = () => {
  const labelArr = document.getElementsByClassName("js-dropdown-label");

  if (labelArr.length === 0) {
    throw new Error("Missing dropdown label element");
  }

  return dropdownLabelArr;
};
