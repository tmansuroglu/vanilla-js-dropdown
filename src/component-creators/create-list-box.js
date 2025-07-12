import { createEmptyMessageElement } from "./create-empty-message-element.js";
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

  if (options.data.length > 0) {
    options.data.forEach(({ label, value }) =>
      listBox.appendChild(handleCreateOption(label, value))
    );
  } else {
    listBox.appendChild(createEmptyMessageElement());
  }

  return listBox;
};
