export const getGeneratorButton = () => {
  const generatorButton = document.getElementById("js-add-dropdown");

  if (!generatorButton) {
    throw new Error("Couldn't find the generator button");
  }

  return generatorButton;
};
