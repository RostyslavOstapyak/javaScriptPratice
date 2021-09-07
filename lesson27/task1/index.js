localStorage.clear();
// localStorage.setItem("nUUmber", JSON.stringify(42));
// localStorage.setItem("string", JSON.stringify("SString"));
// localStorage.setItem("NULL", JSON.stringify(null));
// localStorage.setItem("obj", JSON.stringify({ name: "Naame" }));

const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, val]) => {
    let newValue;
    try {
      newValue = JSON.parse(val);
    } catch (e) {
      newValue = val;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
