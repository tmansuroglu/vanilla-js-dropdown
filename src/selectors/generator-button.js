export const getCreatorButton = () => {
  const creatorButton = document.getElementById("js-add-dropdown");

  if (!creatorButton) {
    throw new Error("Couldn't find the creator button");
  }

  return creatorButton;
};
