# PPOA-Test-Site

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Placer County Probation Peace Officers' Association</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
<style>
  :root{
    --navy:#101F33; --navy-2:#1B2F4B; --steel:#2C4A6E;
    --brass:#A9812F; --brass-light:#C9A55C; --ribbon:#6E1F2A;
    --paper:#E7E8E4; --paper-2:#F1F1EE; --ink:#1A1C1F; --ink-soft:#4A4E56;
    --line:rgba(16,31,51,0.14); --radius:2px;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;scroll-padding-top:74px;}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:'IBM Plex Sans',sans-serif;line-height:1.6;}
  h1,h2,h3,h4{font-family:'Fraunces',serif;font-weight:600;margin:0;color:var(--navy);}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);font-weight:600;}
  a{color:inherit;}
  .wrap{max-width:1080px;margin:0 auto;padding:0 28px;}

  header{position:sticky;top:0;z-index:100;background:var(--navy);border-bottom:3px solid var(--brass);}
  .navbar{display:flex;align-items:center;justify-content:space-between;padding:12px 28px;max-width:1080px;margin:0 auto;}
  .brand{display:flex;align-items:center;gap:12px;}
  .brand svg{width:36px;height:36px;flex-shrink:0;}
  .brand-text{color:#F1F1EE;line-height:1.15;}
  .brand-text .name{font-family:'Fraunces',serif;font-weight:600;font-size:.95rem;}
  .brand-text .sub{font-family:'IBM Plex Mono',monospace;font-size:.58rem;letter-spacing:.1em;color:var(--brass-light);text-transform:uppercase;}
  nav.mainnav{display:flex;gap:2px;flex-wrap:wrap;}
  nav.mainnav a{color:#C7CEDA;font-family:'IBM Plex Sans',sans-serif;font-size:.82rem;font-weight:500;padding:9px 11px;text-decoration:none;border-bottom:2px solid transparent;}
  nav.mainnav a:hover{color:#fff;}
  .navtoggle{display:none;background:none;border:1px solid rgba(255,255,255,.3);color:#fff;padding:8px 12px;font-size:1rem;cursor:pointer;}
  @media (max-width:960px){
    nav.mainnav{display:none;position:absolute;top:100%;left:0;right:0;background:var(--navy-2);flex-direction:column;border-top:1px solid rgba(255,255,255,.12);}
    nav.mainnav.open{display:flex;}
    nav.mainnav a{padding:14px 28px;border-bottom:1px solid rgba(255,255,255,.08);}
    .navtoggle{display:block;}
  }

  section.block{padding:56px 28px;scroll-margin-top:74px;}
  section.block.alt{background:var(--paper-2);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
  .section-head{max-width:640px;margin-bottom:28px;}
  .section-head h2{font-size:1.7rem;margin-top:6px;}
  .section-head p{color:var(--ink-soft);margin-top:8px;}

  .hero{background:linear-gradient(180deg,var(--navy) 0%,var(--navy-2) 100%);color:#F1F1EE;padding:64px 28px 52px;scroll-margin-top:0;}
  .hero-inner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 170px;gap:40px;align-items:center;}
  .hero h1{color:#fff;font-size:2.1rem;line-height:1.15;margin:12px 0 14px;}
  .hero p.lead{color:#C7CEDA;max-width:52ch;}
  .hero-seal{width:150px;height:150px;justify-self:center;}
  @media (max-width:900px){.hero-inner{grid-template-columns:1fr;text-align:center;}.hero-seal{order:-1;width:120px;height:120px;}.hero p.lead{margin:0 auto;}}

  .col-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);}
  .col-3 .item{background:var(--paper);padding:28px 24px;}
  .col-3 .item .eyebrow{display:block;margin-bottom:8px;}
  .col-3 .item h3{font-size:1.1rem;margin-bottom:8px;}
  .col-3 .item p{color:var(--ink-soft);font-size:.92rem;margin:0;}
  @media (max-width:900px){.col-3{grid-template-columns:1fr;}}

  .card{background:var(--paper);border:1px solid var(--line);padding:22px;margin-bottom:16px;}
  .card h3{font-size:1.1rem;margin-bottom:6px;}
  .card .meta{font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:var(--brass);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;display:block;}
  .card p{color:var(--ink-soft);font-size:.92rem;margin:0;}

  .badge{display:inline-block;font-family:'IBM Plex Mono',monospace;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:2px;font-weight:600;}
  .badge.ok{background:#1F3D2B;color:#8FD9A8;}
  .badge.warn{background:#4A3410;color:#E8B75A;}
  .badge.bad{background:#4A1010;color:#E88A8A;}

  .doc-group{margin-bottom:30px;}
  .doc-group h3{font-size:1rem;color:var(--brass);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;font-weight:600;}
  .doc-row{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--line);}
  .doc-row:last-child{border-bottom:none;}
  .doc-icon{width:34px;height:34px;flex-shrink:0;border-radius:3px;background:var(--navy);color:var(--brass-light);display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:.62rem;font-weight:700;}
  .doc-info{flex:1;min-width:0;}
  .doc-info .t{font-weight:600;color:var(--navy);}
  .doc-info .d{font-size:.8rem;color:var(--ink-soft);margin-top:2px;}

  .btn{display:inline-block;padding:9px 16px;font-weight:600;font-size:.82rem;border-radius:var(--radius);cursor:pointer;border:1px solid var(--navy);background:var(--navy);color:#fff;text-decoration:none;white-space:nowrap;}
  .btn:hover{background:var(--steel);}
  .btn-ghost{background:transparent;color:var(--navy);border-color:var(--line);}
  .btn-ghost:hover{border-color:var(--brass);}
  .btn-gold{background:var(--brass);border-color:var(--brass);color:#1A1206;}
  .btn-gold:hover{background:var(--brass-light);}

  .faq-item{border-bottom:1px solid var(--line);}
  .faq-q{padding:16px 0;font-weight:600;color:var(--navy);cursor:pointer;display:flex;justify-content:space-between;align-items:center;}
  .faq-a{max-height:0;overflow:hidden;color:var(--ink-soft);font-size:.9rem;transition:max-height .2s ease;}
  .faq-item.open .faq-a{max-height:400px;padding-bottom:16px;}

  .link-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--line);gap:16px;}
  .link-row .t{font-weight:600;color:var(--navy);}
  .link-row .d{font-size:.85rem;color:var(--ink-soft);}

  .cal-embed{border:1px solid var(--line);background:#fff;}
  .cal-embed iframe{width:100%;height:600px;border:none;display:block;}

  .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;}
  .info-line{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--line);}
  .info-line .l{font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:var(--brass);text-transform:uppercase;letter-spacing:.06em;width:100px;flex-shrink:0;padding-top:2px;}
  .info-line .v{font-size:.92rem;}
  @media (max-width:900px){.contact-grid{grid-template-columns:1fr;}}

  .member-box{background:var(--navy);color:#F1F1EE;padding:36px;border-radius:3px;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;}
  .member-box h3{color:#fff;font-size:1.3rem;margin-bottom:8px;}
  .member-box p{color:#C7CEDA;font-size:.92rem;max-width:48ch;margin:0;}

  .setup-note{background:var(--paper-2);border:1px solid var(--line);border-left:3px solid var(--ribbon);padding:14px 18px;font-size:.84rem;color:var(--ink-soft);margin-bottom:24px;}
  .empty-state{color:var(--ink-soft);font-size:.9rem;font-style:italic;padding:20px 0;}

  footer{background:var(--navy);color:#8994A8;padding:36px 28px 24px;}
  .footer-inner{max-width:1080px;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px;align-items:center;}
  .footer-seal{width:38px;height:38px;opacity:.6;}
  footer .fine{font-size:.76rem;line-height:1.6;max-width:60ch;}
  footer .fine strong{color:#C7CEDA;}
</style>
</head>
<body>

<header>
  <div class="navbar">
    <a class="brand" href="#home" style="text-decoration:none;">
      <svg viewBox="0 0 100 100"><use href="#seal"></use></svg>
      <div class="brand-text"><div class="name">PPOA</div><div class="sub">Placer Co. Probation · Peace Officers</div></div>
    </a>
    <button class="navtoggle" onclick="document.querySelector('nav.mainnav').classList.toggle('open')">&#9776;</button>
    <nav class="mainnav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#documents">Documents</a>
      <a href="#events">Events</a>
      <a href="#news">News</a>
      <a href="#faq">FAQ</a>
      <a href="#links">Links</a>
      <a href="#members">Members</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<svg width="0" height="0" style="position:absolute">
  <defs>
    <g id="seal">
      <circle cx="50" cy="50" r="48" fill="#101F33" stroke="#A9812F" stroke-width="2"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#A9812F" stroke-width="1"/>
      <path id="topcurve" d="M 14,50 A 36,36 0 0 1 86,50" fill="none"/>
      <path id="botcurve" d="M 18,58 A 32,32 0 0 0 82,58" fill="none"/>
      <text font-family="IBM Plex Mono" font-size="6.4" fill="#C9A55C" letter-spacing="2"><textPath href="#topcurve" startOffset="50%" text-anchor="middle">PLACER COUNTY PROBATION</textPath></text>
      <text font-family="IBM Plex Mono" font-size="6" fill="#C9A55C" letter-spacing="1.6"><textPath href="#botcurve" startOffset="50%" text-anchor="middle">PEACE OFFICERS ASSOCIATION</textPath></text>
      <path d="M50 27 L54.7 40.5 L69 40.9 L57.5 49.3 L61.7 63 L50 54.8 L38.3 63 L42.5 49.3 L31 40.9 L45.3 40.5 Z" fill="#C9A55C"/>
    </g>
  </defs>
</svg>

<main>

<!-- ============ HOME ============ -->
<section id="home" class="hero">
  <div class="hero-inner">
    <div>
      <span class="eyebrow">Placer County · PPOA</span>
      <h1>The recognized employee organization for the Placer County Probation Peace Officers bargaining unit.</h1>
      <p class="lead">Contract information, meeting dates, and association news, all in one place for members.</p>
    </div>
    <svg class="hero-seal" viewBox="0 0 100 100"><use href="#seal"></use></svg>
  </div>
</section>

<!-- ============ ABOUT ============ -->
<section id="about" class="block">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Who We Are</span>
      <h2>About PPOA</h2>
    </div>
    <div class="col-3">
      <div class="item">
        <span class="eyebrow">01</span>
        <h3>Representation</h3>
        <p>A unified voice in collective bargaining and workplace matters.</p>
      </div>
      <div class="item">
        <span class="eyebrow">02</span>
        <h3>Communication</h3>
        <p>Simple access to meetings, documents, and association notices.</p>
      </div>
      <div class="item">
        <span class="eyebrow">03</span>
        <h3>Service</h3>
        <p>Supporting the professionals who serve Placer County.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ DOCUMENTS ============ -->
<section id="documents" class="block alt">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Contract &amp; Public Records</span>
      <h2>Documents</h2>
      <p>The current MOU, side letters, meeting minutes, and forms. This list is generated automatically from the association's public Google Drive folder.</p>
    </div>
    <div id="mou-current" style="margin-bottom:28px;"></div>
    <div id="doc-groups"></div>
  </div>
</section>

<!-- ============ EVENTS ============ -->
<section id="events" class="block">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Stay Involved</span>
      <h2>Event Calendar</h2>
      <p>Board meetings, general membership meetings, trainings, and association events. Use the &#43; in the calendar's corner to add it to your own Google Calendar.</p>
    </div>
    <div class="cal-embed"><iframe id="cal-iframe" src="" loading="lazy"></iframe></div>
  </div>
</section>

<!-- ============ NEWS ============ -->
<section id="news" class="block alt">
  <div class="wrap">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:24px;">
      <div class="section-head" style="margin-bottom:0;">
        <span class="eyebrow">Member Updates</span>
        <h2>Announcements</h2>
      </div>
      <a id="announcement-form-link" class="btn btn-ghost" href="#" target="_blank" rel="noopener">Submit an announcement</a>
    </div>
    <div id="news-list"></div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section id="faq" class="block">
  <div class="wrap">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:24px;">
      <div class="section-head" style="margin-bottom:0;">
        <span class="eyebrow">Answers</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <a id="faq-form-link" class="btn btn-ghost" href="#" target="_blank" rel="noopener">Suggest a question</a>
    </div>
    <div id="faq-list"></div>
  </div>
</section>

<!-- ============ LINKS ============ -->
<section id="links" class="block alt">
  <div class="wrap">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:24px;">
      <div class="section-head" style="margin-bottom:0;">
        <span class="eyebrow">Resources</span>
        <h2>Helpful Links</h2>
      </div>
      <a id="link-form-link" class="btn btn-ghost" href="#" target="_blank" rel="noopener">Suggest a link</a>
    </div>
    <div id="links-list"></div>
  </div>
</section>

<!-- ============ MEMBER RESOURCES ============ -->
<section id="members" class="block">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Members Only</span>
      <h2>Member Resources</h2>
    </div>
    <div class="member-box">
      <div>
        <h3>Internal minutes, bargaining updates &amp; benefits info</h3>
        <p>This area is restricted to current PPOA members. Access is managed through Google Drive, not this website, so only people the board has approved can open it.</p>
      </div>
      <a id="member-resources-link" class="btn btn-gold" href="#" target="_blank" rel="noopener">Open Member Resources</a>
    </div>
    <p style="color:var(--ink-soft);font-size:.85rem;margin-top:16px;">Don't have access yet? Reach out through the Contact section below.</p>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section id="contact" class="block alt">
  <div class="wrap contact-grid">
    <div>
      <span class="eyebrow">Get in Touch</span>
      <h2 style="margin-top:6px;font-size:1.8rem;">Contact</h2>
      <p style="color:var(--ink-soft);margin:12px 0 20px;max-width:48ch;">Questions about representation, dues, grievances, or membership.</p>
      <div class="info-line"><div class="l">Email</div><div class="v">[Association board email — pending]</div></div>
      <div class="info-line"><div class="l">Mail</div><div class="v">[PPOA mailing address — pending]</div></div>
      <div class="info-line"><div class="l">Meetings</div><div class="v">[Meeting schedule — pending]</div></div>
      <p style="margin-top:20px;"><a id="mailto-board" class="btn" href="#">Email the Board</a></p>
    </div>
    <div>
      <span class="eyebrow">County HR Reference</span>
      <p style="color:var(--ink-soft);font-size:.9rem;margin-top:12px;">
        Placer County Human Resources Department<br>
        145 Fulweiler Avenue, Suite 200<br>
        Auburn, CA 95603<br>
        (530) 889-4060
      </p>
      <p style="color:var(--ink-soft);font-size:.82rem;margin-top:16px;">This site is maintained by the Association and is separate from Placer County's official website.</p>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="footer-inner">
    <svg class="footer-seal" viewBox="0 0 100 100"><use href="#seal"></use></svg>
    <div class="fine">
      <strong>Placer County Probation Peace Officers' Association</strong><br>
      This is an independent association website, not an official publication of Placer County or its Probation Department.
    </div>
  </div>
</footer>

<script>
/* ============================================================
   CONFIG — the only part you should need to edit.
   See SETUP_GUIDE.md for exactly how to get each value.
   ============================================================ */
const CONFIG = {
  calendarId: "REPLACE_WITH_CALENDAR_ID@group.calendar.google.com",
  timezone: "America/Los_Angeles",

  // URL of the deployed Apps Script web app that lists the
  // "Public Website Documents" Drive folder as JSON.
  documentsScriptUrl: "REPLACE_WITH_APPS_SCRIPT_WEB_APP_URL",

  // Link to the restricted, members-only Google Drive folder.
  memberResourcesUrl: "REPLACE_WITH_MEMBER_DRIVE_FOLDER_URL",

  // Board email — used for the mailto button and contact line.
  boardEmail: "REPLACE_WITH_BOARD_EMAIL",

  // Published-to-web CSV links, one per Sheet tab.
  sheets: {
    announcements: "REPLACE_WITH_ANNOUNCEMENTS_TAB_CSV_URL",
    faq:           "REPLACE_WITH_FAQ_TAB_CSV_URL",
    links:         "REPLACE_WITH_LINKS_TAB_CSV_URL",
  },

  // Google Form links members use to submit new items.
  forms: {
    announcement: "REPLACE_WITH_ANNOUNCEMENT_FORM_URL",
    faq:          "REPLACE_WITH_FAQ_FORM_URL",
    link:         "REPLACE_WITH_LINK_FORM_URL",
  },
};
/* ============================================================ */

function isPlaceholder(v){ return !v || v.indexOf("REPLACE_WITH_") === 0; }
function esc(s){ const d=document.createElement('div'); d.textContent=s||''; return d.innerHTML; }

/* ---------- Mobile nav ---------- */
document.querySelectorAll('nav.mainnav a').forEach(a=>{
  a.addEventListener('click', ()=> document.querySelector('nav.mainnav').classList.remove('open'));
});

/* ---------- Calendar embed ---------- */
function loadCalendar(){
  const frame = document.getElementById('cal-iframe');
  const container = frame.parentElement;
  if(isPlaceholder(CONFIG.calendarId)){
    frame.style.display='none';
    container.style.border='none'; container.style.background='transparent';
    if(!document.getElementById('cal-placeholder')){
      const note = document.createElement('div');
      note.id='cal-placeholder'; note.className='setup-note';
      note.textContent = "Calendar not connected yet. Add your Google Calendar ID to the CONFIG block to display events here.";
      container.appendChild(note);
    }
    return;
  }
  const src = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CONFIG.calendarId)}&ctz=${encodeURIComponent(CONFIG.timezone)}&mode=MONTH&showTitle=0&showCalendars=0&showTz=0`;
  frame.src = src; frame.style.display='block';
}

/* ---------- Generic Sheet (CSV) loader, for Announcements/FAQ/Links ---------- */
function loadSheet(url, onRows, onEmpty){
  if(isPlaceholder(url)){ onEmpty(); return; }
  Papa.parse(url, {
    download: true, header: true, skipEmptyLines: true,
    complete: (res) => {
      const rows = (res.data || []).filter(r => Object.values(r).some(v => (v||'').toString().trim() !== ''));
      rows.length ? onRows(rows) : onEmpty();
    },
    error: () => onEmpty(),
  });
}
function col(row, ...names){
  for(const key of Object.keys(row)){
    if(names.includes(key.trim().toLowerCase())) return (row[key]||'').toString().trim();
  }
  return '';
}
function parseDate(s){ if(!s) return null; const d = new Date(s); return isNaN(d) ? null : d; }
function fmtDate(d){ return d ? d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : ''; }

/* ---------- Documents: Apps Script + Drive folder ---------- */
const SAMPLE_DOCS = {
  documents: [
    {title:"PPOA MOU", category:"Current MOU", url:"https://www.placer.ca.gov/DocumentCenter/View/87485/PPOA-MOU---Clean-Copy-Final-DO-NOT-EDIT---20250308---signed", modified:"2025-03-08", mimeType:"application/pdf", effectiveDate:"2025-03-08", expirationDate:"2028-06-30"},
    {title:"Side Letter — County Holidays", category:"Side Letters", url:"https://www.placer.ca.gov/DocumentCenter/View/99965/PPOA-Side-Letter---County-Holidays---signed", modified:"2025-11-01", mimeType:"application/pdf"},
    {title:"Side Letter — Probation Support Canine Pay", category:"Side Letters", url:"https://www.placer.ca.gov/DocumentCenter/View/113890/PPOA-Side-Letter---Probation-Support-Canine-Pay---signed-ADA-compliant", modified:"2026-05-01", mimeType:"application/pdf"},
    {title:"Grievance Form", category:"Forms", url:"https://www.placer.ca.gov/DocumentCenter/View/87488/PPEO-DDAA-PPOA-ClasMngt-Confidential-Grievance-Form", modified:"2025-01-01", mimeType:"application/pdf"},
  ]
};
const CATEGORY_ORDER = ["Current MOU","Side Letters","Meeting Minutes","Forms","Other Public Documents"];

function docIconLabel(mimeType){
  if(!mimeType) return "DOC";
  if(mimeType.includes('pdf')) return "PDF";
  if(mimeType.includes('spreadsheet')) return "XLS";
  if(mimeType.includes('document')) return "DOC";
  if(mimeType.includes('image')) return "IMG";
  return "DOC";
}

function renderDocs(data){
  const docs = data.documents || [];
  const today = new Date();

  // Current MOU status card: the "Current MOU" category doc with the latest expiration date.
  const mous = docs.filter(d => (d.category||'').toLowerCase() === 'current mou');
  let current = null;
  mous.forEach(d=>{
    const end = parseDate(d.expirationDate);
    const curEnd = current ? parseDate(current.expirationDate) : null;
    if(!current || (end && (!curEnd || end > curEnd))) current = d;
  });
  const currentBox = document.getElementById('mou-current');
  if(current){
    const end = parseDate(current.expirationDate);
    const start = parseDate(current.effectiveDate);
    let badge = '<span class="badge ok">Active</span>';
    if(end){
      const daysLeft = (end - today) / 86400000;
      if(daysLeft < 0) badge = '<span class="badge bad">Expired</span>';
      else if(daysLeft < 90) badge = '<span class="badge warn">Expiring Soon</span>';
    }
    currentBox.innerHTML = `
      <div class="card">
        <span class="meta">Current MOU</span>
        <h3>${esc(current.title)} &nbsp; ${badge}</h3>
        <p>${start?('Effective '+fmtDate(start)):''}${end?(' through '+fmtDate(end)):''}</p>
        <p style="margin-top:10px;"><a class="btn" href="${current.url}" target="_blank" rel="noopener">View PDF</a></p>
      </div>`;
  } else {
    currentBox.innerHTML = '';
  }

  // Group remaining docs by category, in a sensible fixed order, unknown categories last.
  const groups = {};
  docs.forEach(d=>{
    const cat = d.category || "Other Public Documents";
    (groups[cat] = groups[cat] || []).push(d);
  });
  const orderedCats = Object.keys(groups).sort((a,b)=>{
    const ia = CATEGORY_ORDER.indexOf(a), ib = CATEGORY_ORDER.indexOf(b);
    return (ia===-1?999:ia) - (ib===-1?999:ib);
  });

  const container = document.getElementById('doc-groups');
  container.innerHTML = orderedCats.map(cat=>{
    const items = groups[cat].slice().sort((a,b)=> new Date(b.modified) - new Date(a.modified));
    const rows = items.map(d=>`
      <div class="doc-row">
        <div class="doc-icon">${docIconLabel(d.mimeType)}</div>
        <div class="doc-info">
          <div class="t">${esc(d.title)}</div>
          <div class="d">Updated ${fmtDate(parseDate(d.modified))}</div>
        </div>
        <a class="btn btn-ghost" href="${d.url}" target="_blank" rel="noopener">View</a>
      </div>`).join('');
    return `<div class="doc-group"><h3>${esc(cat)}</h3>${rows}</div>`;
  }).join('');
}

function loadDocs(){
  if(isPlaceholder(CONFIG.documentsScriptUrl)){
    renderDocs(SAMPLE_DOCS);
    document.getElementById('doc-groups').insertAdjacentHTML('afterbegin',
      '<div class="setup-note">Showing sample documents. Connect your Apps Script URL in the CONFIG block to pull the live list from your Drive folder.</div>');
    return;
  }
  fetch(CONFIG.documentsScriptUrl)
    .then(r => r.json())
    .then(renderDocs)
    .catch(()=>{
      document.getElementById('doc-groups').innerHTML =
        '<div class="empty-state">Documents couldn\'t be loaded right now. Please check back shortly.</div>';
    });
}

/* ---------- Announcements ---------- */
const SAMPLE_NEWS = [{title:"Website launched", date:"2026-07-01", body:"Welcome to the association's new home online."}];
function renderNews(rows){
  const list = document.getElementById('news-list');
  const sorted = rows.slice().sort((a,b)=> (parseDate(col(b,'date','timestamp'))||0) - (parseDate(col(a,'date','timestamp'))||0));
  list.innerHTML = sorted.map(r=>{
    const d = parseDate(col(r,'date','timestamp'));
    return `<div class="card"><span class="meta">${d?fmtDate(d):''}</span><h3>${esc(col(r,'title'))}</h3><p>${esc(col(r,'announcement text','body','message','text'))}</p></div>`;
  }).join('');
}
function loadNews(){
  loadSheet(CONFIG.sheets.announcements, renderNews, () => renderNews(SAMPLE_NEWS.map(n=>({'Title':n.title,'Date':n.date,'Announcement Text':n.body}))));
}

/* ---------- FAQ ---------- */
const SAMPLE_FAQ = [
  {q:"How do I join the association?", a:"Eligible department staff can join at no cost during their probationary period. Reach out through the Contact section to get started."},
  {q:"Who do I contact for a grievance?", a:"Start with your Unit Representative. The grievance form is available in the Documents section."},
];
function renderFaq(rows){
  document.getElementById('faq-list').innerHTML = rows.map((r,i)=>`
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="document.getElementById('faq-${i}').classList.toggle('open')"><span>${esc(col(r,'question'))}</span><span>&#8250;</span></div>
      <div class="faq-a">${esc(col(r,'answer'))}</div>
    </div>`).join('');
}
function loadFaq(){
  loadSheet(CONFIG.sheets.faq, renderFaq, () => renderFaq(SAMPLE_FAQ.map(f=>({'Question':f.q,'Answer':f.a}))));
}

/* ---------- Links ---------- */
const SAMPLE_LINKS = [
  {title:"Placer County HR — Employee & Labor Relations", url:"https://www.placer.ca.gov/1693/Employee-Labor-Relations", desc:"County resource on labor relations and represented units."},
  {title:"Benefits Information", url:"https://www.placer.ca.gov/1715/Benefit-Information", desc:"County benefits overview."},
];
function renderLinks(rows){
  document.getElementById('links-list').innerHTML = rows.map(r=>`
    <div class="link-row">
      <div><div class="t"><a href="${col(r,'url','link')}" target="_blank" rel="noopener">${esc(col(r,'link title','title'))}</a></div><div class="d">${esc(col(r,'description','desc'))}</div></div>
      <a class="btn btn-ghost" href="${col(r,'url','link')}" target="_blank" rel="noopener">Open</a>
    </div>`).join('');
}
function loadLinks(){
  loadSheet(CONFIG.sheets.links, renderLinks, () => renderLinks(SAMPLE_LINKS.map(l=>({'Link Title':l.title,'URL':l.url,'Description':l.desc}))));
}

/* ---------- Init ---------- */
window.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('announcement-form-link').href = isPlaceholder(CONFIG.forms.announcement) ? '#' : CONFIG.forms.announcement;
  document.getElementById('faq-form-link').href = isPlaceholder(CONFIG.forms.faq) ? '#' : CONFIG.forms.faq;
  document.getElementById('link-form-link').href = isPlaceholder(CONFIG.forms.link) ? '#' : CONFIG.forms.link;
  document.getElementById('member-resources-link').href = isPlaceholder(CONFIG.memberResourcesUrl) ? '#' : CONFIG.memberResourcesUrl;
  document.getElementById('mailto-board').href = isPlaceholder(CONFIG.boardEmail) ? '#' : ('mailto:' + CONFIG.boardEmail);

  loadCalendar();
  loadDocs();
  loadNews();
  loadFaq();
  loadLinks();
});
</script>
</body>
</html>
