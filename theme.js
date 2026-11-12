const themes = [
  {
    name: "Light",
    message: "Hey there sunshine -- You swiched to Light mode"
  },
  {
    name: "Dark",
    message: "Total blackness here -- Dark mode activated!"
  }
];

const bodyEl = document.querySelector("body");
const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeItems = document.querySelectorAll("[role='menuitem']");
const themeMsg = document.querySelector("[aria-live='polite']");


themeSwitcher.addEventListener("click", () => {
  const isexpanded = themeSwitcher.getAttribute("aria-expanded") === "true";
  if (isexpanded) {
    closeMenu();
  } else {
    openMenu();
  }
})

themeItems.forEach(item => {
  item.addEventListener("click", () => {
    closeMenu();
    const currentTheme = item.textContent;
    const themeId = item.getAttribute("id");
    // bodyEl.setAttribute("class", themeId);
    bodyEl.classList.remove("theme-light", "theme-dark");
    bodyEl.classList.add(themeId);
    for (const theme of themes) {
      if (theme.name === currentTheme) {
        // console.log(theme.message);
        themeMsg.textContent = theme.message;
      }
    }
  })
});

function openMenu() {
  themeSwitcher.setAttribute("aria-expanded", "true");
  themeDropdown.removeAttribute("hidden");
}
function closeMenu() {
  themeSwitcher.setAttribute("aria-expanded", "false");
  themeDropdown.setAttribute("hidden", "");
}

document.addEventListener("click", e => {
  // console.log(e.target)
  if(!themeSwitcher.contains(e.target) && !themeDropdown.contains(e.target)) {
    closeMenu();
  }
})