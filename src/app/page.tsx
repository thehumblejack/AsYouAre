'use client';

import React from 'react';
import FAQItem from './components/FAQItem';
import SEOContent from './components/SEOContent';

export default function Home() {
  return (
    <main>
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" className="navbar w-nav">
        <div className="container nav">
          <div><a href="/" aria-current="page" className="nav__logo w-nav-brand w--current"><img
            src="/assets/logo/asyouare_logo.svg" loading="lazy" alt="" /></a></div>
          <div>
            <nav role="navigation" className="nav-menu w-nav-menu"><a
              href="https://www.figma.com/proto/noms4VJJeWILgxRQA0EWQp/Senior.-UI%2FUX-Designer-%E2%80%A2-Design-Mentor---Hamza-HAJ-TAIEB?type=design&node-id=701-44229&t=RyRhkI0JrKtS3Bbb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=701%3A44229"
              target="_blank" className="nav__link w-nav-link">Latest projects</a><a href="#pricing-3"
                className="nav__link w-nav-link">Pricing</a><a target="_blank" className="nav__link w-nav-link">FAQs</a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-nav"><a href="/" aria-current="page" className="link-block-2 w-inline-block w--current"><img
        src="/assets/logo/asyouare_logo.svg" loading="lazy" alt="" /></a></div>
      <div id="hero" className="section hero">
        <div className="container">
          <div data-w-id="eaba7a0f-a465-906c-7bef-2dc700a79ac4" style={{ opacity: 0 }} className="container__800 m-auto hero">
            <h1>A design agency with a twist</h1>
            <p className="sub-para-24">Design subscriptions to scale your business.</p>
            <div className="button__group"><a href="#pricinggrid" className="button hero w-inline-block">
              <div>See plans</div>
            </a></div>
            <div className="guarantee">
              <div>Designs you'll</div><img
                src="https://assets.website-files.com/5837424ae11409586f837994/61195da63e9b07d94bbaa046_heart.svg"
                loading="lazy" alt="" className="guarnatee__heart" />
              <div>, guaranteed</div>
            </div>
          </div>
        </div><img src="https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="88ac922f-e294-f08f-3bb5-de0e2b0d5499" alt="" className="image-43" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="4dab2a26-fac7-cb3a-a724-a93ff68c1152" alt="" className="image-44" />
      </div>
      <div data-w-id="88b3e066-f20b-1c07-b09f-c6ceb4034a45" className="div-block-2">
        <div className="container"><img
          src="https://assets.website-files.com/5837424ae11409586f837994/61250d3dea79031fe9f7246a_Frame.svg"
          loading="lazy" data-w-id="1489d49a-5dfd-3922-f901-235965df4479" alt="" className="image-71" /></div>
        <div data-w-id="abadc605-7bb3-54f7-bfc2-eda587363b26" style={{ opacity: 0 }} className="hero-images-slider"><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam.jpg" loading="lazy"
          sizes="400px"
          srcSet="https://assets.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam.jpg 1000w"
          alt="" className="image-68" /><img
            src="https://assets.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam.jpg" loading="lazy"
            sizes="400px"
            srcSet="https://assets.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam.jpg 1000w"
            alt="" className="image-68" /><img
            src="https://assets.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam.jpg" loading="lazy"
            sizes="400px"
            srcSet="https://assets.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam.jpg 1000w"
            alt="" className="image-68" /><img
            src="https://assets.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3.jpg"
            loading="lazy" sizes="400px"
            srcSet="https://assets.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3.jpg 1000w"
            alt="" className="image-68" /><img
            src="https://assets.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4.jpg"
            loading="lazy" sizes="400px"
            srcSet="https://assets.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4.jpg 1000w"
            alt="" className="image-68" /></div>
        <div className="container logo">
          <div className="logos hero hidden"><img
            src="https://assets.website-files.com/5837424ae11409586f837994/61424b89af08bc0dda064aad_Frame%2051.svg"
            loading="lazy" alt="" className="footer__logo lang" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6165e962d62dea1088533161_Dark%20Logo%20SVG.svg"
              loading="lazy" alt="" className="footer__logo soundstripe" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/5e1c9822a7d3a238e9408487_flipreach%201.svg"
              loading="lazy" alt="" className="footer__logo flip" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/61424c141e3dc1c309714ab0_Group%2015.svg"
              loading="lazy" alt="" className="footer__logo soundstripe" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/5e1c980f4b6c084724851ee1_cometchat%201.svg"
              loading="lazy" alt="" className="footer__logo" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/612032a68276a420485f9d07_5e1c97ff4b6c08205c851ec2_failory%201%20(1)%201.svg"
              loading="lazy" alt="" className="footer__logo last-child" /></div>
        </div>
      </div>
      <div className="marquee__wrapper">
        <div className="marquee__inner">
          <div className="marquee__element">
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f3dd4d61aae_612032a68276a420485f9d07_5e1c97ff4b6c08205c851ec2_failory%201%20(1)%201%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f95a6d61ab0_Group%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f1141d61aaf_6165e962d62dea1088533161_Dark%20Logo%20SVG%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo domatron"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/620318d678b163b6891e6684_Frame.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7ffb52d61aad_61424b89af08bc0dda064aad_Frame%2051%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f102ad61aab_5e1c980f4b6c084724851ee1_cometchat%201%201.svg"
              loading="lazy" alt="" /></div>
          </div>
          <div className="marquee__element">
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f3dd4d61aae_612032a68276a420485f9d07_5e1c97ff4b6c08205c851ec2_failory%201%20(1)%201%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f95a6d61ab0_Group%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f1141d61aaf_6165e962d62dea1088533161_Dark%20Logo%20SVG%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo domatron"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/620318d678b163b6891e6684_Frame.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7ffb52d61aad_61424b89af08bc0dda064aad_Frame%2051%201.svg"
              loading="lazy" alt="" /></div>
            <div className="marquee__logo"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f102ad61aab_5e1c980f4b6c084724851ee1_cometchat%201%201.svg"
              loading="lazy" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="section white p-t-100">
        <div className="container">
          <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716534" style={{ opacity: 0 }} className="container__800 m-auto hero">
            <h2 className="max-600">We didn't reinvent the wheel, just design</h2>
            <p className="sub-para-24 max-600">Design as you know it is out the door. Design as you want it just arrived.</p>
          </div>
          <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716539" style={{ opacity: 0 }} className="w-layout-grid how-it-works__grid">
            <div className="div-block-19">
              <div className="process__icon-block">
                <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e771653c" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e1767da10a1f51ca4fa361f_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="2.8" data-duration="0"></div>
              </div>
              <div className="_1">Subscribe to a plan &amp; request as many designs as you'd like.</div>
            </div>
            <div className="div-block-19">
              <div className="process__icon-block receive">
                <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716541" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e177abae85f69bf6f2f813a_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="2.566666666666667" data-duration="0"></div>
              </div>
              <div>Receive your design within a few business days on average, Monday to Friday.</div>
            </div>
            <div className="div-block-19">
              <div className="process__icon-block revise">
                <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716546" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e177f46fb9c030823177d84_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="5.2" data-duration="0"></div>
              </div>
              <div>We'll revise the designs until you're 100% satisfied.</div>
            </div>
          </div>
          <div data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716549" style={{ opacity: 0 }} className="quote">
            <div className="quote__wrapper"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
              loading="lazy" alt="" className="m-b-30" />
              <div>AsYouAre shows that they know the art of subtlety.</div><img
                src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg"
                loading="lazy" alt="" className="m-t-30 webflow" />
            </div><img src="https://assets.website-files.com/5837424ae11409586f837994/6119d9897e15e38d7e0c8bea_52.svg"
              loading="lazy" style={{ opacity: 0 }} data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e771654f" alt=""
              className="image-31" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6297ebf6a202e770d1a0fd48_420.svg"
              loading="lazy" style={{ opacity: 0 }} data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716550" alt="" className="image-32" />
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half white"><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d8b53723f635d94596f7_Group%2046.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="121b54b8-f5ec-f88a-2fb9-18c945b6d464" alt="" className="image-29" /><img
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d8eeae8fa3209c98f7c4_2.svg" loading="lazy"
            style={{ opacity: 0 }} data-w-id="121b54b8-f5ec-f88a-2fb9-18c945b6d465" alt="" className="image-30" /></div>
        <div className="dividing-section__half gray"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d83a539ea14de7db7bac_Group%2022.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="121b54b8-f5ec-f88a-2fb9-18c945b6d467" alt="" className="divider" />
      </div>
      <div className="section gray">
        <div className="container">
          <div data-w-id="f52f6028-4d8a-2d65-4653-0db602e5c4a7" style={{ opacity: 0 }} className="container__800 m-auto hero">
            <h2 className="max-600">It’s “you'll <span className="never">never</span> go back” better</h2>
            <p className="sub-para-24 max-6700">AsYouAre replaces unreliable freelancers and expensive agencies for one flat
              monthly fee, with designs delivered so fast that it will blow your mind.</p>
          </div>
          <div className="w-layout-grid feature-quote__grid">
            <div data-w-id="82287f70-7923-a6b8-fa13-d1170891a12b" style={{ opacity: 0 }} className="feature-quote__quote-block"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
              loading="lazy" alt="" className="m-b-30" />
              <div>Design is everything, and these guys have nailed it.</div>
              <div className="author-wrapper">
                <div className="author-avatar"></div>
                <div className="feature-quote__quote-author">Kevin O'Leary, <span className="text-span">🦈 <strong>Shark
                  Tank</strong></span></div>
              </div>
            </div>
            <div className="feature-quote__feature-block">
              <div data-w-id="6d7355a4-37e6-de1e-eaed-a8870fc6a031" style={{ opacity: 0 }}
                className="feature-quote__feature-ind-block">
                <div className="feature-quote__feature-title m-b-10">Totally async</div>
                <div className="feature-quote__description">Don't like meetings?&nbsp;We don't either; so much so that
                  we've outlawed them completely.</div>
              </div>
              <div data-w-id="16b2d98a-b80a-a7e6-d44b-3b457d00a801" style={{ opacity: 0 }}
                className="feature-quote__feature-ind-block">
                <div className="feature-quote__feature-title m-b-10">Manage with Trello</div>
                <div className="feature-quote__description">Manage your design board using Trello. View active, queued and
                  completed tasks with ease.</div>
              </div>
              <div data-w-id="e37ca2a1-2d40-5727-6fd1-6d3fee7276f3" style={{ opacity: 0 }}
                className="feature-quote__feature-ind-block last-child">
                <div className="feature-quote__feature-title m-b-10">Invite unlimited team members</div>
                <div className="feature-quote__description">Invite your entire team, so anyone can submit requests and track
                  their progress.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half gray"></div>
        <div className="dividing-section__half white"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/611a98b21d362bb696f14734_Frame%2020.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="409eb0c2-8735-eaf6-0ce2-0e88c8ef08d8" alt="" className="divider" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5836e6730ddf0e6962_Group%2047.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="409eb0c2-8735-eaf6-0ce2-0e88c8ef08d9" alt="" className="image-33" />
      </div>
      <div id="benefits" className="section white">
        <div className="container">
          <div className="benefits__title-block">
            <div className="benefits__splash-wrapper">
              <div data-w-id="44020105-95b5-fefc-064f-33c2dd2457ff" style={{ opacity: 0 }} className="container__800 m-auto"><img
                src="https://assets.website-files.com/5837424ae11409586f837994/611a9e387d080fa68df0f888_Group%2048.svg"
                loading="lazy" alt="" className="benefits__icon" />
                <h2>Membership benefits</h2>
                <p className="sub-para-24 max-6700 benefits">Perks so good you'll never need to go anywhere else for your
                  design. Seriously.</p>
                <div className="button__group"><a href="#pricing-3" className="button large w-inline-block">
                  <div>See plans</div>
                </a></div>
              </div>
            </div>
          </div>
          <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b6e8" style={{ opacity: 0 }} className="w-layout-grid benefits__grid">
            <div id="w-node-f8aa1968-ab07-d0f3-28a2-161e8436b6f5-1bf5e5de" className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b6f7" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18be2ab827fa5f5c58af2b_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="4.333333333333333" data-duration="0"></div>
              </div>
              <div className="benefits__title">Design board</div>
              <div className="benefits__description">Add as many design requests to your board as you'd like.</div>
            </div>
            <div className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b6fe" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18bc1d88b6fc3d1fb92ac0_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="4.333333333333333" data-duration="0"></div>
              </div>
              <div className="benefits__title">Lightning fast delivery</div>
              <div className="benefits__description">Get your design one at a time in just a few days on average.</div>
            </div>
            <div className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b705" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18bab9d27bcf493203ea49_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="3.6" data-duration="0"></div>
              </div>
              <div className="benefits__title">Fixed monthly rate</div>
              <div className="benefits__description">No surprises here! Pay the same fixed price each month.</div>
            </div>
            <div className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b70c" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18c7197df12e9d9354f23a_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="4.366666666666666" data-duration="0"></div>
              </div>
              <div className="benefits__title">Top-notch quality</div>
              <div className="benefits__description">Insane design quality at your fingertips whenever you need it.</div>
            </div>
            <div className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b713" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18b68dba9f9e0fb6f1827f_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="4.066666666666666" data-duration="0"></div>
              </div>
              <div className="benefits__title">Flexible and scalable</div>
              <div className="benefits__description">Scale up or down as needed, and pause or cancel at anytime.</div>
            </div>
            <div className="benefits__ind-block">
              <div className="benefits__icon-block">
                <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b71a" data-animation-type="lottie"
                  data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18ae5986ccdc433f0da4c3_data.json"
                  data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                  data-default-duration="6.8" data-duration="0"></div>
              </div>
              <div className="benefits__title">Unique and all yours</div>
              <div className="benefits__description">Each of your designs is made especially for you and is 100% yours.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half white"></div>
        <div className="dividing-section__half gray"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d83a539ea14de7db7bac_Group%2022.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="66261d04-d1ec-a300-6c36-1abbe4886862" alt="" className="divider" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb6a4aa99cf45a3a1068_26.svg" loading="lazy"
          style={{ opacity: 0 }} data-w-id="ec263296-af7d-8b78-87fa-ee07a970817e" alt="" className="image-37" />
      </div>
      <div id="latest" className="section gray">
        <div className="container">
          <div data-w-id="df17470f-a56e-c26f-2a70-b7953abdd13b" style={{ opacity: 0 }} className="recent-work__title-block">
            <h2>Recent work</h2>
            <p className="sub-para-24">Award winning designs, and nothing less.</p>
            <div className="button__group recent-work"><a
              href="https://www.figma.com/proto/noms4VJJeWILgxRQA0EWQp/Senior.-UI%2FUX-Designer-%E2%80%A2-Design-Mentor---Hamza-HAJ-TAIEB?type=design&node-id=701-44229&t=RyRhkI0JrKtS3Bbb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=701%3A44229"
              target="_blank" className="button hero w-inline-block">
              <div>View recent work</div>
            </a></div>
          </div>
          <div className="w-layout-grid latest-projects__grid"><img
            src="https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam.jpg"
            loading="lazy" style={{ opacity: 0 }} data-w-id="4842b25b-1cf5-eef9-a31f-6096121acfbd"
            srcSet="https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam.jpg 1000w"
            sizes="100vw" alt="" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6.jpg"
              loading="lazy" style={{ opacity: 0 }} data-w-id="f41a03e3-96b5-d499-4203-97cfc0fffe77"
              srcSet="https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6.jpg 1000w"
              sizes="100vw" alt="" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg"
              loading="lazy" style={{ opacity: 0 }} data-w-id="5e756ba2-5fbe-cbad-9cf5-6d50f294f5e4"
              srcSet="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg 1001w"
              sizes="100vw" alt="" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam.jpg" alt=""
              style={{ opacity: 0 }} sizes="100vw" data-w-id="4669fb84-43d3-407d-351a-333dc453fdb1"
              id="w-node-_4669fb84-43d3-407d-351a-333dc453fdb1-1bf5e5de" loading="lazy"
              srcSet="https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam-p-500.jpeg 500w, https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam-p-800.jpeg 800w, https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam.jpg 1000w" />
          </div>
          <div data-w-id="83b193b0-1da4-0206-a988-72c0fed31aa5" style={{ opacity: 0 }} className="container__800 m-auto logo">
            <div className="recent-work__logos-title">Designs commonly featured by</div>
            <div className="recent-work__logos-flex"><img
              src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg"
              loading="lazy" alt="" className="recent-work__logo dribbble" /><img
                src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg"
                loading="lazy" alt="" className="recent-work__logo" /><img
                src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg"
                loading="lazy" alt="" className="recent-work__logo awwwards" /><img
                src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg"
                loading="lazy" alt="" className="recent-work__logo ph" /></div>
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half gray"></div>
        <div className="dividing-section__half white"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/611a98b21d362bb696f14734_Frame%2020.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="de2cda64-d33b-f25f-69b3-890f5d7e47ca" alt="" className="divider" />
      </div>
      <div id="sow" className="section white">
        <div className="container">
          <h2 data-w-id="92b7ca35-434c-0477-5ac5-31882ca1bd53" style={{ opacity: 0 }}>Apps, websites, logos &amp; more.</h2>
          <div data-w-id="ae4f00de-7ef9-d071-0cef-1cbc4e98a622" style={{ opacity: 0 }} className="scope__wrapper">
            <div className="w-layout-grid scope__grid">
              <div id="w-node-a476bea0-4d4e-9005-ee25-f88a19146459-1bf5e5de" className="scope__col">
                <div className="scope__item"><div>Websites</div></div>
                <div className="scope__item"><div>Mobile apps</div></div>
                <div className="scope__item"><div>Logos &amp; branding</div></div>
                <div className="scope__item"><div>Design systems</div></div>
                <div className="scope__item"><div>SAAS</div></div>
                <div className="scope__item"><div>Wireframes</div></div>
                <div className="scope__item"><div>Stationery</div></div>
                <div className="scope__item"><div>Pitch decks</div></div>
              </div>
              <div className="scope__col">
                <div className="scope__item"><div>Slide decks</div></div>
                <div className="scope__item"><div>Direct mail</div></div>
                <div className="scope__item"><div>Infographics</div></div>
                <div className="scope__item"><div>Brochures</div></div>
                <div className="scope__item"><div>Signage</div></div>
                <div className="scope__item"><div>Brand guides</div></div>
                <div className="scope__item"><div>Social media graphics</div></div>
                <div className="scope__item"><div>Billboards</div></div>
              </div>
              <div className="scope__col">
                <div className="scope__item"><div>Trade show banners</div></div>
                <div className="scope__item"><div>Email graphics</div></div>
                <div className="scope__item"><div>Resumes</div></div>
                <div className="scope__item"><div>Business cards</div></div>
                <div className="scope__item"><div>Packaging</div></div>
                <div className="scope__item"><div>Blog graphics</div></div>
                <div className="scope__item"><div>Digital ads</div></div>
                <div className="scope__item"><div>Icons</div></div>
              </div>
            </div><img src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5855799436cb408920_23.svg"
              loading="lazy" style={{ opacity: 0 }} data-w-id="b4935d71-c7ee-7651-36e0-1b9e11fa7d82" alt="" className="image-39" />
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half white"></div>
        <div className="dividing-section__half tan"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d6836ada862d90f89116_Divider.svg"
          loading="lazy" style={{ opacity: 0 }} data-w-id="a2a713b2-747a-3521-c62a-cc878ab14dea" alt="" className="divider" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2700a23638c2e486ec_19.svg" loading="lazy"
          style={{ opacity: 0 }} data-w-id="c80497eb-2e9c-f564-5e86-b4ac25aa3487" alt="" className="image-40" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2738300c1fd0d4b4ff_43.svg" loading="lazy"
          style={{ opacity: 0 }} data-w-id="36447cd7-d0cd-27e6-5e9f-0c51d9ae4dd9" alt="" className="image-41" />
      </div>
      <div id="pricing-2" className="section pricing">
        <div className="container">
          <div className="container__800 m-auto hero">
            <h2 className="pricing-header">Memberships levels</h2>
            <p className="sub-para-24">Choose a plan that's right for you.</p><img
              src="https://assets.website-files.com/5837424ae11409586f837994/611abc817f5b796fe72d04e4_Group%2028.svg"
              loading="lazy" alt="" className="pricing__squiggle" />
          </div>
          <div id="pricinggrid" className="w-layout-grid pricing__grid">
            {/* Monthly Plan */}
            <div className="pricing__col">
              <div id="pricing-3" className="pricing__col-top">
                <div className="pricing__col-top-top">
                  <div className="pricing__title">Monthly</div>
                  <div className="pricing__description">No minimum commitment. Pause or cancel anytime.</div>
                </div>
                <div className="pricing__col-top-bottom">
                  <div className="pricing__amount">$5,995/m</div>
                  <div className="pricing__not-included m-t-0">Pause or cancel anytime</div>
                  <div className="button__group pricing">
                    <a target="_blank" href="https://calendly.com/asyouaredesignagency/asyouare-intro"
                      className="button pricing w-inline-block">
                      <div>Get started</div>
                    </a>
                  </div>
                </div>
                <div className="most-popular-tag">
                  <div>MOST&nbsp;POPULAR</div>
                </div><img src="https://assets.website-files.com/5837424ae11409586f837994/611c2385076821ad95ae18bc_45.svg"
                  loading="lazy" alt="" className="image-67" />
              </div>
              <div className="pricing__col-bottom">
                <div className="pricing__col-bottom-bottom">
                  <div className="pricing__included">What's included:</div>
                  <ul role="list" className="pricing__list">
                    <li className="pricing__li"><div>One request at a time</div></li>
                    <li className="pricing__li"><div>Unlimited brands</div></li>
                    <li className="pricing__li"><div>Unlimited users</div></li>
                    <li className="pricing__li"><div>Unlimited stock photos via Shutterstock</div></li>
                    <li className="pricing__li"><div>Easy credit-card payments</div></li>
                    <li className="pricing__li"><div>Pause or cancel anytime</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quarterly Plan */}
            <div className="pricing__col">
              <div className="pricing__col-top normal">
                <div className="pricing__col-top-top">
                  <div className="pricing__title">Quarterly</div>
                  <div className="pricing__description">Save $500 per month.</div>
                </div>
                <div className="pricing__col-top-bottom">
                  <div className="pricing__amount">$5,495/m</div>
                  <div className="pricing__not-included m-t-0">Paid quarterly</div>
                  <div className="button__group pricing">
                    <a target="_blank" href="https://calendly.com/asyouaredesignagency/asyouare-intro"
                      className="button pricing w-inline-block">
                      <div>Get started</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="pricing__col-bottom">
                <div className="pricing__col-bottom-bottom">
                  <div className="pricing__included">What's included:</div>
                  <ul role="list" className="pricing__list">
                    <li className="pricing__li"><div>One request at a time</div></li>
                    <li className="pricing__li"><div>Unlimited brands</div></li>
                    <li className="pricing__li"><div>Unlimited users</div></li>
                    <li className="pricing__li"><div>Unlimited stock photos via Shutterstock</div></li>
                    <li className="pricing__li"><div>Easy credit-card payments</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="pricing__col">
              <div className="pricing__col-top normal">
                <div className="pricing__col-top-top">
                  <div className="pricing__title">Yearly</div>
                  <div className="pricing__description">Save $1,000 per month.</div>
                </div>
                <div className="pricing__col-top-bottom">
                  <div className="pricing__amount">$4,995/m</div>
                  <div className="pricing__not-included m-t-0">Paid annually</div>
                  <div className="button__group pricing">
                    <a target="_blank" href="https://calendly.com/asyouaredesignagency/asyouare-intro"
                      className="button pricing w-inline-block">
                      <div>Get started</div>
                    </a>
                  </div>
                  <div className="book-call-wrapper"></div>
                </div>
              </div>
              <div className="pricing__col-bottom">
                <div className="pricing__col-bottom-bottom">
                  <div className="pricing__included">What's included:</div>
                  <ul role="list" className="pricing__list">
                    <li className="pricing__li"><div>One request at a time</div></li>
                    <li className="pricing__li"><div>Unlimited brands</div></li>
                    <li className="pricing__li"><div>Unlimited users</div></li>
                    <li className="pricing__li"><div>Unlimited stock photos via Shutterstock</div></li>
                    <li className="pricing__li"><div>Easy credit-card payments</div></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Book a Call & Refer */}
            <div className="pricing__right-col">
              <div className="pricing__right-col-top"><img
                src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c32fdaa097c267b19_dFrame.svg"
                loading="lazy" alt="" className="pricing__right-col-img" />
                <div className="pricing__description">Learn more about how Asyouare works and how it can help you.</div>
              </div>
              <div className="pricing__right-col-top bottom"><img
                src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c5e7a2adf4b36ad2c_ddGroup.svg"
                loading="lazy" alt="" className="pricing__right-col-img" />
                <div className="pricing__title small">Refer a friend &amp; earn</div>
                <div className="pricing__description">Earn 5% monthly recurring commissions for each referral.</div>
              </div>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="w-layout-grid grid-2">
            <div id="w-node-_579720a1-9250-87b7-64d3-78773a50fabb-1bf5e5de" className="div-block-14">
              <div>
                <div className="badge-pricing-secondary">
                  <div>Plan</div>
                </div>
                <h2 className="power-ups">Elite Plan</h2>
                <div className="container__800 m-auto hero">
                  <p className="sub-para-24">The ultimate solution for businesses that demand the highest level of service and efficiency.</p>
                  <a target="_blank" href="https://calendly.com/asyouaredesignagency/asyouare-intro" className="cta-button w-inline-block">
                    <div>Get Started</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dividing-section">
        <div className="dividing-section__half tan"></div>
        <div className="dividing-section__half white"></div><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d6836ada862d90f89116_Divider.svg"
          loading="lazy" alt="" className="divider" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297ec2ebcb979c203dd1714_60.svg" loading="lazy"
          alt="" className="image-40 _4" /><img
          src="https://assets.website-files.com/5837424ae11409586f837994/6297ed366f3e626f630528ee_61.svg" loading="lazy"
          alt="" className="image-41 _2" />
      </div>
      <div id="faq" className="section white p-t-150">
        <div className="container">
          <h2>FAQs</h2>
          <div className="faq__list-wrapper">
            <FAQItem
              question="Why wouldn't I just hire a full-time designer?"
              answer="Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. <br /><br />With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them."
            />
            <FAQItem
              question="Is there a limit to how many requests I can have?"
              answer="Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
            />
            <FAQItem
              question="How fast will I receive my designs?"
              answer="On average, most requests are completed in just two days or less. However, more complex requests can take longer."
            />
            <FAQItem
              question="Who are the designers?"
              answer="You might be surprised to hear this, but Asyouare is actually an agency of one. This means you'll work directly with me, founder of Asyouare. However, power-ups requests such as animations or custom illustrations are provided by partner designers."
            />
            <FAQItem
              question="How does the pause feature work?"
              answer="We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.<br /><br />Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
            />
            <FAQItem
              question="What programs do you design in?"
              answer="Most requests are designed using Figma."
            />
            <FAQItem
              question="How do I request designs?"
              answer="Asyouare offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
            />
            <FAQItem
              question="What if I don't like the design?"
              answer="No worries! We'll continue to revise the design until you're 100% satisfied."
            />
            <FAQItem
              question="What if I only have a single request?"
              answer="That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
            />
            <FAQItem
              question="Are there any refunds if I don't like the service?"
              answer="Due to the high quality nature of the work, there will be no refunds issued."
            />
          </div>
        </div>
      </div>
      <div className="section footer">
        <div className="container">
          <div className="container__800 m-auto hero">
            <h2>See if Asyouare is right for you. (It totally is.)</h2>
            <p className="sub-para-24">Get a guided tour through Asyouare, and find out how you and your team can change the
              way you source design, forever.</p><a href="#pricing-3" className="cta-button w-inline-block">
              <div>Get started</div>
            </a>
          </div>
          <div className="logos"><img
            src="https://assets.website-files.com/5837424ae11409586f837994/61424c5418f01be24c52b682_Frame%2051.svg"
            loading="lazy" alt="" className="footer__logo lang" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6165e962d62dea1088533161_Dark%20Logo%20SVG.svg"
              loading="lazy" alt="" className="footer__logo soundstripe white" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg"
              loading="lazy" alt="" className="footer__logo nectar" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg"
              loading="lazy" alt="" className="footer__logo" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/61424c54ffa9064f6650375b_Group%2015.svg"
              loading="lazy" alt="" className="footer__logo soundstripe" /><img
              src="https://assets.website-files.com/5837424ae11409586f837994/611b2dc537b655a389aaf3d7_5e1c980f4b6c084724851ee1_cometchat%201%201.svg"
              loading="lazy" alt="" className="footer__logo" />
          </div>
          <div className="bottom">
            <div className="footer__left-col"><a href="/" aria-current="page"
              className="footer__bottom-logo w-inline-block w--current"><img src="/assets/logo/asyouare_logo_white.svg"
                loading="lazy" alt="" /></a>
              <div className="div-block-3"><img
                src="https://assets.website-files.com/5837424ae11409586f837994/611d718c63e40202e8a17cd3_Frame.svg"
                loading="lazy" alt="" className="az" />
                <div className="footer__head">Made with love,<br /> Hamza HAJ TAIEB</div>
              </div>
            </div>
            <div className="footer__right-col">
              <div className="footer__link-col-left"><a href="#latest" className="footer__link">Latest projects</a><a
                href="#pricing-3" className="footer__link">Pricing</a><a
                  href="mailto:asyouaredesignagency@gmail.com?subject=AsYouAre%20Inquiry" className="footer__link">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SEOContent />
    </main>
  );
}
