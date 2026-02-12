import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./visibility-fix.css";

export const metadata: Metadata = {
  title: "AsYouAre - Design as a Subscription",
  description: "The #1 design subscription service for agencies, startups, and entrepreneurs.",
  openGraph: {
    title: "Asyouare - Unlimited Design & Revisions",
    description: "The #1 unlimited product design subscription service for agencies, startups, and entrepreneurs.",
    images: ["/assets/img/preview.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asyouare - Unlimited Design & Revisions",
    description: "The #1 unlimited product design subscription service for agencies, startups, and entrepreneurs.",
    images: ["/assets/img/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="/assets/img/thumbnail.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/assets/img/thumbnail.png" />
        <style dangerouslySetInnerHTML={{
          __html: `
          .class-name {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          body {
            overflow-x: hidden;
          }
        `}} />
      </head>
      <body className="body">
        {children}

        {/* Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <Script id="webfont-load" strategy="afterInteractive">
          {`WebFont.load({ google: { families: ["Inconsolata:400,700"] } });`}
        </Script>
        <Script id="mod-js" strategy="afterInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-74383838-1" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-74383838-1', { 'anonymize_ip': false });`}
        </Script>
        <Script src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" strategy="afterInteractive" />
        <Script id="intercom-settings" strategy="afterInteractive">
          {`window.intercomSettings = { app_id: "rly65myg" };`}
        </Script>
        <Script id="intercom-widget" strategy="afterInteractive">
          {`(function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', w.intercomSettings); } else { var d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/rly65myg'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })();`}
        </Script>
        <Script src="https://api.memberstack.io/static/memberstack.js" strategy="afterInteractive" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EV8S8FVFB8" strategy="afterInteractive" />
        <Script id="gtag-global" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-EV8S8FVFB8');`}
        </Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" strategy="beforeInteractive" />
        <Script id="jquery-typer" strategy="afterInteractive">
          {`jQuery.noConflict(); jQuery(document).ready(function ($) { try { if ($.typer) { $.typer.options.highlightColor = 'rgba(9,127,255,100)'; $.typer.options.typerOrder = 'sequential'; $('[data-typer-targets]').typer(); } } catch(e) { console.error(e); } });`}
        </Script>
        <Script src="https://calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5837424ae11409586f837994" strategy="afterInteractive" />
        <Script src="/index.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
