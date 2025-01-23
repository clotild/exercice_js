const links = document.querySelectorAll("a");
const content = document.querySelector("main");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked", link.innerText);
    switch (link.innerText) {
      case "Accueil":
        fetch("views/home.html")
          .then((res) => res.text())
          .then((data) => (content.innerHTML = data));
        break;
      case "Présentation":
        fetch("views/presentation.html")
          .then((res) => res.text())
          .then((data) => (content.innerHTML = data));
        break;
      case "Contact":
        fetch("views/contact.html")
          .then((res) => res.text())
          .then((data) => (content.innerHTML = data));
    }
  });
});
