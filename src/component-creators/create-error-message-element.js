export const createErrorMessageElement = (text) => {
  const el = document.createElement("span");
  el.classList.add(...["css-error-message", "css-hidden"]);
  el.textContent = text;

  return el;
};
