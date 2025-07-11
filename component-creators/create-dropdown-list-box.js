const createListBox = (options) => {
  const { width, top, left, height } = options;

  const listBox = document.createElement("ul");
  listBox.tabIndex = "-1";
  listBox.role = "listbox";
  listBox.style.position = "absolute";
  listBox.style.background = "red";
  listBox.style.width = `${width}px`;
  listBox.style.top = `${top + height}px`;
  listBox.style.left = `${left}px`;

  return listBox;
};

const createOption = (text) => {
  const option = document.createElement("li");
  option.role = "option";
  option.tabIndex = "0";

  option.textContent = text;

  return option;
};

export const createDropdownListBox = (options) => {
  const listBox = createListBox(options);

  // TODO: use mocked data
  for (let i = 0; i < 10; i++) {
    listBox.appendChild(createOption(i + 1));
  }

  return listBox;
};
