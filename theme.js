const themes = [
  {
    name: "light",
    message: "Hey there sunshine -- You switched to Light mode"
  },
  {
    name: "dark",
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

    const currentTheme = item.textContent.toLocaleLowerCase();
    const themeId = item.id; //cleaner than .getAttribute("id")

    bodyEl.classList.remove("theme-light", "theme-dark");
    bodyEl.classList.add(themeId);

    const selectedTheme = themes.find(theme => theme.name === currentTheme);
    if (selectedTheme) {
      themeMsg.textContent = selectedTheme.message;
    }
    // for (const theme of themes) {
    //   if (theme.name === currentTheme) {
    //     themeMsg.textContent = theme.message;
    //   }
    // }
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