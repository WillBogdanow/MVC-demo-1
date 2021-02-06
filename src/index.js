import x from "./x.js";
import png from "./assets/bilibili.png";

const div = document.getElementById("app");
console.log(div);
div.innerHTML = `
   <img src="${png}">  
`;

const button = document.createElement("button");
button.innerText = "懶加載";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};

div.appendChild(button);
