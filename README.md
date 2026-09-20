# PPOA website — GitHub Pages

Upload the contents of this package to the root of your GitHub repository. In the repository, open **Settings → Pages**, select **Deploy from a branch**, and choose the `main` branch and `/ (root)` folder.

The site will display immediately without a server or build process.

## Optimized image assets

The site uses WebP files for the hero background and PPOA seal:

- `assets/ppoa-hero-background.webp` — full-size background encoded at high quality
- `assets/ppoa-seal.webp` — transparent, lossless 720 × 720 seal

After uploading this package, delete the older `ppoa-hero-background.png` and
`ppoa-seal.png` files from the GitHub repository. They are no longer referenced.

To connect PPOA's services, edit `config.js`:

```js
window.PPOA_CONFIG = {
  boardEmail: "placercountyppoa@gmail.com",
  boardMembers: [
    { role: "President", name: "Siri McLeod", email: "sirippoa@gmail.com" }
  ],
  membersAtLarge: ["Courtney Raposa"],
  googleCalendarId: "calendar-id@group.calendar.google.com",
  documentsFeedUrl: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
};
```

- `boardEmail` activates the main association contact button.
- `boardMembers` controls the officer names, roles, and individual email links.
- `membersAtLarge` controls the names shown beneath the officer directory.
- `googleCalendarId` displays the public Google Calendar as an upcoming-events agenda.
- `documentsFeedUrl` displays meeting minutes from the public Google Drive folder through the included Apps Script setup.
