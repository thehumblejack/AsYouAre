// Builds content/portfolio.html as a duplicate of the about-us page that
// shows ONLY the hero/bento section (Trusted over 5,000+ … Commitment 100%).
// The Framer runtime is kept intact (so the section renders pixel-perfect with
// its animations); the other sections (about, team, journey) are hidden via
// injected CSS, which survives the runtime's re-render.
import { load } from "cheerio";
import { readFileSync, writeFileSync } from "node:fs";
import { PROJECTS, coverUrl } from "./projects.data.mjs";

const $ = load(readFileSync("content/about-us.html", "utf8"));

// Title for the new page.
$("head title").text("Portfolio — AsYouAre");

// Hide everything except the hero/bento section + the page chrome (nav/footer):
//  - the other <main> sections (about, team, journey)
//  - the pre-footer CTA band ("We combine human insight…"), which the runtime
//    renders as .framer-b18no3-container (its own section with a duplicate
//    "Trusted over 5,000+" eyebrow — separate from the hero, so hiding it leaves
//    the hero fully intact).
// Targeted with !important so it wins over Framer's inline styles after hydration.
const HIDE = ["about", "team", "journey"];
const hideCss = HIDE.map((n) => `main > [data-framer-name="${n}"]`).join(",\n  ");
$("head").append(`<style id="ayp2-only-hero">
  ${hideCss},
  .framer-b18no3-container { display: none !important; }
</style>`);

// This page is a byte-for-byte duplicate of about-us, so Framer's SPA router
// believes the current page IS about-us: it marks the "About us" nav link as the
// current page (inert) and routes the other links client-side incorrectly. Force
// every nav/footer link to perform a real navigation. A window-capture click
// listener fires before Framer's document/element handlers, so it wins.
$("body").append(`<script>
(function () {
  window.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a");
    if (!a || (!a.closest("nav") && !a.closest("footer") && !a.closest("#ayp-projects"))) return;
    var href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    var url; try { url = new URL(href, location.href).href; } catch (_) { return; }
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.assign(url);
  }, true);
  // Remove the inert "current page" marker from the About-us link.
  function clearCurrent() {
    var els = document.querySelectorAll("[data-framer-page-link-current]");
    for (var i = 0; i < els.length; i++) els[i].removeAttribute("data-framer-page-link-current");
  }
  clearCurrent();
  [300, 800, 1500].forEach(function (t) { setTimeout(clearCurrent, t); });
})();
</script>`);

// --- Reword the hero toward a portfolio + inject a 3-up projects grid ---
// Fonts already loaded by the about-us <head>.
const PJS = `"Plus Jakarta Sans","Plus Jakarta Sans Placeholder",-apple-system,sans-serif`;
const MONO = `"Geist Mono","Geist Mono Placeholder",monospace`;

// Real projects (sourced from Contra). Each card = image, then a row of
// [logo mark] + [title] + [subheading], linking to the project.
//   - img:  cover image URL (fills the thumbnail). If omitted, a gradient +
//           wordmark placeholder is shown instead — add an img to replace it.
//   - link: project URL (defaults to the Contra work page).
// 4-point sparkle mark (like the reference logo).
const STAR = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1.4c.32 4.86 2.34 6.88 7.2 7.2.34.02.34.78 0 .8-4.86.32-6.88 2.34-7.2 7.2-.02.34-.78.34-.8 0-.32-4.86-2.34-6.88-7.2-7.2-.34-.02-.34-.78 0-.8 4.86-.32 6.88-2.34 7.2-7.2.02-.34.78-.34.8 0Z"/></svg>`;
// Each card links to its case study page at /work/<slug> (same tab).
const cardsHtml = PROJECTS.map((p) => `
        <a class="card" href="/work/${p.slug}">
          <div class="thumb"><img src="${coverUrl(p.media, 1100)}" alt="${p.title}" /></div>
          <div class="meta">
            <span class="logo" style="background:${p.grad}">${STAR}</span>
            <span class="info">
              <span class="title">${p.title}</span>
              <span class="sub">${p.sub}</span>
            </span>
          </div>
        </a>`).join("");

const gridInnerHtml = `
    <div class="ayp-wrap">
      <div class="ayp-head">
        <p class="ayp-eyebrow"><span class="dot"></span>Selected work</p>
        <h2 class="ayp-h2">Recent projects</h2>
        <p class="ayp-lead">A look at products I've designed, engineered, and shipped — each one taken from first sketch to a polished, production-grade build.</p>
      </div>
      <div class="ayp-grid">${cardsHtml}
      </div>
    </div>`;

