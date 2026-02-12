import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./visibility-fix.css";

export const metadata: Metadata = {
  title: "AsYouAre - Agence Design & Développement Site Web Tunisie | Meilleure Agence Digitale",
  description: "🏆 Agence N°1 en Tunisie pour design site web, développement site web, création site internet. Services professionnels de conception graphique, UX/UI design, développement web sur mesure. Tunis, Sfax, Sousse - Devis gratuit.",
  keywords: [
    "design site web tunisie",
    "développement site web tunisie",
    "agence web tunisie",
    "création site internet tunisie",
    "agence design tunisie",
    "développement web tunisie",
    "conception site web tunis",
    "agence digitale tunisie",
    "design graphique tunisie",
    "UX UI design tunisie",
    "site web professionnel tunisie",
    "agence web tunis",
    "développement site web tunis",
    "design site web tunis",
    "création site web tunisie",
    "meilleure agence web tunisie",
    "agence développement web tunisie",
    "design web tunisie",
    "site internet tunisie",
    "agence création site web tunisie"
  ],
  authors: [{ name: "AsYouAre Design Agency Tunisia" }],
  creator: "AsYouAre - Agence Design & Développement Web Tunisie",
  publisher: "AsYouAre Tunisia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.asyouare.club'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-TN': '/',
      'ar-TN': '/',
      'en': '/',
    },
  },
  openGraph: {
    title: "AsYouAre - Meilleure Agence Design & Développement Site Web en Tunisie",
    description: "🎨 Agence leader en Tunisie spécialisée en design site web, développement site web, UX/UI design. Solutions digitales sur mesure pour entreprises tunisiennes. Tunis, Sfax, Sousse.",
    url: 'https://www.asyouare.club',
    siteName: 'AsYouAre Tunisia - Design & Développement Web',
    images: [
      {
        url: '/assets/img/preview.png',
        width: 1200,
        height: 630,
        alt: 'AsYouAre - Agence Design & Développement Site Web Tunisie',
      }
    ],
    locale: 'fr_TN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "AsYouAre - Design & Développement Site Web Tunisie",
    description: "🏆 Agence N°1 en Tunisie pour design site web et développement web professionnel. Services digitaux premium.",
    images: ["/assets/img/preview.png"],
    creator: "@asyouare_tn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="sYv6xZJ29TAW2D8tABVTCDl5MmYUXBl--dPfvbJDw7E" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.asyouare.club/#organization",
                  "name": "AsYouAre - Agence Design & Développement Web Tunisie",
                  "url": "https://www.asyouare.club",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.asyouare.club/assets/logo/asyouare_logo.svg"
                  },
                  "description": "Agence leader en Tunisie spécialisée en design site web, développement site web, UX/UI design",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "TN",
                    "addressRegion": "Tunis"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "Tunisia" },
                    { "@type": "City", "name": "Tunis" },
                    { "@type": "City", "name": "Sfax" },
                    { "@type": "City", "name": "Sousse" }
                  ]
                },
                {
                  "@type": "ProfessionalService",
                  "name": "AsYouAre - Services Design & Développement Web",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "TN"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services Design & Développement Web",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Design Site Web Tunisie"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Développement Site Web Tunisie"
                        }
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "50"
                  }
                }
              ]
            })
          }}
        />
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
