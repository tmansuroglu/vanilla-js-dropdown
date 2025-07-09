export const getDropdownPresentationLayerElement = () => {
  const dropdownPresentationLayerArr = document.getElementsByClassName(
    "js-dropdown-presentation-layer"
  );

  if (dropdownPresentationLayerArr.length === 0) {
    throw new Error("Missing dropdown presentation layer element");
  }

  if (dropdownPresentationLayerArr.length > 1) {
    throw new Error("Multiple dropdown presentation layer element");
  }

  return dropdownPresentationLayerArr[0];
};
