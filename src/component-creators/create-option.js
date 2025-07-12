export const handleCreateOption = (text, value) => {
  const option = document.createElement("li");
  option.role = "option";
  option.tabIndex = "0";
  option.id = crypto.randomUUID();
  option.classList.add("css-listbox-option");

  option.textContent = text;
  option.value = value;

  return option;
};
