// js/menu-builder.js
(function () {
  const container = document.getElementById("main-menu");
  if (!container || typeof MENU_ITEMS === "undefined") return;

  const currentFile =
    window.location.pathname.split("/").pop() || "index.html";

  // Auto-detect absolute URLs and non-http schemes.
  // String-based (not `new URL`) so it also works when testing over file://.
  function looksExternal(href) {
    return /^(https?:)?\/\//i.test(href) || /^[a-z][a-z0-9+.-]*:/i.test(href);
  }

  MENU_ITEMS.forEach(function (item) {
    const isExternal = item.external === true || looksExternal(item.href);

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.href;
    a.textContent = item.label;

    if (isExternal) {
      // Open in a new tab, and sever the opener relationship (security).
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.classList.add("external");
      // Screen-reader hint that the link leaves the site.
      a.setAttribute("aria-label", item.label + " (opens in a new tab)");
    } else if (item.href === currentFile) {
      // Only internal links can be "current page".
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }

    li.appendChild(a);
    container.appendChild(li);
  });
})();
