export const getTestContainer = () => {
  const testContainer = document.getElementById("test-container");

  if (!testContainer) {
    throw new Error("Failed to find the test container");
  }

  return testContainer;
};
