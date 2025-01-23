export class Tabs {
  #tabs = new Map([
    ["Accueil", "views/home.html"],
    ["Présentation", "views/presentation.html"],
    ["Contact", "views/contact.html"],
  ]);

  loadView(tabName = "", content) {
    if (tabName && content) {
      fetch(this.#tabs.get(tabName))
        .then((res) => res.text())
        .then((data) => (content.innerHTML = data));
    }
  }
}
