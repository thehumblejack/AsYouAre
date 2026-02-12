import Image from 'next/image';
import Link from 'next/link';

export default function RecentWork() {
    return (
        <div id="latest" className="section gray">
            <div className="container">
                <div className="recent-work__title-block">
                    <h2>Recent work</h2>
                    <p className="sub-para-24">Award winning designs, and nothing less.</p>
                    <div className="button__group recent-work">
                        <Link
                            href="https://www.figma.com/proto/noms4VJJeWILgxRQA0EWQp/Senior.-UI%2FUX-Designer-%E2%80%A2-Design-Mentor---Hamza-HAJ-TAIEB?type=design&node-id=701-44229&t=RyRhkI0JrKtS3Bbb-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=701%3A44229"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button hero w-inline-block">
                            <div>View recent work</div>
                        </Link>
                    </div>
                </div>
                <div className="w-layout-grid latest-projects__grid">
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam.jpg"
                        loading="lazy"
                        width={1000}
                        height={800}
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, 1000px"
                        alt="Recent Work 1"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6.jpg"
                        loading="lazy"
                        width={1000}
                        height={800}
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, 1000px"
                        alt="Recent Work 2"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg"
                        loading="lazy"
                        width={1000}
                        height={800}
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, 1000px"
                        alt="Recent Work 3"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam.jpg"
                        loading="lazy"
                        width={1000}
                        height={800}
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, 1000px"
                        className="last-child"
                        id="w-node-_4669fb84-43d3-407d-351a-333dc453fdb1-1bf5e5de"
                        alt="Recent Work 4"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="container__800 m-auto logo">
                    <div className="recent-work__logos-title">Designs commonly featured by</div>
                    <div className="recent-work__logos-flex">
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg"
                            loading="lazy"
                            width={120} height={40}
                            unoptimized
                            alt="Dribbble"
                            className="recent-work__logo dribbble"
                            style={{ width: 'auto' }}
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg"
                            loading="lazy"
                            width={120} height={40}
                            unoptimized
                            alt="Lapa"
                            className="recent-work__logo"
                            style={{ width: 'auto' }}
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg"
                            loading="lazy"
                            width={120} height={40}
                            unoptimized
                            alt="Awwwards"
                            className="recent-work__logo awwwards"
                            style={{ width: 'auto' }}
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg"
                            loading="lazy"
                            width={120} height={40}
                            unoptimized
                            alt="Product Hunt"
                            className="recent-work__logo ph"
                            style={{ width: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