$("head").append(`<style id="ayp-grid-style">
  #ayp-projects { box-sizing:border-box; background:#fff; padding:104px 52px 110px; position:relative; z-index:1; width:100%; align-self:stretch; }
  #ayp-projects * { box-sizing:border-box; }
  /* Match the Framer content column exactly: 52px outer gutter + 1440px max-width
     (gives 1176 at 1280px and 1440 at >=1600px, same as .framer-18mwejh). */
  #ayp-projects .ayp-wrap { width:100%; max-width:1440px; margin:0 auto; }
  #ayp-projects .ayp-head { text-align:center; max-width:680px; margin:0 auto 56px; }
  #ayp-projects .ayp-eyebrow { font-family:${MONO}; font-size:14px; line-height:20px; letter-spacing:.12em; text-transform:uppercase; color:rgba(19,19,19,.55); display:inline-flex; align-items:center; gap:9px; margin:0 0 18px; }
  #ayp-projects .ayp-eyebrow .dot { width:8px; height:8px; border-radius:50%; background:rgb(214,253,112); box-shadow:0 0 0 3px rgba(214,253,112,.35); }
  #ayp-projects .ayp-h2 { font-family:${PJS}; font-size:48px; line-height:56px; font-weight:500; letter-spacing:-.06em; margin:0; color:rgb(19,19,19); }
  #ayp-projects .ayp-lead { font-family:${PJS}; font-size:20px; line-height:28px; font-weight:400; letter-spacing:-.04em; color:rgba(19,19,19,.6); margin:18px auto 0; }
  #ayp-projects .ayp-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:26px 18px; align-items:start; }
  #ayp-projects .card { display:flex; flex-direction:column; gap:15px; cursor:pointer; text-decoration:none; color:inherit; }
  /* Image */
  #ayp-projects .thumb { position:relative; aspect-ratio:5/4; border-radius:10px; overflow:hidden; display:flex; align-items:center; justify-content:center; background:#0b0b10; box-shadow:0 18px 44px rgba(20,30,60,.16); }
  #ayp-projects .thumb img { width:100%; height:100%; object-fit:cover; display:block; }
  #ayp-projects .thumb::after { content:""; position:absolute; inset:0; border-radius:10px; box-shadow:inset 0 0 0 1px rgba(255,255,255,.07); }
  #ayp-projects .thumb .wm { display:inline-flex; align-items:center; gap:12px; z-index:1; color:rgba(255,255,255,.94); font-family:${PJS}; font-weight:600; font-size:28px; letter-spacing:-.02em; }
  #ayp-projects .thumb .wm svg { width:24px; height:24px; opacity:.95; }
  /* Logo + title + subheading row */
  #ayp-projects .meta { display:flex; align-items:center; gap:14px; padding-top:2px; }
  #ayp-projects .logo { width:54px; height:54px; border-radius:10px; flex:none; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,.92); box-shadow:inset 0 0 0 1px rgba(255,255,255,.08); }
  #ayp-projects .logo svg { width:22px; height:22px; }
  #ayp-projects .info { min-width:0; display:flex; flex-direction:column; }
  #ayp-projects .title { font-family:${PJS}; font-size:19px; line-height:1.3; font-weight:600; letter-spacing:-.02em; color:rgb(19,19,19); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  #ayp-projects .sub { font-family:${PJS}; font-size:15px; line-height:1.35; font-weight:400; color:rgba(19,19,19,.55); margin-top:3px; }
  @media (max-width:980px){ #ayp-projects{padding:80px 32px;} #ayp-projects .ayp-grid{grid-template-columns:repeat(2,1fr);} #ayp-projects .ayp-h2{font-size:38px; line-height:46px;} }
  @media (max-width:640px){ #ayp-projects{padding:64px 22px;} #ayp-projects .ayp-grid{grid-template-columns:1fr;} #ayp-projects .ayp-h2{font-size:32px; line-height:38px;} }
</style>`);

// Inject the grid into <main> (so it sits between the hero and the footer) and
// reword the hero. Both are re-applied on Framer's re-render via an observer.
$("body").append(`<script>
(function () {
  var GRID_HTML = ${JSON.stringify(gridInnerHtml)};
  function ensureGrid() {
    if (document.getElementById("ayp-projects")) return;
    var main = document.querySelector("main");
    if (!main) return;
    var sec = document.createElement("section");
    sec.id = "ayp-projects";
    sec.innerHTML = GRID_HTML;
    main.appendChild(sec);
  }
  // Reword the per-word hero heading in place (keeps Framer's text styling).
  function fixHeading() {
    var hs = document.querySelectorAll("h1, h2");
    for (var i = 0; i < hs.length; i++) {
      var h = hs[i];
      if (!/empowering\\s+businesses/i.test(h.textContent || "")) continue;
      var words = ["Selected", "work,", "designed", "&", "shipped"];
      var tw = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null), nodes = [], n;
      while ((n = tw.nextNode())) { if ((n.nodeValue || "").trim() !== "") nodes.push(n); }
      for (var j = 0; j < nodes.length; j++) {
        var nv = j < words.length ? words[j] : "";
        if (nodes[j].nodeValue !== nv) nodes[j].nodeValue = nv;
      }
    }
  }
  // Reword the "Trusted over 5,000+" eyebrow (single text node).
  function fixTrusted() {
    var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n;
    while ((n = tw.nextNode())) {
      if ((n.nodeValue || "").trim() === "Trusted over 5,000+") n.nodeValue = "Trusted by teams worldwide";
    }
  }
  var queued = false;
  function run() { ensureGrid(); fixHeading(); fixTrusted(); }
  function schedule() { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; run(); }); }
  run();
  [200, 600, 1200, 2200].forEach(function (t) { setTimeout(run, t); });
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
</script>`);

writeFileSync("content/portfolio.html", "<!DOCTYPE html>\n" + $.html(), "utf8");
console.log("Wrote content/portfolio.html");
