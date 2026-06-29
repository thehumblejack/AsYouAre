import { load } from "cheerio";
import { logoMarqueeInner } from "../../projects.data.mjs";

/**
 * Post-processing applied to every Framer-exported page before it is served.
 *
 *  1. Rebrands "Aeline"/"Ailine" -> "AsYouAre".
 *  2. Rewrites marketing copy to reposition the brand as a design-led, end-to-end
 *     product partner (design + engineering + AI strategy; design consulting &
 *     audit), via an exact (normalized) text-node map in COPY.
 *  3. Hides Framer's promo widget + "Made in Framer" badge (CSS !important).
 *  4. Injects the minimal frosted vertical video widget (bottom-right).
 *
 * Text changes are applied server-side here AND re-applied client-side by an
 * observer (see REBRAND_SCRIPT), because Framer's runtime re-renders text on
 * hydration and would otherwise revert them. The original files in content/
 * are never modified.
 */

// Normalize for matching: straight quotes, single spaces, trimmed.
function norm(s: string): string {
  return s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function rebrandText(v: string): string {
  return v.replace(/Aeline/g, "AsYouAre").replace(/Ailine/g, "AsYouAre");
}

// Exact (normalized) original text node -> replacement copy.
const COPY: Record<string, string> = {
  // --- Headings: per-word animated spans (single-word swaps only) ---
  Building: "Designing",
  and: "&",
  consulting: "design",
  "strategy.": "design.",

  // --- Service / feature names & short labels ---
  "Business Consulting": "Design Consulting & Audit",
  "Data & Insights": "Product Design & Engineering",
  "Data Points": "Projects delivered",
  "Automation & optimization": "Design systems & engineering",
  "Data analytics & insights": "Product design, end to end",
  "Intelligence in Every Decision": "Design in Every Decision",
  "Digital transformation": "Design-led transformation",
  "Experience intelligence": "Experience design",
  "VP of Business Transformation": "VP of Design & Engineering",
  "Chief Data Scientist": "Head of Engineering",

  // --- Hero / intro sublines (the two-line intro lives in RICH for the <br>) ---
  "From strategy to implementation, we create solutions that deliver measurable impact.":
    "From first sketch to shipped product, we design and engineer work that lasts.",
  "Collaborating with leading AI and cloud technology providers.":
    "Trusted to partner with leading design, AI, and technology teams.",

  // --- Service descriptions ---
  "We help you find chances for AI use and put the tools into your business.":
    "We find where AI creates real value in your product, then design and build it into the experience.",
  "We lead your change with smart plans, pushing growth and making work simple.":
    "We audit your product and design decisions, then guide your team with clear, expert direction.",
  "We turn your raw data into clear value using solid rules and great models.":
    "We design and engineer complete products end to end — from first sketch to a polished, production-grade build.",
  "Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.":
    "Build robust design systems and engineering foundations that keep your product consistent, fast, and a pleasure to maintain.",
  "Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling.":
    "Take your product from idea to launch — research, UX, interface, and engineering, crafted as one seamless whole.",
  "We guide organizations through full-scale digital evolution — modernizing systems, processes, and decision-making frameworks.":
    "We guide teams through design-led transformation — modernizing products, systems, and how decisions get made.",
  "Combine data and design to deliver smarter, more personalized digital experiences that connect with users.":
    "Combine craft, engineering, and AI to deliver experiences that feel effortless and genuinely connect with people.",

  // --- Section copy ---
  "Whether you're optimizing today or building for tomorrow we help you move faster with confidence.":
    "Whether you're shaping a new product or refining one you love, we help you design and build it with confidence.",
  "We help businesses harness technology not to replace human creativity, but to amplify it — enabling smarter decisions and faster.":
    "We use technology to amplify human creativity, not replace it — so every decision is sharper and every product more considered.",
  "Our approach blends strategic consulting, human-centered design, and advanced AI — giving you the clarity, tools, and confidence to thrive in the age of intelligence.":
    "Our approach blends product design, engineering, and AI strategy — giving you the clarity, craft, and confidence to ship with pride.",
  "Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.":
    "Our team blends design, engineering, and AI strategy to help companies ship products that are clearer to use, faster to build, and a pleasure to live with.",
  "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.":
    "Adapt and scale with confidence — on design systems and engineering foundations built to grow with you.",
  "Analyzed monthly to power smarter business strategies.":
    "Designed and shipped for teams around the world.",

  // --- About / journey ---
  "From our early days as a small consulting team to becoming a trusted AI partner for global organizations, our journey has been driven by curiosity, collaboration, and impact.":
    "From a small design studio to a trusted product partner for teams worldwide, our journey has been driven by craft, curiosity, and care.",
  // 2017 lives in RICH (needs bold "obsessed").
  "As tech advanced, we expanded our expertise into digital strategy and data analytics for all projects.":
    "As I grew, I deepened my expertise across product design and engineering.",
  "Seeing the potential of AI, we evolved to include automation, analytics, and smart systems for clients.":
    "Seeing the potential of AI, I wove AI strategy into how I design and build.",
  "We partnered with forward-thinking clients to design data-driven strategies and AI-powered frameworks.":
    "I partnered with forward-thinking teams to design and engineer complete AI-powered products and fully scalable projects.",

  // --- Pricing plan blurbs ---
  "Whether you're just starting your AI journey or scaling enterprise-wide innovation, we offer tailored solutions that grow with you.":
    "Whether you're designing your first product or scaling a mature one, we offer tailored engagements that grow with you.",
  "Perfect for small teams beginning to explore AI and automation.":
    "Perfect for small teams starting to design and build their product.",
  "Designed for growing companies ready to integrate AI into their operations.":
    "Designed for growing teams ready to invest in design and engineering.",
  "Custom-built for enterprises seeking full-scale transformation optimization.":
    "Custom-built for enterprises seeking end-to-end design, engineering, and AI strategy.",

  // --- Testimonials (wrapping quotes are part of the text) ---
  "\"Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless.\"":
    "\"They designed and built our product end to end — with rare craft, real commitment, and care for every detail. Expert, professional, and genuinely passionate.\"",
  "\"They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.\"":
    "\"They brought real clarity and craft to a complex product, and delivered design that simply works.\"",
  "\"They offered clear insights on tough projects, removing limits and providing sharp, key solutions now.\"":
    "\"They guided us through a tough build with sharp thinking and considered, beautiful design.\"",
  "\"They gave key clarity to hard issues, tearing down walls and producing smart, new quick answers.\"":
    "\"They turned a messy brief into a clear, elegant product — quickly, and with real care.\"",
  "\"They solved complex needs with great clarity, cutting through mess and giving sharp, key results.\"":
    "\"They handled real complexity with calm expertise and shipped a product we're proud of.\"",
};

// Replacements that need HTML markup (e.g. a bold word). Keyed by the same
// normalized original text. Applied by replacing the whole text node.
const RICH: Record<string, string> = {
  "We started as a small consulting team focused on business strategy and process optimization.":
    "I started as a designer and engineer, <strong>obsessed</strong> with creating projects and craft.",
  // Two-line hero / intro subline — direct and punchy.
  "We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.":
    "A global design partner.<br>We design, engineer, and ship products end to end.",
  "We are a consulting and AI innovation firm dedicated to helping organizations think smarter, move faster, and grow stronger.":
    "A global design partner.<br>We design, engineer, and ship products end to end.",
};

export function transformFramerHtml(html: string): string {
  const $ = load(html);

  $("*")
    .contents()
    .each((_, node) => {
      const n = node as unknown as {
        type: string;
        data?: string;
        parent?: { name?: string } | null;
      };
      if (n.type !== "text" || !n.data) return;
      const parentName = n.parent?.name;
      if (parentName === "script" || parentName === "style") return;

      const key = norm(n.data);
      if (key && Object.prototype.hasOwnProperty.call(RICH, key)) {
        $(node as never).replaceWith(RICH[key]);
        return;
      }
      let v = n.data;
      if (key && Object.prototype.hasOwnProperty.call(COPY, key)) v = COPY[key];
      v = rebrandText(v);
      if (v !== n.data) n.data = v;
    });

  $("meta[content]").each((_, el) => {
    const c = $(el).attr("content");
    if (c) {
      const nc = rebrandText(c);
      if (nc !== c) $(el).attr("content", nc);
    }
  });

  $("body").append(WIDGET);
  $("body").append(rebrandScript());
  $("body").append(navInjectScript());
  $("body").append(NAV_HOVER_STYLE);
  $("body").append(logoMarqueeScript());
  $("body").append(logoPreviewScript());
  return $.html();
}

/**
 * Replaces the Framer placeholder "logo ticker" on the HOME page with a scrolling
 * marquee of real client/project logos (from public/assets/logo). The ticker is a
 * direct child of <main>, so we hide it and insert our marquee right after it; an
 * observer re-inserts it if Framer re-renders. Home-only (the /portfolio page
 * builds its own marquee via build-portfolio.mjs).
 */
function logoMarqueeScript(): string {
  const marquee = logoMarqueeInner();
  return `
<script>
(function () {
  var p = location.pathname;
  if (p !== "/" && p !== "" && p !== "/index" && p !== "/index.html") return;
  var st = document.createElement("style");
  st.textContent = '[data-framer-name="logo ticker"]{display:none!important}'
    + '#ayp-home-logos{width:100%;padding:18px 0 38px;overflow:hidden;box-sizing:border-box;}'
    + '#ayp-home-logos .mask{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);}'
    + '#ayp-home-logos .track{display:flex;align-items:center;width:max-content;animation:ayph-marquee 42s linear infinite;}'
    + '#ayp-home-logos:hover .track{animation-play-state:paused;}'
    + '#ayp-home-logos .logo-item{display:inline-flex;align-items:center;flex:none;margin:0 36px;cursor:pointer;}'
    + '#ayp-home-logos .track img{height:30px;width:auto;max-width:150px;object-fit:contain;opacity:.58;filter:grayscale(1);transition:filter .25s ease,opacity .25s ease;}'
    + '#ayp-home-logos .logo-item:hover img{filter:none;opacity:1;}'
    + '@keyframes ayph-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'
    + '@media (max-width:640px){#ayp-home-logos .logo-item{margin:0 26px;}#ayp-home-logos .track img{height:24px;}}';
  document.head.appendChild(st);
  var MARQUEE = ${JSON.stringify(marquee)};
  var queued = false;
  function ensure() {
    if (document.getElementById("ayp-home-logos")) return;
    var ticker = document.querySelector('[data-framer-name="logo ticker"]');
    if (!ticker || !ticker.parentNode) return;
    var sec = document.createElement("section");
    sec.id = "ayp-home-logos";
    sec.className = "ayp-marq";
    sec.innerHTML = MARQUEE;
    ticker.parentNode.insertBefore(sec, ticker.nextSibling);
  }
  function schedule(){ if(queued) return; queued=true; requestAnimationFrame(function(){ queued=false; ensure(); }); }
  ensure();
  [200, 600, 1200, 2200, 3500, 5500, 8000].forEach(function (t) { setTimeout(ensure, t); });
  if (document.body) new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
})();
</script>`;
}

/**
 * Site-wide hover-preview for the logo marquees (home + /portfolio). Hovering a
 * logo (any [data-ayp-logo]) shows a fixed popover with the project's cover and a
 * "Check project" button → /work/<slug>; logos without a case study show a
 * disabled "Coming soon" button. The popover is body-level so it's never clipped
 * by the marquee's overflow:hidden.
 */
function logoPreviewScript(): string {
  return `
<script>
(function () {
  var HIDE_DELAY = 140, pop, coverImg, nameEl, btn, hideT, curr;
  function build() {
    if (document.getElementById("ayp-logo-pop")) return;
    var st = document.createElement("style");
    st.textContent =
      '#ayp-logo-pop{position:fixed;z-index:2147483646;width:280px;border-radius:14px;overflow:hidden;background:#fff;'
      + 'box-shadow:0 24px 60px rgba(20,30,60,.30);opacity:0;transform:translateY(8px) scale(.97);transform-origin:bottom center;'
      + 'pointer-events:none;transition:opacity .18s ease,transform .18s ease;font-family:"Plus Jakarta Sans","Plus Jakarta Sans Placeholder",sans-serif;}'
      + '#ayp-logo-pop.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}'
      + '#ayp-logo-pop .lp-cover{aspect-ratio:16/10;background:#0b0b10;display:flex;align-items:center;justify-content:center;}'
      + '#ayp-logo-pop .lp-cover img{width:100%;height:100%;object-fit:cover;display:block;}'
      + '#ayp-logo-pop.soon .lp-cover{background:#f1f2f4;}'
      + '#ayp-logo-pop.soon .lp-cover img{width:auto;height:auto;max-width:56%;max-height:46%;object-fit:contain;filter:grayscale(1);opacity:.7;}'
      + '#ayp-logo-pop .lp-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;}'
      + '#ayp-logo-pop .lp-name{font-size:15px;font-weight:600;letter-spacing:-.01em;color:#131313;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
      + '#ayp-logo-pop .lp-btn{font-size:13px;font-weight:600;letter-spacing:-.01em;padding:9px 15px;border-radius:48px;text-decoration:none;white-space:nowrap;flex:none;}'
      + '#ayp-logo-pop .lp-btn.go{background:#131313;color:#fff;}'
      + '#ayp-logo-pop .lp-btn.soon{background:rgba(19,19,19,.06);color:rgba(19,19,19,.4);cursor:not-allowed;}';
    document.head.appendChild(st);
    pop = document.createElement("div");
    pop.id = "ayp-logo-pop";
    pop.innerHTML = '<div class="lp-cover"><img alt=""></div><div class="lp-foot"><span class="lp-name"></span><a class="lp-btn"></a></div>';
    document.body.appendChild(pop);
    coverImg = pop.querySelector(".lp-cover img");
    nameEl = pop.querySelector(".lp-name");
    btn = pop.querySelector(".lp-btn");
    pop.addEventListener("mouseenter", function(){ clearTimeout(hideT); });
    pop.addEventListener("mouseleave", hide);
  }
  function position(el) {
    var r = el.getBoundingClientRect();
    var w = pop.offsetWidth || 280, h = pop.offsetHeight || 220;
    var left = Math.round(r.left + r.width / 2 - w / 2);
    left = Math.max(12, Math.min(left, window.innerWidth - w - 12));
    var top = Math.round(r.top - h - 12);
    if (top < 12) top = Math.round(r.bottom + 12);
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }
  function show(el) {
    if (!pop) build();
    clearTimeout(hideT);
    curr = el;
    var soon = el.hasAttribute("data-soon");
    pop.classList.toggle("soon", soon);
    coverImg.src = soon ? (el.getAttribute("data-logo") || "") : (el.getAttribute("data-cover") || "");
    nameEl.textContent = el.getAttribute("data-name") || "";
    if (soon) {
      btn.className = "lp-btn soon"; btn.textContent = "Coming soon"; btn.removeAttribute("href"); btn.title = "Case study coming soon";
    } else {
      btn.className = "lp-btn go"; btn.textContent = "Check project →"; btn.setAttribute("href", "/work/" + el.getAttribute("data-slug")); btn.removeAttribute("title");
    }
    position(el);
    requestAnimationFrame(function(){ pop.classList.add("open"); });
  }
  function hide() { hideT = setTimeout(function(){ if (pop) pop.classList.remove("open"); curr = null; }, HIDE_DELAY); }
  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest ? e.target.closest("[data-ayp-logo]") : null;
    if (el) { show(el); }
  });
  document.addEventListener("mouseout", function (e) {
    var el = e.target.closest ? e.target.closest("[data-ayp-logo]") : null;
    if (!el) return;
    var to = e.relatedTarget;
    if (to && to.closest && (to.closest("[data-ayp-logo]") || to.closest("#ayp-logo-pop"))) return;
    hide();
  });
  window.addEventListener("scroll", function(){ if (pop && pop.classList.contains("open") && curr) position(curr); }, true);
})();
</script>`;
}

/**
 * The injected "Portfolio" nav item is a static clone, so it doesn't get Framer's
 * JS-driven hover swap. The nav uses a two-copy "Menu Text" stack inside an
 * overflow-hidden wrap; reproduce the same hover slide with pure CSS (scoped to
 * the injected link so it never conflicts with Framer's own handlers).
 */
const NAV_HOVER_STYLE = /* html */ `
<style>
  a[data-ayv-portfolio] [data-framer-name="Menu Text"] {
    transition: transform .42s cubic-bezier(.44, 0, .16, 1);
  }
  a[data-ayv-portfolio]:hover [data-framer-name="Menu Text"] {
    transform: translateY(-100%) !important;
  }
</style>`;

/**
 * Client-side script that adds a "Portfolio" link to the Framer nav.
 *
 * The nav is generated and hydrated by Framer's runtime, so we can't add the
 * item in static HTML reliably — Framer would reconcile it away. Instead we
 * clone an existing menu item (the "Blog" link) after render, relabel it, and
 * re-add it whenever Framer re-renders the nav (same approach as the rebrand
 * observer above). The clone keeps Framer's classes (so it's styled
 * identically) and uses a plain href to /portfolio, which our route serves.
 */
function navInjectScript(): string {
  return `
<script>
(function () {
  // Normalize an href to its page slug: "./blog" / "blog.html" -> "blog".
  function slug(h) {
    return (h || "").replace(/^\\.?\\//, "").replace(/\\.html$/, "").replace(/\\/$/, "");
  }
  function addPortfolioLinks() {
    var anchors = Array.prototype.slice.call(document.querySelectorAll("a"));
    var blogAnchors = anchors.filter(function (a) { return slug(a.getAttribute("href")) === "blog"; });
    blogAnchors.forEach(function (blog) {
      var item = blog.closest('[class*="-container"]');
      if (!item || !item.parentElement) return;            // not the Framer nav (e.g. footer/our page)
      var row = item.parentElement;
      // Skip if this menu already has a Portfolio entry.
      if (row.querySelector('[data-ayv-portfolio]')) return;
      var already = Array.prototype.slice.call(row.querySelectorAll("a")).some(function (a) {
        return slug(a.getAttribute("href")) === "portfolio";
      });
      if (already) return;
      var clone = item.cloneNode(true);
      var a = clone.querySelector("a");
      if (!a) return;
      a.setAttribute("href", "/portfolio");
      a.setAttribute("data-ayv-portfolio", "1");
      a.removeAttribute("data-framer-page-link-current");
      // Relabel the (possibly duplicated) text nodes: Blog -> Portfolio.
      var w = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) {
        if (/Blog/i.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/Blog/gi, "Portfolio");
      }
      item.parentNode.insertBefore(clone, item.nextSibling); // place right after Blog
    });
  }

  var scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; addPortfolioLinks(); });
  }

  addPortfolioLinks();
  // Retry through Framer's hydration window.
  [100, 400, 900, 1800].forEach(function (t) { setTimeout(addPortfolioLinks, t); });
  if (document.body) {
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  }
  window.addEventListener("load", addPortfolioLinks);
})();
</script>
`;
}

/** Client-side script that re-applies rebrand + COPY after Framer re-renders. */
function rebrandScript(): string {
  return `
<script>
(function () {
  var COPY = ${JSON.stringify(COPY)};
  var RICH = ${JSON.stringify(RICH)};
  function norm(s) {
    return s.replace(/[\\u2018\\u2019]/g, "'").replace(/[\\u201C\\u201D]/g, '"')
            .replace(/\\s+/g, " ").trim();
  }
  function transform(v) {
    var key = norm(v);
    if (key && Object.prototype.hasOwnProperty.call(COPY, key)) v = COPY[key];
    return v.replace(/Aeline/g, "AsYouAre").replace(/Ailine/g, "AsYouAre");
  }
  function isCode(el) {
    return !!el && (el.nodeName === "SCRIPT" || el.nodeName === "STYLE" || el.nodeName === "NOSCRIPT");
  }
  function fixText(node) {
    if (isCode(node.parentNode)) return;
    var val = node.nodeValue || "";
    var key = norm(val);
    if (key && Object.prototype.hasOwnProperty.call(RICH, key) && node.parentNode) {
      var tmp = document.createElement("span");
      tmp.innerHTML = RICH[key];
      var frag = document.createDocumentFragment();
      while (tmp.firstChild) frag.appendChild(tmp.firstChild);
      node.parentNode.replaceChild(frag, node);
      return;
    }
    var nv = transform(val);
    if (nv !== node.nodeValue) node.nodeValue = nv;
  }
  function fixSubtree(root) {
    if (!root) return;
    if (root.nodeType === 3) { fixText(root); return; }
    if (root.nodeType !== 1 || isCode(root)) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(fixText);
  }
  function fixTitle() {
    var t = transform(document.title);
    if (t !== document.title) document.title = t;
  }
  function fixAll() { fixSubtree(document.body); fixTitle(); }

  fixAll();
  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === "characterData") fixText(m.target);
      else for (var j = 0; j < m.addedNodes.length; j++) fixSubtree(m.addedNodes[j]);
    }
    fixTitle();
  });
  if (document.body) mo.observe(document.body, { subtree: true, childList: true, characterData: true });
  window.addEventListener("load", fixAll);
})();
</script>
`;
}

const WIDGET = /* html */ `
<style>
  /* Hide Framer promo + badge (survives client-side re-injection). */
  .framer-n1g3ql-container,
  #__framer-badge-container { display: none !important; }

  #ayv-widget, #ayv-widget * { box-sizing: border-box; }
  #ayv-widget {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 230px;
    z-index: 2147483600;
  }

  /* Minimal frosted-glass card, vertical, soft white border. */
  #ayv-widget .ayv-card {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    background: rgba(16,16,20,0.28);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    backdrop-filter: blur(20px) saturate(140%);
    /* Soft white border, held 2px away from the video by the inset below. */
    border: 1px solid rgba(255,255,255,0.7);
    box-shadow:
      0 0 0 0.5px rgba(255,255,255,0.15),
      0 20px 50px rgba(0,0,0,0.35);
  }
  /* Inset the media 2px so the soft white border sits away from the video. */
  #ayv-widget .ayv-card video {
    position: absolute; inset: 2px;
    border-radius: 16px;
    object-fit: cover;
    display: block;
  }
  #ayv-widget .ayv-stage-bg {
    position: absolute; inset: 2px;
    border-radius: 16px;
    background: linear-gradient(160deg, rgba(255,255,255,0.10), rgba(0,0,0,0.18));
  }
  #ayv-widget .ayv-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    transition: opacity .2s ease;
  }
  #ayv-widget[data-playing="true"] .ayv-overlay { opacity: 0; pointer-events: none; }
  #ayv-widget .ayv-play {
    width: 46px; height: 46px;
    border-radius: 50%;
    background: rgba(255,255,255,0.92);
    color: #0b0b0d;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 6px 18px rgba(0,0,0,0.30);
  }
  #ayv-widget .ayv-play svg { width: 18px; height: 18px; margin-left: 2px; }

  @media (max-width: 480px) {
    #ayv-widget { right: 12px; bottom: 12px; width: min(52vw, 230px); }
  }
</style>

<div id="ayv-widget" data-playing="false">
  <div class="ayv-card" data-ayv="play">
    <div class="ayv-stage-bg"></div>
    <video playsinline preload="none" poster="/media/about-me-poster.jpg">
      <source src="/media/about-me.mp4" type="video/mp4" />
    </video>
    <div class="ayv-overlay">
      <span class="ayv-play">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    </div>
  </div>
</div>

<script>
(function () {
  var w = document.getElementById("ayv-widget");
  if (!w) return;
  var video = w.querySelector("video");

  w.addEventListener("click", function () {
    if (!video) return;
    if (video.paused) {
      video.setAttribute("controls", "");
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    } else {
      video.pause();
    }
  });

  if (video) {
    video.addEventListener("play", function () { w.setAttribute("data-playing", "true"); });
    video.addEventListener("pause", function () { w.setAttribute("data-playing", "false"); });
    video.addEventListener("ended", function () { w.setAttribute("data-playing", "false"); });
  }
})();
</script>
`;
