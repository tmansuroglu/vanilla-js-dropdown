export const getDropdownLabelArr = () => {
  const dropdownLabelArr = document.getElementsByClassName("js-dropdown-label");

  if (dropdownLabelArr.length === 0) {
    throw new Error("Missing dropdown label element");
  }

  return dropdownLabelArr;
};
