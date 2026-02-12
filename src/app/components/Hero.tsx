import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div id="hero" className="section hero" style={{ position: 'relative' }}>
                <div className="container">
                    <div className="container__800 m-auto hero">
                        <h1>A design agency with a twist</h1>
                        <p className="sub-para-24">Design subscriptions to scale your business.</p>
                        <div className="button__group">
                            <Link href="#pricinggrid" className="button hero w-inline-block">
                                <div>See plans</div>
                            </Link>
                        </div>
                        <div className="guarantee">
                            <div>Designs you'll</div>
                            <Image
                                src="https://assets.website-files.com/5837424ae11409586f837994/61195da63e9b07d94bbaa046_heart.svg"
                                width={24}
                                height={24}
                                alt="Heart"
                                className="guarnatee__heart"
                                style={{ width: 'auto', height: 'auto', display: 'inline-block' }}
                            />
                            <div>, guaranteed</div>
                        </div>
                    </div>
                </div>

                {/* Optimized Decor Elements - Priority LCP */}
                <Image
                    src="https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg"
                    width={400}
                    height={400}
                    priority
                    unoptimized
                    alt="Decorative Background 1"
                    className="image-43"
                    style={{ height: 'auto' }}
                />
                <Image
                    src="https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg"
                    width={400}
                    height={400}
                    priority
                    unoptimized
                    alt="Decorative Background 2"
                    className="image-44"
                    style={{ height: 'auto' }}
                />
            </div>

            <div className="div-block-2">
                <div className="container">
                    <Image
                        src="https://assets.website-files.com/5837424ae11409586f837994/61250d3dea79031fe9f7246a_Frame.svg"
                        width={130}
                        height={100}
                        unoptimized
                        alt="Browser Frame"
                        className="image-71"
                        style={{ height: 'auto' }}
                    />
                </div>

                <div className="hero-images-slider">
                    {[
                        "https://assets.website-files.com/5837424ae11409586f837994/6297f8641bf65f0e3b836ada_Kam.jpg",
                        "https://assets.website-files.com/5837424ae11409586f837994/6297f75e7e5a7c30fd40bd17_Kam.jpg",
                        "https://assets.website-files.com/5837424ae11409586f837994/6297f8d36f3e6226d4056674_Kam.jpg",
                        "https://assets.website-files.com/5837424ae11409586f837994/61251d9bf5146e048343e5cf_Kam-3.jpg",
                        "https://assets.website-files.com/5837424ae11409586f837994/61251da595067590415ca231_Kam-4.jpg"
                    ].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            width={1000}
                            height={600}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, 1000px"
                            alt={`App Screenshot ${index + 1}`}
                            className="image-68"
                        />
                    ))}
                </div>

                <div className="container logo">
                    <div className="logos hero hidden">
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/61424b89af08bc0dda064aad_Frame%2051.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo lang"
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/6165e962d62dea1088533161_Dark%20Logo%20SVG.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo soundstripe"
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e1c9822a7d3a238e9408487_flipreach%201.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo flip"
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/61424c141e3dc1c309714ab0_Group%2015.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo soundstripe"
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/5e1c980f4b6c084724851ee1_cometchat%201.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo"
                        />
                        <Image
                            src="https://assets.website-files.com/5837424ae11409586f837994/612032a68276a420485f9d07_5e1c97ff4b6c08205c851ec2_failory%201%20(1)%201.svg"
                            width={120} height={40} alt="Client Logo" className="footer__logo last-child"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
