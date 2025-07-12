export const handleCreateLabel = () => {
  const label = document.createElement("label");
  label.role = "combobox";
  label.classList.add(...["js-dropdown-label", "css-dropdown-label"]);

  label.id = crypto.randomUUID();

  return label;
};
