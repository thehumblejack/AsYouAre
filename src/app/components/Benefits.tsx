import Image from 'next/image';

export default function Benefits() {
    return (
        <div id="benefits" className="section white">
            <div className="container">
                <div className="benefits__title-block">
                    <div className="benefits__splash-wrapper">
                        <div className="container__800 m-auto">
                            <Image
                                src="https://assets.website-files.com/5837424ae11409586f837994/611a9e387d080fa68df0f888_Group%2048.svg"
                                width={80}
                                height={80}
                                loading="lazy"
                                alt="Benefits Icon"
                                className="benefits__icon"
                                style={{ height: 'auto' }}
                            />
                            <h2>Membership benefits</h2>
                            <p className="sub-para-24 max-6700 benefits">Perks so good you'll never need to go anywhere else for your design. Seriously.</p>
                            <div className="button__group">
                                <a href="#pricing-3" className="button large w-inline-block">
                                    <div>See plans</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-grid benefits__grid">
                    <div id="w-node-f8aa1968-ab07-d0f3-28a2-161e8436b6f5-1bf5e5de" className="benefits__ind-block">
                        <div className="benefits__icon-block">
                            <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b6f7" data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18be2ab827fa5f5c58af2b_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="2.1666666666666665" data-duration="0"></div>
                        </div>
                        <div className="benefits__title">Design board</div>
                        <div className="benefits__description">Add as many design requests to your board as you'd like.</div>
                    </div>
                    <div className="benefits__ind-block">
                        <div className="benefits__icon-block">
                            <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b6fe" data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18be138ca7975878201a2e_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="4.6" data-duration="0"></div>
                        </div>
                        <div className="benefits__title">Lightning fast delivery</div>
                        <div className="benefits__description">Get your design one at a time in just a few days on average.</div>
                    </div>
                    <div className="benefits__ind-block">
                        <div className="benefits__icon-block">
                            <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b705" data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18be1989cff286eb9f3152_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="1.7666666666666666" data-duration="0"></div>
                        </div>
                        <div className="benefits__title">Fixed monthly rate</div>
                        <div className="benefits__description">No surprises here! Pay the same fixed price each month.</div>
                    </div>
                    <div className="benefits__ind-block">
                        <div className="benefits__icon-block">
                            <div data-w-id="f8aa1968-ab07-d0f3-28a2-161e8436b70c" data-animation-type="lottie"
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18bdfab827fad03f58af29_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="4.066666666666666" data-duration="0"></div>
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
                                data-src="https://assets.website-files.com/5837424ae11409586f837994/5e18be1e46935a835cf71ae4_data.json"
                                data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg"
                                data-default-duration="2" data-duration="0"></div>
                        </div>
                        <div className="benefits__title">Unique and all yours</div>
                        <div className="benefits__description">Each of your designs is made especially for you and is 100% yours.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
