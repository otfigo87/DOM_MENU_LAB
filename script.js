// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Task1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SET Rocks!</h1>";
mainEl.classList.add("flex-ctr");

//Task2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Task3
menuLinks.forEach((link) => {
    const myLink = document.createElement("a");
    myLink.setAttribute("href", `${link.href}`);
    myLink.textContent = `${link.text}`;
    topMenuEl.appendChild(myLink);
})

