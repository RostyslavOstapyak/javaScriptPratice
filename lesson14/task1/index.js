let message = "Just learn it";
export const setMessage = (text) => {
  message = text;
};

export const sendMessage = (name) => {
  console.log(`${name}, ${message}! Your Gromcode`);
};
