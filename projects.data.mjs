// Single source of truth for the portfolio projects, shared by build-portfolio.mjs
// (the /portfolio grid) and build-casestudies.mjs (the /work/<slug> pages).
// Media `id` is a Contra Cloudinary id; `type` is "vid" (cover is a video → still
// frame) or "img". coverUrl() builds the URL at a given width.

export const CONTRA = "https://contra.com/humblejack/work?r=humblejack";

export function coverUrl(media, w = 1100) {
  return media.type === "vid"
    ? `https://media.contra.com/video/upload/so_0,q_auto,w_${w}/${media.id}.jpg`
    : `https://media.contra.com/image/upload/q_auto,w_${w}/${media.id}.avif`;
}

export const PROJECTS = [
  { slug: "myedspace",     title: "MyEdSpace",     sub: "Education platform dashboard (UK)",              tag: "Product Design · Web App",   grad: "radial-gradient(120% 100% at 28% 16%, #243056, #0a0b12 60%)", media: { type: "vid", id: "cf7k4hkrzzixyzi0ht6f" } },
  { slug: "bookini",       title: "Bookini",       sub: "All-in-one hotel management platform",           tag: "Product Design · SaaS",      grad: "radial-gradient(120% 100% at 28% 16%, #143a30, #0a0f0d 60%)", media: { type: "vid", id: "o06ep1380xuybzlkf9ri" } },
  { slug: "figjoy",        title: "Figjoy",        sub: "Copy to Figma, get hired & earn as a designer",  tag: "Product · Branding",         grad: "radial-gradient(120% 100% at 28% 16%, #3a2c12, #100c08 60%)", media: { type: "vid", id: "ezierurux3ypavgd5b5t" } },
  { slug: "warena",        title: "Warena",        sub: "Gaming tournament platform",                     tag: "Product Design · Web3",      grad: "radial-gradient(120% 100% at 28% 16%, #2e1f4d, #0c0a14 60%)", media: { type: "vid", id: "kallq4neicbdnl1ex000" } },
  { slug: "pycon-us-2025", title: "PyCon US 2025", sub: "Conference design · Python Software Foundation", tag: "Brand · Web",                grad: "radial-gradient(120% 100% at 28% 16%, #26323a, #0a0d0f 60%)", media: { type: "vid", id: "hrpgspcroeuc1swwryid" } },
  { slug: "kaedim",        title: "Kaedim",        sub: "AI-powered 3D asset production",                 tag: "Product Design · AI",        grad: "radial-gradient(120% 100% at 28% 16%, #1f3a4d, #0a0e12 60%)", media: { type: "vid", id: "ytqjmmsv5aiuajtpk982" } },
  { slug: "fanbasis",      title: "Fanbasis",      sub: "Creator monetization ecosystem",                 tag: "Product Design",             grad: "radial-gradient(120% 100% at 28% 16%, #3a2030, #120a0e 60%)", media: { type: "img", id: "n8ggd9hal47bgoocwpem" } },
  { slug: "tableflow",     title: "TableFlow",     sub: "AI teammates for data tasks",                    tag: "Product Design · AI",        grad: "radial-gradient(120% 100% at 28% 16%, #20303a, #0a0e12 60%)", media: { type: "img", id: "r4lcxcrf3hw3nivdvw7b" } },
  { slug: "magic-moment",  title: "Magic Moment",  sub: "AI agents management · contest finalist",        tag: "Product Design · AI",        grad: "radial-gradient(120% 100% at 28% 16%, #43182f, #120a0e 60%)", media: { type: "vid", id: "bz8znhv2ippeujnmuyak" } },
  { slug: "terra",         title: "Terra",         sub: "Health API for wearables & sensor data (YC W21)", tag: "Product Design · API",      grad: "radial-gradient(120% 100% at 28% 16%, #14352a, #0a0f0c 60%)", media: { type: "vid", id: "gb3o5awpk3e3bd0m1r2s" } },
  { slug: "simular",       title: "Simular",       sub: "Let your computer work for you",                 tag: "Product Design · AI",        grad: "radial-gradient(120% 100% at 28% 16%, #312352, #0c0a16 60%)", media: { type: "vid", id: "htksq8jytpcajj9d9jpw" } },
];
