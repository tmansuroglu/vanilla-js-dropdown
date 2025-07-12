export const createEmptyMessageElement = (text = "Empty") => {
  const messageEl = document.createElement("span");

  messageEl.textContent = text;

  return messageEl;
};
