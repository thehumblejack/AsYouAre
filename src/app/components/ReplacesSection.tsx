import Image from 'next/image';

export default function ReplacesSection() {
    return (
        <div className="section gray">
            <div className="container">
                <div className="container__800 m-auto hero">
                    <h2 className="max-600">It's "you'll <span className="never">never</span> go back" better</h2>
                    <p className="sub-para-24 max-6700">AsYouAre replaces unreliable freelancers and expensive agencies for one flat
                        monthly fee, with designs delivered so fast that it will blow your mind.</p>
                </div>
                <div className="w-layout-grid feature-quote__grid">
                    <div className="feature-quote__quote-block">
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
                            width={40}
                            height={40}
                            loading="lazy"
                            alt="Quotation"
                            className="m-b-30"
                        />
                        <div>Design is everything, and these guys have nailed it.</div>
                        <div className="author-wrapper">
                            <div className="author-avatar"></div>
                            <div className="feature-quote__quote-author">Kevin O'Leary, <span className="text-span">🦈 <strong>Shark
                                Tank</strong></span></div>
                        </div>
                    </div>
                    <div className="feature-quote__feature-block">
                        <div className="feature-quote__feature-ind-block">
                            <div className="feature-quote__feature-title m-b-10">Totally async</div>
                            <div className="feature-quote__description">Don't like meetings? We don't either; so much so that
                                we've outlawed them completely.</div>
                        </div>
                        <div className="feature-quote__feature-ind-block">
                            <div className="feature-quote__feature-title m-b-10">Manage with Trello</div>
                            <div className="feature-quote__description">Manage your design board using Trello. View active, queued and
                                completed tasks with ease.</div>
                        </div>
                        <div className="feature-quote__feature-ind-block last-child">
                            <div className="feature-quote__feature-title m-b-10">Invite unlimited team members</div>
                            <div className="feature-quote__description">Invite your entire team, so anyone can submit requests and track
                                their progress.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
