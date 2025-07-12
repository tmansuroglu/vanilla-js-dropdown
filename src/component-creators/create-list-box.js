import { handleCreateOption } from "./create-option.js";

const createListBoxElement = (options) => {
  const { width, top, left, height } = options;

  const listBox = document.createElement("ul");
  listBox.tabIndex = "-1";
  listBox.role = "listbox";
  listBox.classList.add("css-dropdown-listbox");

  listBox.style.width = `${width}px`;
  listBox.style.top = `${top + height}px`;
  listBox.style.left = `${left}px`;

  return listBox;
};

export const handleCreateListBox = (options) => {
  const listBox = createListBoxElement(options);

  // TODO: use mocked data
  for (let i = 0; i < 10; i++) {
    listBox.appendChild(handleCreateOption(i + 1));
  }

  return listBox;
};
