# PPOA website — GitHub Pages

Upload the contents of this package to the root of your GitHub repository. In the repository, open **Settings → Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder.

The site will display immediately without a server or build process.

To connect PPOA's services, edit `config.js`:

```js
window.PPOA_CONFIG = {
  boardEmail: "association@example.org",
  googleCalendarId: "calendar-id@group.calendar.google.com",
  documentsFeedUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
};
```

- `boardEmail` activates the contact button.
- `googleCalendarId` displays the public Google Calendar as an upcoming-events agenda.
- `documentsFeedUrl` displays meeting minutes from the public Google Drive folder through the included Apps Script setup.

The standalone HTML file is an alternative single-file version. Its configuration is embedded directly in the page.
