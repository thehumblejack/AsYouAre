// Generates a case study page per project at content/work/<slug>.html.
// Each page reuses the real Framer chrome (exact navbar + footer + fonts/tokens)
// from contact.html with the runtime stripped (so our content stays stable), and
// nav links rewritten to absolute paths (pages live under /work/).
import { load } from "cheerio";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { PROJECTS, CONTRA, coverUrl } from "./projects.data.mjs";

const RAW = readFileSync("content/contact.html", "utf8");
const PJS = `"Plus Jakarta Sans","Plus Jakarta Sans Placeholder",-apple-system,sans-serif`;
const MONO = `"Geist Mono","Geist Mono Placeholder",monospace`;

// Top-level nav targets (contact.html uses relative .html hrefs).
const HREF_MAP = {
  "index.html": "/", "./": "/",
  "about-us.html": "/about-us",
  "our-services.html": "/our-services",
  "blog.html": "/blog",
  "pricing.html": "/pricing",
  "contact.html": "/contact",
};

const ARROW = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const ARROW_UP = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>`;
const ARROW_LEFT = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;

function caseCss() {
  return `<style id="ayp-cs-style">
  html, body { background:#fff; }
  .cs-main { --ink:rgb(19,19,19); --lime:rgb(214,253,112); background:#fff; position:relative; z-index:0; }
  .cs-main * { box-sizing:border-box; }
  .cs-wrap { width:100%; max-width:1440px; margin:0 auto; padding:0 52px; }
  .cs-narrow { max-width:760px; }

  .cs-hero { padding:160px 0 40px; }
  .cs-back { display:inline-flex; align-items:center; gap:7px; font-family:${MONO}; font-size:13px; letter-spacing:.08em; text-transform:uppercase; color:rgba(19,19,19,.55); text-decoration:none; margin-bottom:30px; }
  .cs-back:hover { color:var(--ink); }
  .cs-eyebrow { font-family:${MONO}; font-size:13px; letter-spacing:.12em; text-transform:uppercase; color:rgba(19,19,19,.5); margin:0 0 14px; display:inline-flex; align-items:center; gap:9px; }
  .cs-eyebrow .dot { width:8px; height:8px; border-radius:50%; background:var(--lime); box-shadow:0 0 0 3px rgba(214,253,112,.35); }
  .cs-title { font-family:${PJS}; font-size:clamp(40px,6vw,68px); line-height:1.04; font-weight:600; letter-spacing:-.05em; color:var(--ink); margin:0; }
  .cs-sub { font-family:${PJS}; font-size:20px; line-height:1.5; font-weight:400; letter-spacing:-.02em; color:rgba(19,19,19,.6); margin:18px 0 0; max-width:620px; }
  .cs-cta { display:inline-flex; align-items:center; gap:8px; margin-top:30px; font-family:${PJS}; font-size:15px; font-weight:600; color:var(--ink); background:var(--lime); padding:13px 24px; border-radius:48px; text-decoration:none; }
  .cs-cta:hover { background:rgb(204,245,96); }

  .cs-cover-wrap { padding:36px 0 10px; }
  .cs-cover { border-radius:18px; overflow:hidden; background:#0b0b10; box-shadow:0 30px 80px rgba(20,30,60,.18); }
  .cs-cover img { width:100%; height:auto; display:block; }

  .cs-body { padding:64px 0 20px; }
  .cs-meta { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding:0 0 40px; margin-bottom:40px; border-bottom:1px solid rgba(19,19,19,.08); }
  .cs-meta .k { display:block; font-family:${MONO}; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(19,19,19,.45); margin-bottom:6px; }
  .cs-meta .v { font-family:${PJS}; font-size:16px; font-weight:500; letter-spacing:-.01em; color:var(--ink); }
  .cs-h2 { font-family:${PJS}; font-size:26px; line-height:1.2; font-weight:600; letter-spacing:-.03em; color:var(--ink); margin:38px 0 14px; }
  .cs-p { font-family:${PJS}; font-size:17px; line-height:1.7; font-weight:400; letter-spacing:-.01em; color:rgba(19,19,19,.7); margin:0 0 16px; }
  .cs-note { font-family:${PJS}; font-size:14px; color:rgba(19,19,19,.45); margin-top:8px; font-style:italic; }

  .cs-next { padding:30px 0 110px; }
  .cs-next .row { display:flex; align-items:center; justify-content:space-between; gap:24px; padding-top:34px; border-top:1px solid rgba(19,19,19,.08); flex-wrap:wrap; }
  .cs-allwork { display:inline-flex; align-items:center; gap:8px; font-family:${PJS}; font-size:15px; font-weight:600; color:var(--ink); text-decoration:none; }
  .cs-nextlink { display:flex; flex-direction:column; align-items:flex-end; text-decoration:none; }
  .cs-nextlink .lbl { font-family:${MONO}; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(19,19,19,.45); }
  .cs-nextlink .nm { font-family:${PJS}; font-size:20px; font-weight:600; letter-spacing:-.02em; color:var(--ink); margin-top:3px; }
  .cs-nextlink:hover .nm { color:rgba(19,19,19,.6); }

  @media (max-width:640px){
    .cs-wrap { padding:0 22px; }
    .cs-hero { padding-top:120px; }
    .cs-meta { grid-template-columns:1fr 1fr; gap:18px; }
    .cs-next .row { flex-direction:column; align-items:flex-start; }
    .cs-nextlink { align-items:flex-start; }
  }

  /* Reveal final state of any Framer appear-animations (runtime is stripped). */
  #main [style*="opacity:0"], #main [style*="opacity: 0"] { opacity:1 !important; }
  #ayp-mm { position:fixed; inset:0; z-index:2147483000; background:#fff; display:flex; flex-direction:column; padding:88px 28px 40px; transform:translateY(-100%); opacity:0; pointer-events:none; transition:transform .28s ease, opacity .28s ease; }
  #ayp-mm.open { transform:translateY(0); opacity:1; pointer-events:auto; }
  #ayp-mm a { font-family:${MONO}; font-size:22px; letter-spacing:.06em; text-transform:uppercase; color:#131313; text-decoration:none; padding:16px 0; border-bottom:1px solid rgba(19,19,19,.07); }
  #ayp-mm a.cta { margin-top:22px; border:0; background:#131313; color:#fff; text-align:center; border-radius:48px; padding:16px; }
  #ayp-mm .ayp-mm-close { position:absolute; top:26px; right:24px; width:40px; height:40px; border:0; background:rgba(19,19,19,.05); border-radius:50%; font-size:24px; line-height:1; cursor:pointer; color:#131313; }
  @media (min-width:810px){ #ayp-mm { display:none; } }
</style>`;
}

function mobileMenu() {
  return `
<div id="ayp-mm">
  <button class="ayp-mm-close" aria-label="Close menu">&times;</button>
  <a href="/">Home</a>
  <a href="/about-us">About us</a>
  <a href="/our-services">Services</a>
  <a href="/blog">Blog</a>
  <a href="/portfolio">Portfolio</a>
  <a class="cta" href="/contact">Contact us</a>
</div>
<script>
(function () {
  var menu = document.getElementById("ayp-mm");
  if (!menu) return;
  function open(){ menu.classList.add("open"); document.body.style.overflow="hidden"; }
  function close(){ menu.classList.remove("open"); document.body.style.overflow=""; }
  function bind(){ var p=document.querySelector('nav[data-framer-name="Phone Dark"]'); if(!p) return false;
    var b=p.querySelector('[data-framer-name="Open Dark"]')||p.querySelector('[data-framer-name="button wrap"]'); if(!b) return false;
    b.style.cursor="pointer"; b.addEventListener("click", function(e){ e.preventDefault(); open(); }); return true; }
  if(!bind()){ var n=0, iv=setInterval(function(){ if(bind()||++n>20) clearInterval(iv); }, 100); }
  menu.querySelector(".ayp-mm-close").addEventListener("click", close);
  Array.prototype.forEach.call(menu.querySelectorAll("a"), function(a){ a.addEventListener("click", close); });
})();
</script>`;
}

function caseMain(p, next) {
  const cover = coverUrl(p.media, 1600);
  return `
  <main class="cs-main" data-framer-name="main">
    <section class="cs-hero">
      <div class="cs-wrap">
        <a class="cs-back" href="/portfolio">${ARROW_LEFT} All work</a>
        <p class="cs-eyebrow"><span class="dot"></span>Case study</p>
        <h1 class="cs-title">${p.title}</h1>
        <p class="cs-sub">${p.sub}</p>
        <a class="cs-cta" href="${CONTRA}" target="_blank" rel="noopener">View project ${ARROW_UP}</a>
      </div>
    </section>

    <section class="cs-cover-wrap">
      <div class="cs-wrap"><div class="cs-cover"><img src="${cover}" alt="${p.title}" /></div></div>
    </section>

    <section class="cs-body">
      <div class="cs-wrap cs-narrow">
        <div class="cs-meta">
          <div><span class="k">Role</span><span class="v">Product Design · Engineering</span></div>
          <div><span class="k">Discipline</span><span class="v">${p.tag}</span></div>
          <div><span class="k">Year</span><span class="v">2024</span></div>
        </div>

        <h2 class="cs-h2">Overview</h2>
        <p class="cs-p">${p.title} — ${p.sub.toLowerCase()}. I led the design end to end, shaping the product from early concepts and flows through to a polished, production-ready interface.</p>
        <p class="cs-note">Placeholder copy — replace with the real case study story for ${p.title}.</p>

        <h2 class="cs-h2">What I did</h2>
        <p class="cs-p">Research and product strategy, information architecture, UX flows, a complete UI design system, and close collaboration with engineering to ship. Add the specifics, decisions, and outcomes here.</p>

        <h2 class="cs-h2">Outcome</h2>
        <p class="cs-p">Summarize the impact — metrics, launch, feedback. You can also drop in more screens, before/after shots, or a prototype embed in this section.</p>
      </div>
    </section>

    <section class="cs-next">
      <div class="cs-wrap">
        <div class="row">
          <a class="cs-allwork" href="/portfolio">${ARROW_LEFT} Back to all work</a>
          <a class="cs-nextlink" href="/work/${next.slug}">
            <span class="lbl">Next project</span>
            <span class="nm">${next.title} →</span>
          </a>
        </div>
      </div>
    </section>
  </main>`;
}

function makePage(p, next) {
  const $ = load(RAW);
  $("head script").remove();
  $("head title").remove();
  $('head meta[name="description"]').remove();
  $("head").prepend(`<title>${p.title} — AsYouAre</title><meta name="description" content="${p.sub}" />`);
  $("head").append(caseCss());

  const navWrappers = $("nav").map((_, el) => $.html($(el).parent())).get();
  const footerWrappers = $("footer").map((_, el) => $.html($(el).parent())).get();
  const svg = $("#svg-templates").length ? $.html($("#svg-templates")) : "";

  const body = `
<div id="main" data-framer-hydrate-v2>
  ${navWrappers.join("\n")}
  ${caseMain(p, next)}
  ${footerWrappers.join("\n")}
</div>
${mobileMenu()}
${svg}
`;
  $("body").empty().append(body);

  // Rewrite relative nav/footer links to absolute (pages live under /work/).
  $("nav a, footer a").each((_, a) => {
    const href = $(a).attr("href");
    if (href && HREF_MAP[href] !== undefined) $(a).attr("href", HREF_MAP[href]);
  });

  return "<!DOCTYPE html>\n" + $.html();
}

mkdirSync("content/work", { recursive: true });
PROJECTS.forEach((p, i) => {
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  writeFileSync(`content/work/${p.slug}.html`, makePage(p, next), "utf8");
});
console.log(`Wrote ${PROJECTS.length} case study pages to content/work/`);
