export const createLoadingIndicator = () => {
  const loader = document.createElement("span");
  loader.classList.add(...["css-hidden", "css-dropdown-loader"]);

  return loader;
};
