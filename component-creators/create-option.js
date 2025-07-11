export const handleCreateOption = (text) => {
  const option = document.createElement("li");
  option.role = "option";
  option.tabIndex = "0";

  option.textContent = text;

  return option;
};
