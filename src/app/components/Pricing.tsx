import Image from 'next/image';

export default function PricingSection() {
    return (
        <div id="pricing-2" className="section pricing">
            <div className="container">
                <div className="container__800 m-auto hero">
                    <h2 className="pricing-header">Memberships levels</h2>
                    <p className="sub-para-24">Choose a plan that's right for you.</p>
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/611abc817f5b796fe72d04e4_Group%2028.svg"
                        width={100}
                        height={20}
                        loading="lazy"
                        alt="Squiggle"
                        className="pricing__squiggle"
                        style={{ height: 'auto' }}
                    />
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
                                        rel="noopener noreferrer"
                                        className="button pricing w-inline-block">
                                        <div>Get started</div>
                                    </a>
                                </div>
                            </div>
                            <div className="most-popular-tag">
                                <div>MOST&nbsp;POPULAR</div>
                            </div>
                            <Image
                                src="https://assets.website-files.com/5837424ae11409586f837994/611c2385076821ad95ae18bc_45.svg"
                                width={60}
                                height={60}
                                loading="lazy"
                                alt="Illustration"
                                className="image-67"
                                style={{ height: 'auto' }}
                            />
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
                                        rel="noopener noreferrer"
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
                                        rel="noopener noreferrer"
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
                        <div className="pricing__right-col-top">
                            <Image
                                src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c32fdaa097c267b19_dFrame.svg"
                                width={80}
                                height={80}
                                loading="lazy"
                                alt="Illustration"
                                className="pricing__right-col-img"
                                style={{ height: 'auto' }}
                            />
                            <div className="pricing__description">Learn more about how Asyouare works and how it can help you.</div>
                        </div>
                        <div className="pricing__right-col-top bottom">
                            <Image
                                src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c5e7a2adf4b36ad2c_ddGroup.svg"
                                width={80}
                                height={80}
                                loading="lazy"
                                alt="Illustration"
                                className="pricing__right-col-img"
                                style={{ height: 'auto' }}
                            />
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
                                <a target="_blank" href="https://calendly.com/asyouaredesignagency/asyouare-intro" rel="noopener noreferrer" className="cta-button w-inline-block">
                                    <div>Get Started</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
