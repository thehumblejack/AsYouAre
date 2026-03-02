import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease"
                role="banner" className="navbar w-nav">
                <div className="container nav">
                    <div>
                        <Link href="/" aria-current="page" className="nav__logo w-nav-brand w--current">
                            <Image
                                src="/assets/logo/asyouare_logo.svg"
                                loading="eager"
                                width={150}
                                height={30}
                                unoptimized
                                alt="AsYouAre Logo"
                                style={{ height: 'auto' }}
                            />
                        </Link>
                    </div>
                    <div>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <Link
                                href="https://www.figma.com/proto/noms4VJJeWILgxRQA0EWQp/Senior.-Product--Design-Engineer---Hamza-HAJ-TAIEB?page-id=1294%3A39016&node-id=1294-39018&p=f&t=rLuSAMZt83bygbda-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1294%3A39018&hide-ui=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav__link w-nav-link">
                                Latest projects
                            </Link>
                            <Link href="#pricing-3" className="nav__link w-nav-link">Pricing</Link>
                            <Link href="#faq" className="nav__link w-nav-link">FAQs</Link>
                        </nav>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-nav">
                <Link href="/" aria-current="page" className="link-block-2 w-inline-block w--current">
                    <Image
                        src="/assets/logo/asyouare_logo.svg"
                        loading="eager"
                        width={150}
                        height={30}
                        unoptimized
                        alt="AsYouAre Logo"
                        style={{ height: 'auto' }}
                    />
                </Link>
            </div>
        </>
    );
}
