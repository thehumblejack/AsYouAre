import Image from 'next/image';

const logos = [
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f3dd4d61aae_612032a68276a420485f9d07_5e1c97ff4b6c08205c851ec2_failory%201%20(1)%201%201.svg", alt: "Failory" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f95a6d61ab0_Group%201.svg", alt: "Client Logo" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f1141d61aaf_6165e962d62dea1088533161_Dark%20Logo%20SVG%201.svg", alt: "Client Logo" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg", alt: "Client Logo" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg", alt: "Nectar" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/620318d678b163b6891e6684_Frame.svg", alt: "Domatron", className: "domatron" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7ffb52d61aad_61424b89af08bc0dda064aad_Frame%2051%201.svg", alt: "Client Logo" },
    { src: "https://assets.website-files.com/5837424ae11409586f837994/6203171c4b8b7f102ad61aab_5e1c980f4b6c084724851ee1_cometchat%201%201.svg", alt: "CometChat" }
];

export default function LogosMarquee() {
    return (
        <div className="marquee__wrapper">
            <div className="marquee__inner">
                {/* First Loop */}
                <div className="marquee__element">
                    {logos.map((logo, index) => (
                        <div key={`l1-${index}`} className={`marquee__logo ${logo.className || ''}`}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={50}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

                {/* Second Loop (Duplicate for seamless scroll) */}
                <div className="marquee__element">
                    {logos.map((logo, index) => (
                        <div key={`l2-${index}`} className={`marquee__logo ${logo.className || ''}`}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={50}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
