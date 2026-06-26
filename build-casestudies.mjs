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

// Platform per project (reasonable defaults — edit freely).
const PLATFORM = {
  myedspace: "Web app", bookini: "Web app", figjoy: "Web · Figma plugin",
  warena: "Web app", "pycon-us-2025": "Website", kaedim: "Web app",
  fanbasis: "Web app", tableflow: "Web app", "magic-moment": "Web app",
  terra: "Web · API", simular: "Desktop app",
};
const ROLE_CHIPS = ["Product strategy", "UX & user flows", "UI design", "Design system", "Prototyping", "Frontend engineering"];

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

  /* Hero meta row */
  .cs-meta { display:flex; flex-wrap:wrap; gap:34px; margin-top:32px; padding-top:26px; border-top:1px solid rgba(19,19,19,.1); }
  .cs-meta .k { display:block; font-family:${MONO}; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(19,19,19,.42); margin-bottom:7px; }
  .cs-meta .v { font-family:${PJS}; font-size:16px; font-weight:500; letter-spacing:-.01em; color:var(--ink); }

  /* Document sections */
  .cs-col { max-width:820px; }
  .cs-section { padding:54px 0; border-top:1px solid rgba(19,19,19,.08); }
  .cs-section.first { border-top:0; padding-top:64px; }
  .cs-label { font-family:${MONO}; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:rgba(19,19,19,.4); margin:0 0 16px; }
  .cs-h2 { font-family:${PJS}; font-size:clamp(26px,3.4vw,34px); line-height:1.15; font-weight:600; letter-spacing:-.035em; color:var(--ink); margin:0 0 18px; }
  .cs-p { font-family:${PJS}; font-size:17.5px; line-height:1.72; font-weight:400; letter-spacing:-.01em; color:rgba(19,19,19,.68); margin:0 0 16px; }
  .cs-note { font-family:${PJS}; font-size:14px; line-height:1.6; color:rgba(19,19,19,.42); margin-top:14px; font-style:italic; }
  .cs-roles { display:flex; flex-wrap:wrap; gap:8px; margin-top:22px; }
  .cs-role { font-family:${PJS}; font-size:14px; font-weight:500; color:rgba(19,19,19,.72); background:rgba(19,19,19,.05); padding:8px 15px; border-radius:48px; }

  /* Process timeline */
  .cs-process { margin-top:6px; }
  .cs-step { display:grid; grid-template-columns:84px 1fr; gap:24px; padding:26px 0; border-top:1px solid rgba(19,19,19,.08); }
  .cs-step:first-child { border-top:0; padding-top:8px; }
  .cs-step .num { font-family:${MONO}; font-size:14px; letter-spacing:.06em; color:var(--ink); padding-top:5px; }
  .cs-step h3 { font-family:${PJS}; font-size:21px; font-weight:600; letter-spacing:-.025em; color:var(--ink); margin:0 0 7px; }
  .cs-step p { font-family:${PJS}; font-size:16.5px; line-height:1.64; color:rgba(19,19,19,.64); margin:0; }

  /* Figures / image slots */
  .cs-media { padding:20px 0; }
  .cs-fig { margin:0; }
  .cs-fig > img { width:100%; height:auto; display:block; border-radius:16px; box-shadow:0 20px 50px rgba(20,30,60,.10); }
  .cs-fig figcaption { font-family:${MONO}; font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:rgba(19,19,19,.4); margin-top:13px; }
  .cs-ph { width:100%; display:flex; align-items:center; justify-content:center; border-radius:16px;
    background:linear-gradient(180deg, rgba(19,19,19,.04), rgba(19,19,19,.015)); border:1px dashed rgba(19,19,19,.16); }
  .cs-ph span { font-family:${MONO}; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:rgba(19,19,19,.32); }
  .cs-figrow { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  .cs-gallery { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; margin-top:8px; }
  @media (max-width:760px){ .cs-figrow, .cs-gallery { grid-template-columns:1fr; } }

  .cs-next { padding:30px 0 110px; }
  .cs-next .row { display:flex; align-items:center; justify-content:space-between; gap:24px; padding-top:34px; border-top:1px solid rgba(19,19,19,.08); flex-wrap:wrap; }
  .cs-allwork { display:inline-flex; align-items:center; gap:8px; font-family:${PJS}; font-size:15px; font-weight:600; color:var(--ink); text-decoration:none; }
  .cs-nextlink { position:relative; display:flex; flex-direction:column; align-items:flex-end; text-decoration:none; }
  .cs-nextlink .lbl { font-family:${MONO}; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(19,19,19,.45); }
  .cs-nextlink .nm { font-family:${PJS}; font-size:20px; font-weight:600; letter-spacing:-.02em; color:var(--ink); margin-top:3px; }
  .cs-nextlink:hover .nm { color:rgba(19,19,19,.6); }
  /* Hover preview of the next project's cover */
  .cs-preview { position:absolute; right:0; bottom:calc(100% + 18px); z-index:5; width:300px; aspect-ratio:16/10;
    border-radius:14px; overflow:hidden; background:#0b0b10; box-shadow:0 30px 60px rgba(20,30,60,.30);
    opacity:0; transform:translateY(14px) scale(.96); transform-origin:bottom right; pointer-events:none;
    transition:opacity .3s ease, transform .3s ease; }
  .cs-preview img { width:100%; height:100%; object-fit:cover; display:block; }
  .cs-nextlink:hover .cs-preview { opacity:1; transform:translateY(0) scale(1); }
  @media (max-width:760px){ .cs-preview { display:none; } }

  @media (max-width:640px){
    .cs-wrap { padding:0 22px; }
    .cs-hero { padding-top:120px; }
    .cs-meta { gap:22px; }
    .cs-step { grid-template-columns:1fr; gap:6px; }
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

// Renders an image, or a tasteful placeholder slot when none is provided yet.
// `img` is { src, caption?, alt? } from a project's optional `images` array.
function fig(img, ratio, hint) {
  if (img && img.src) {
    return `<figure class="cs-fig"><img src="${img.src}" alt="${img.alt || ""}" loading="lazy" />` +
      `${img.caption ? `<figcaption>${img.caption}</figcaption>` : ""}</figure>`;
  }
  return `<figure class="cs-fig"><div class="cs-ph" style="aspect-ratio:${ratio}"><span>${hint || "Add image"}</span></div></figure>`;
}

function caseMain(p, next) {
  const cover = coverUrl(p.media, 1600);
  const nextCover = coverUrl(next.media, 700);
  const im = p.images || [];
  const platform = PLATFORM[p.slug] || "Web app";
  const subLower = p.sub.charAt(0).toLowerCase() + p.sub.slice(1);

  const challenge = `${p.title} is ${subLower}. The brief was to take something genuinely complex and make it feel effortless — an experience that's clear to use, cohesive across every surface, and solid enough for the team to keep building on.`;
  const roleText = `I led ${p.title} end to end as a product designer and design engineer — owning the experience from research and strategy all the way through to the shipped, production-grade build.`;
  const outcome = `${p.title} came together as a polished, production-grade ${platform.toLowerCase()} — designed and engineered as one seamless whole, ready to grow with the team.`;

  const steps = [
    ["Discover", `I started with the problem and the people ${p.title} is for — auditing the current experience, aligning with stakeholders on goals, and mapping the core jobs the product had to do well.`],
    ["Define", `From there I shaped the structure: information architecture, the key user flows, and a focused scope for v1 — so there was a clear, prioritized path to build against.`],
    ["Design", `I designed the experience end to end, from low-fidelity flows to polished UI, and built a reusable design system that kept ${p.title} consistent and quick to extend. Prototypes made the interactions tangible before any code.`],
    ["Build", `As a design engineer I worked hand in hand with engineering — and built parts of the frontend myself — turning the designs into a responsive, production-grade interface with every detail intact.`],
    ["Ship & iterate", `We shipped, watched how people actually used it, and iterated — tightening flows, smoothing edge cases, and hardening the foundations for whatever came next.`],
  ];
  const stepHtml = steps.map(([h, t], i) =>
    `<div class="cs-step"><div class="num">0${i + 1}</div><div><h3>${h}</h3><p>${t}</p></div></div>`
  ).join("");
  const chips = ROLE_CHIPS.map((c) => `<span class="cs-role">${c}</span>`).join("");

  return `
  <main class="cs-main" data-framer-name="main">
    <section class="cs-hero"><div class="cs-wrap">
      <a class="cs-back" href="/portfolio">${ARROW_LEFT} All work</a>
      <p class="cs-eyebrow"><span class="dot"></span>Case study</p>
      <h1 class="cs-title">${p.title}</h1>
      <p class="cs-sub">${p.sub}</p>
      <a class="cs-cta" href="${CONTRA}" target="_blank" rel="noopener">View project ${ARROW_UP}</a>
      <div class="cs-meta">
        <div><span class="k">Role</span><span class="v">Design &amp; Engineering</span></div>
        <div><span class="k">Discipline</span><span class="v">${p.tag}</span></div>
        <div><span class="k">Platform</span><span class="v">${platform}</span></div>
        <div><span class="k">Year</span><span class="v">2024</span></div>
      </div>
    </div></section>

    <section class="cs-cover-wrap"><div class="cs-wrap"><div class="cs-cover"><img src="${cover}" alt="${p.title}" /></div></div></section>

    <section class="cs-section first"><div class="cs-wrap"><div class="cs-col">
      <p class="cs-label">Context</p>
      <h2 class="cs-h2">The challenge</h2>
      <p class="cs-p">${challenge}</p>
    </div></div></section>

    <section class="cs-media"><div class="cs-wrap">
      ${fig(im[0], "16/9", "Feature image · wide (16:9)")}
    </div></section>

    <section class="cs-section"><div class="cs-wrap"><div class="cs-col">
      <p class="cs-label">Role</p>
      <h2 class="cs-h2">What I owned</h2>
      <p class="cs-p">${roleText}</p>
      <div class="cs-roles">${chips}</div>
    </div></div></section>

    <section class="cs-media"><div class="cs-wrap"><div class="cs-figrow">
      ${fig(im[1], "4/3", "Screen")}
      ${fig(im[2], "4/3", "Screen")}
    </div></div></section>

    <section class="cs-section"><div class="cs-wrap"><div class="cs-col">
      <p class="cs-label">Process</p>
      <h2 class="cs-h2">From first sketch to shipped</h2>
      <div class="cs-process">${stepHtml}</div>
    </div></div></section>

    <section class="cs-section"><div class="cs-wrap">
      <div class="cs-col"><p class="cs-label">Highlights</p><h2 class="cs-h2">A closer look</h2></div>
      <div class="cs-gallery" style="margin-top:24px">
        ${fig(im[3], "4/3", "Screen")}
        ${fig(im[4], "4/3", "Screen")}
        ${fig(im[5], "4/3", "Screen")}
        ${fig(im[6], "4/3", "Screen")}
      </div>
    </div></section>

    <section class="cs-section"><div class="cs-wrap"><div class="cs-col">
      <p class="cs-label">Outcome</p>
      <h2 class="cs-h2">The result</h2>
      <p class="cs-p">${outcome}</p>
      <p class="cs-note">↳ Replace with the real results for ${p.title} — launch, adoption, metrics, or client feedback.</p>
    </div></div></section>

    <section class="cs-media"><div class="cs-wrap">
      ${fig(im[7], "16/9", "Closing image · wide (16:9)")}
    </div></section>

    <section class="cs-next"><div class="cs-wrap"><div class="row">
      <a class="cs-allwork" href="/portfolio">${ARROW_LEFT} Back to all work</a>
      <a class="cs-nextlink" href="/work/${next.slug}">
        <span class="cs-preview"><img src="${nextCover}" alt="${next.title}" loading="lazy" /></span>
        <span class="lbl">Next project</span>
        <span class="nm">${next.title} →</span>
      </a>
    </div></div></section>
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
