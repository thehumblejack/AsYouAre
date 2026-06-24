import { load } from "cheerio";

/**
 * Post-processing applied to every Framer-exported page before it is served.
 *
 * It appends a single block before </body> that:
 *
 *  1. Hides Framer's promo/branding chrome with CSS (`display:none !important`):
 *       - `.framer-n1g3ql-container` — the templates/community promo widget
 *         ("130+ Premium Templates / Join our AI community / See all templates /
 *         1,540+ happy designers", linking to temlis.com / skool.com).
 *       - `#__framer-badge-container` — the "Made in Framer" badge.
 *     CSS (rather than DOM removal) is used because Framer's client-side runtime
 *     re-injects these nodes after hydration; an `!important` rule keeps them
 *     hidden no matter how many times they are re-rendered.
 *
 *  2. Injects a minimal, frosted (blurred) vertical (9:16) video widget pinned
 *     bottom-right — play on click, no other controls, no text. Drop a clip at
 *     /public/media/about-me.mp4 (optional poster about-me-poster.jpg) to fill it.
 *
 * The original HTML files in content/ are never modified.
 */
export function transformFramerHtml(html: string): string {
  const $ = load(html);
  rebrand($);
  $("body").append(WIDGET);
  return $.html();
}

/**
 * Rename the template brand "Aeline" -> "AsYouAre" in static content: visible
 * text nodes (skipping <script>/<style>), the <title>, and meta tag content
 * (description / Open Graph / Twitter). The client-side observer in WIDGET
 * re-applies this after Framer's runtime re-renders text on hydration.
 */
function rebrand($: ReturnType<typeof load>): void {
  const FROM = /Aeline/g;
  const TO = "AsYouAre";

  $("*")
    .contents()
    .each((_, node) => {
      const n = node as unknown as {
        type: string;
        data?: string;
        parent?: { name?: string } | null;
      };
      if (n.type !== "text" || !n.data || !n.data.includes("Aeline")) return;
      const parentName = n.parent?.name;
      if (parentName === "script" || parentName === "style") return;
      n.data = n.data.replace(FROM, TO);
    });

  $("meta[content]").each((_, el) => {
    const c = $(el).attr("content");
    if (c && c.includes("Aeline")) $(el).attr("content", c.replace(FROM, TO));
  });
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

  /* Minimal frosted-glass card, vertical 9:16, soft border. */
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
  /* Soft translucent wash over the placeholder so the blur reads through. */
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

<script>
/* Rename "Aeline" -> "AsYouAre" in the live DOM and keep it renamed even after
   Framer's runtime re-renders text on hydration. */
(function () {
  var FROM = /Aeline/g, MATCH = "Aeline";
  function isCode(el) {
    return !!el && (el.nodeName === "SCRIPT" || el.nodeName === "STYLE" || el.nodeName === "NOSCRIPT");
  }
  function fixTitle() {
    if (document.title.indexOf(MATCH) >= 0) document.title = document.title.replace(FROM, "AsYouAre");
  }
  function fixSubtree(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      if (!isCode(root.parentNode) && root.nodeValue && root.nodeValue.indexOf(MATCH) >= 0)
        root.nodeValue = root.nodeValue.replace(FROM, "AsYouAre");
      return;
    }
    if (root.nodeType !== 1 || isCode(root)) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (isCode(n.parentNode)) return NodeFilter.FILTER_REJECT;
        return n.nodeValue && n.nodeValue.indexOf(MATCH) >= 0
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (t) { t.nodeValue = t.nodeValue.replace(FROM, "AsYouAre"); });
  }
  function fixAll() { fixSubtree(document.body); fixTitle(); }

  fixAll();
  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === "characterData") {
        var t = m.target;
        if (!isCode(t.parentNode) && t.nodeValue && t.nodeValue.indexOf(MATCH) >= 0)
          t.nodeValue = t.nodeValue.replace(FROM, "AsYouAre");
      } else {
        for (var j = 0; j < m.addedNodes.length; j++) fixSubtree(m.addedNodes[j]);
      }
    }
    fixTitle();
  });
  if (document.body) mo.observe(document.body, { subtree: true, childList: true, characterData: true });
  window.addEventListener("load", fixAll);
})();
</script>
`;
