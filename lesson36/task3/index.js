const getUsersBlogs = async (arr) => {
  const link = `https://api.github.com/users/`;
  // Promise.all(array)
  try {
    const workWithArray = (id) =>
      fetch(link + id)
        .then((response) => response.json())
        .catch((e) => {
          console.error(e);
          throw new Error(e.text);
        });

    const resultArray = await Promise.all(arr.map((el) => workWithArray(el)));
    const blogArray = resultArray.map((el) => el.blog);
    return blogArray;
  } catch (e) {
    console.error(e);
    throw new Error(e.text);
  }
};

getUsersBlogs(["google", "facebook", "gaeron"]).then((linksList) =>
  console.log(linksList)
);
