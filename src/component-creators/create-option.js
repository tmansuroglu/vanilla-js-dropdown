export const handleCreateOption = (text) => {
  const option = document.createElement("li");
  option.role = "option";
  option.tabIndex = "0";
  option.id = crypto.randomUUID();

  // TODO: remove li dot and give left padding

  option.textContent = text;

  return option;
};
