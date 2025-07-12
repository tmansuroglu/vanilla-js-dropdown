export const createPresentationLayer = () => {
  const presentationLayer = document.createElement("div");
  presentationLayer.role = "presentation";

  presentationLayer.className = "js-dropdown-presentation-layer";

  // TODO: keep style code in CSS
  presentationLayer.style.top = "0";
  presentationLayer.style.bottom = "0";
  presentationLayer.style.right = "0";
  presentationLayer.style.left = "0";
  presentationLayer.style.position = "fixed";
  presentationLayer.style.zIndex = "9999";
  presentationLayer.style.overflow = "hidden";

  return presentationLayer;
};
