export const getDropdownMainTextInputArr = () => {
  const dropdownMainTextInput = document.getElementsByClassName(
    "js-dropdown-main-text-input"
  );

  if (dropdownMainTextInput.length === 0) {
    throw new Error("Missing dropdown main text input element");
  }

  return dropdownMainTextInput;
};
