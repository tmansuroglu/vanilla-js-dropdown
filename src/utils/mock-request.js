let i = 1;
export const mockRequest = (data, delay = 1500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i % 2 === 0) {
        resolve(data);
      } else {
        reject("reject test");
      }

      i++;
    }, delay);
  });
};
