export const handleCreateLabelText = (text) => {
  const textDiv = document.createElement("div");

  textDiv.textContent = text;

  return textDiv;
};
