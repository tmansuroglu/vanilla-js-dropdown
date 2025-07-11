export const handleCreateTextInput = () => {
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "js-dropdown-main-text-input";

  textInput.id = crypto.randomUUID();

  return textInput;
};
