export const handleCreateOption = (text) => {
  const option = document.createElement("li");
  option.role = "option";
  option.tabIndex = "0";
  option.id = crypto.randomUUID();
  option.classList.add("css-listbox-option");

  option.textContent = text;

  return option;
};
