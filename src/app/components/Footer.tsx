import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="section footer">
            <div className="container">
                <div className="container__800 m-auto hero">
                    <h2>See if Asyouare is right for you. (It totally is.)</h2>
                    <p className="sub-para-24">Get a guided tour through Asyouare, and find out how you and your team can change the
                        way you source design, forever.</p>
                    <Link href="#pricing-3" className="cta-button w-inline-block">
                        <div>Get started</div>
                    </Link>
                </div>
                <div className="logos">
                    {[
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/61424c5418f01be24c52b682_Frame%2051.svg", className: "lang" },
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/6165e962d62dea1088533161_Dark%20Logo%20SVG.svg", className: "soundstripe white" },
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg", className: "nectar" },
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg", className: "" },
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/61424c54ffa9064f6650375b_Group%2015.svg", className: "soundstripe" },
                        { src: "https://assets.website-files.com/5837424ae11409586f837994/611b2dc537b655a389aaf3d7_5e1c980f4b6c084724851ee1_cometchat%201%201.svg", className: "" },
                    ].map((logo, i) => (
                        <Image
                            key={i}
                            src={logo.src}
                            width={120}
                            height={40}
                            loading="lazy"
                            unoptimized
                            alt="Client Logo"
                            className={`footer__logo ${logo.className}`}
                            style={{ width: 'auto' }}
                        />
                    ))}
                </div>
                <div className="bottom">
                    <div className="footer__left-col">
                        <Link href="/" aria-current="page" className="footer__bottom-logo w-inline-block w--current">
                            <Image
                                src="/assets/logo/asyouare_logo_white.svg"
                                loading="lazy"
                                width={150}
                                height={30}
                                unoptimized
                                alt="AsYouAre White Logo"
                                style={{ width: 'auto' }}
                            />
                        </Link>
                        <div className="div-block-3">
                        </div>
                    </div>
                    <div className="footer__right-col">
                        <div className="footer__link-col-left">
                            <Link href="#latest" className="footer__link">Latest projects</Link>
                            <Link href="#pricing-3" className="footer__link">Pricing</Link>
                            <a href="mailto:asyouaredesignagency@gmail.com?subject=AsYouAre%20Inquiry" className="footer__link">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
