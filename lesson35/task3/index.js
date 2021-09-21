import {
  renderUserData,
  renderRepos,
  clearList,
} from "./src/scripts/render.js";
import { toggleSpinner } from "./src/scripts/spinner.js";
import { fetchUserData, fetchRepositories } from "./src/scripts/apiRequests.js";

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};
const userNameInput = document.querySelector(".name-form__input");
const showUserBtnElem = document.querySelector(".name-form__btn");

renderUserData(defaultUser);

const onSearchUser = () => {
  toggleSpinner();
  const userName = userNameInput.value;

  fetchUserData(userName).then((userData) => renderUserData(userData));

  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((repoList) => {
      renderRepos(repoList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      toggleSpinner();
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);
