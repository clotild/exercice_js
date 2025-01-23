const links = document.querySelectorAll("a");
const content = document.querySelector("main");

const tabs = new Map([
  ["Accueil", "views/home.html"],
  ["Présentation", "views/presentation.html"],
  ["Contact", "views/contact.html"],
]);

function loadView(tabName = "") {
  if (tabName) {
    fetch(tabs.get(tabName))
      .then((res) => res.text())
      .then((data) => (content.innerHTML = data));
  }
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadView(link.innerText);
  });
});
