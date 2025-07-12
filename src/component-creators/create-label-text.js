export const handleCreateLabelText = (text) => {
  const textDiv = document.createElement("div");
  textDiv.classList.add("css-label-text");

  textDiv.textContent = text;

  return textDiv;
};
