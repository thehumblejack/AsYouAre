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
  $("body").append(WIDGET);
  return $.html();
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
    width: 200px;
    z-index: 2147483600;
  }

  /* Minimal frosted-glass card, vertical 9:16, soft border. */
  #ayv-widget .ayv-card {
    position: relative;
    width: 100%;
    aspect-ratio: 9 / 16;
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
    #ayv-widget { right: 12px; bottom: 12px; width: min(46vw, 200px); }
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
