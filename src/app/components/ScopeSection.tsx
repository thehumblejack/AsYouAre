import Image from 'next/image';

export default function ScopeSection() {
    return (
        <div id="sow" className="section white">
            <div className="container">
                <h2>Apps, websites, logos &amp; more.</h2>
                <div className="scope__wrapper">
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
                    </div>
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5855799436cb408920_23.svg"
                        width={200}
                        height={200}
                        loading="lazy"
                        alt="Scope Illustration"
                        className="image-39"
                        style={{ height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
}
