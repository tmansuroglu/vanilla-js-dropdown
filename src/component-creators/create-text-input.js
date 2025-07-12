export const handleCreateTextInput = () => {
  const inputWrapper = document.createElement("div");

  inputWrapper.classList.add("css-main-text-input-wrapper");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.classList.add(
    ...["js-dropdown-main-text-input", "css-dropdown-main-text-input"]
  );

  textInput.id = crypto.randomUUID();

  inputWrapper.appendChild(textInput);

  return { inputWrapper, input: textInput };
};
