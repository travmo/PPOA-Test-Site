(function () {
  "use strict";
  const config = window.PPOA_CONFIG || {};
  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (config.boardEmail) {
    const emailDisplay = document.getElementById("board-email-display");
    const emailButton = document.getElementById("email-button");
    emailDisplay.textContent = config.boardEmail;
    emailButton.textContent = "Email the board";
    emailButton.href = "mailto:" + config.boardEmail;
    emailButton.classList.remove("is-disabled");
    emailButton.removeAttribute("aria-disabled");
  }

  if (config.googleCalendarId) {
    const mount = document.getElementById("calendar-mount");
    const iframe = document.createElement("iframe");
    const params = new URLSearchParams({
      src: config.googleCalendarId, ctz: "America/Los_Angeles", mode: "AGENDA",
      showTitle: "0", showNav: "1", showDate: "1", showPrint: "0",
      showTabs: "0", showCalendars: "0", wkst: "1", bgcolor: "#ffffff",
      color: "#0d2948"
    });
    iframe.src = "https://calendar.google.com/calendar/embed?" + params.toString();
    iframe.title = "PPOA public events calendar";
    iframe.loading = "lazy";
    mount.replaceChildren(iframe);
  }

  window.renderDriveDocuments = function (payload) {
    const list = document.getElementById("minutes-list");
    const status = document.getElementById("minutes-status");
    const files = Array.isArray(payload) ? payload : payload && payload.files;
    if (!Array.isArray(files) || !files.length) {
      status.textContent = "The meeting-minutes folder is connected, but it does not contain any documents yet.";
      list.innerHTML = '<div class="empty-documents">Meeting minutes will appear here after a PDF is added to Google Drive.</div>';
      return;
    }
    list.innerHTML = "";
    files.forEach(function (file) {
      if (!file || !file.name || !file.url) return;
      const article = document.createElement("article");
      article.className = "resource-row";
      const icon = document.createElement("div");
      icon.className = "resource-mark";
      icon.textContent = "MIN";
      const body = document.createElement("div");
      const type = document.createElement("p");
      type.className = "document-type";
      type.textContent = formatDate(file.modifiedTime) || "Meeting minutes";
      const title = document.createElement("h3");
      title.textContent = file.name.replace(/\.pdf$/i, "");
      body.append(type, title);
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = file.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "View minutes →";
      article.append(icon, body, link);
      list.appendChild(article);
    });
    status.textContent = "Meeting minutes are updated automatically from PPOA's Google Drive folder.";
  };

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
  }

  if (config.documentsFeedUrl) {
    const script = document.createElement("script");
    const separator = config.documentsFeedUrl.includes("?") ? "&" : "?";
    script.src = config.documentsFeedUrl + separator + "prefix=renderDriveDocuments";
    script.async = true;
    script.onerror = function () {
      document.getElementById("minutes-status").textContent = "The meeting-minutes list could not be loaded. Please try again later.";
    };
    document.body.appendChild(script);
  }
})();
