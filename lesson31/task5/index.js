const delay = (timeout) => {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), timeout);
  });
  return pr;
};

delay(3000).then(() => console.log("done"));
