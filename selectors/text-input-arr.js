// TODO: what if there are multiple elements on screen?
export const getTextInput = () => {
  const textInput = document.getElementsByClassName(
    "js-dropdown-main-text-input"
  );

  if (textInput.length === 0) {
    throw new Error("Missing dropdown main text input element");
  }

  if (textInput.length > 1) {
    throw new Error("Multiple text inputs in a dropdown");
  }

  return textInput;
};
