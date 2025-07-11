export const handleCreateLabel = () => {
  const label = document.createElement("label");
  label.role = "combobox";
  label.className = "js-dropdown-label";

  label.id = crypto.randomUUID();

  return label;
};
