import { Tabs } from "./tabs.js";

export class App {
  static run() {
    const links = document.querySelectorAll("a");
    const content = document.querySelector("main");
    const tabs = new Tabs();

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        tabs.loadView(link.innerText, content);
      });
    });
  }
}
