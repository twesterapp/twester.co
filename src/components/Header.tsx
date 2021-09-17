import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { IconClose, IconMenu, IconExtLink } from '../ui';
import { useWindowSize } from '../hooks';

export function Header() {
    const [isMenuOpen, setMenuOpen] = React.useState(false);
    const size = useWindowSize();

    const closeMenu = () => {
        if (isMenuOpen) {
            setMenuOpen(false);
        }
    };

    const openMenu = () => {
        if (!isMenuOpen) {
            setMenuOpen(true);
        }
    };

    // Close the menu if the window width increases and go above `sm` breakpoint
    React.useEffect(() => {
        // 640px is `sm` breakpoint
        if (size.width && size.width > 640) {
            setMenuOpen(false);
        }
    }, [size.width]);

    return (
        <div className="flex justify-between items-center mt-2 sm:mt-3">
            <Link to="/">
                <StaticImage
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    src="../images/logo_transparent.png"
                    alt="Twester logo"
                    placeholder="blurred"
                />
            </Link>

            {!isMenuOpen && (
                <button onClick={openMenu}>
                    <IconMenu size={32} className="sm:hidden" />
                </button>
            )}

            <ul
                className={`${
                    !isMenuOpen && 'hidden'
                } fixed w-screen h-screen top-0 left-0 text-xl flex flex-col gap-y-4
                justify-center items-center bg-background2 sm:static sm:text-base
                sm:bg-transparent sm:w-max sm:h-auto sm:flex sm:flex-row sm:gap-x-5`}
            >
                {isMenuOpen && (
                    <button
                        onClick={closeMenu}
                        className="fixed top-2 right-2.5"
                    >
                        <IconClose size={36} className="sm:hidden" />
                    </button>
                )}

                <li className={linkHoverStyle} onClick={closeMenu}>
                    <Link to="/#features">Features</Link>
                </li>
                <li className={linkHoverStyle} onClick={closeMenu}>
                    <Link to="/#how-it-works">How it works?</Link>
                </li>
                <li className={linkHoverStyle} onClick={closeMenu}>
                    <Link to="/#downloads">Download</Link>
                </li>
                <li className={linkHoverStyle} onClick={closeMenu}>
                    <a
                        href="https://github.com/twesterapp/twester"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center"
                    >
                        GitHub
                        <IconExtLink className="ml-1" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

const linkHoverStyle = `hover:text-primary`;
