export const createPresentationLayer = () => {
  const presentationLayer = document.createElement("div");
  presentationLayer.role = "presentation";

  presentationLayer.classList.add(
    ...["js-dropdown-presentation-layer", "css-presentation-layer"]
  );

  return presentationLayer;
};
