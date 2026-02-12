import Image from 'next/image';

export default function HowItWorks() {
    return (
        <div id="how-it-works" className="section gray">
            <div className="container">
                <div className="container__800 m-auto hero">
                    <div className="button__group m-b-20">
                        <a href="#latest" className="button tag w-inline-block">
                            <div>How it works</div>
                        </a>
                    </div>
                    <h2 className="max-600">We didn't reinvent the wheel, just design</h2>
                    <p className="sub-para-24 max-600">Design as you know it is out the door. Design as you want it just arrived.</p>
                </div>
                <div className="w-layout-grid how-it-works__grid">
                    <div className="div-block-19">
                        <div className="process__icon-block">
                            <div
                                data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e771653c"
                                data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e1767da10a1f51ca4fa361f_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="2.8" data-duration="0"
                            ></div>
                        </div>
                        <div className="_1">Subscribe to a plan &amp; request as many designs as you'd like.</div>
                    </div>
                    <div className="div-block-19">
                        <div className="process__icon-block receive">
                            <div
                                data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716541"
                                data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e177abae85f69bf6f2f813a_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="2.56" data-duration="0"
                            ></div>
                        </div>
                        <div>Receive your design within a few business days on average, Monday to Friday.</div>
                    </div>
                    <div className="div-block-19">
                        <div className="process__icon-block revise">
                            <div
                                data-w-id="01dafc51-fe61-acbf-1a5a-0ce8e7716546"
                                data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e177f46fb9c030823177d84_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="5.2" data-duration="0"
                            ></div>
                        </div>
                        <div>We'll revise the designs until you're 100% satisfied.</div>
                    </div>
                </div>
                <div className="quote">
                    <div className="quote__wrapper">
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
                            width={40}
                            height={40}
                            loading="lazy"
                            alt="Quotation"
                            className="m-b-30"
                        />
                        <div>AsYouAre shows that they know the art of subtlety.</div>
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg"
                            width={120}
                            height={30}
                            loading="lazy"
                            alt="Webflow"
                            className="m-t-30 webflow"
                        />
                    </div>
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/6119d9897e15e38d7e0c8bea_52.svg"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Decorative"
                        className="image-31"
                    />
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/6297ebf6a202e770d1a0fd48_420.svg"
                        width={100}
                        height={100}
                        loading="lazy"
                        alt="Decorative"
                        className="image-32"
                    />
                </div>
            </div>
        </div>
    );
}
