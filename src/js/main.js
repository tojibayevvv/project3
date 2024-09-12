const box = document.querySelector(".box");
const tab = document.querySelector(".tab");
const btns = document.getElementsByClassName("btns");
import { getTabData, getTabContent } from "./service.js";

const renderTabContent = async (path) => {
  const data = await getTabContent(path);
  box.innerHTML = data.map((item) => `<h1>${item.title}</h1>`).join("");
};

const renderTabHeader = async () => {
  const data = await getTabData();
  tab.innerHTML = data.map(
    (item) =>
      `<button class="btns" data-path="${item.path}">${item.name}</button>`
  );
  btns[0].style.color = "red";
  renderTabContent(data[0].path);
};

renderTabHeader();

tab.addEventListener("click", (e) => {
  if (e.target.dataset.path) {
    renderTabContent(e.target.dataset.path);
    for (let i of btns) {
      i.style.color = "";
    }
    e.target.style.color = "red";
  }
});

