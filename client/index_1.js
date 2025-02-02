const linkHome = document.querySelector("nav > a");
const outputHome = document.querySelector(".home");

linkHome.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("index.html")
    .then((res) => res.text())
    .then((html) => {
      console.log(outputHome.innerHTML);
      outputHome.innerHTML = html;
      console.log(outputHome.innerHTML);

      return (outputHome.innerHTML = html);
    });
});

// const myModule = (function test(a, b, z) {
//   console.log(arguments);

//   const c = "Salut";
//   const d = true;
//   a(b);
//   return {
//     a,
//     c,
//   };
// })(console.log, "Hello");
// console.log(myModule);
