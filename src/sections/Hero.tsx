import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from 'gatsby';
import { getOSName } from '../utils';
import { Button } from '../ui';

import { WINDOWS_LINK, LINUX_LINK, MACOS_LINK } from '../constants';

export function Hero() {
    const os = getOSName();
    const href =
        os === 'Windows'
            ? WINDOWS_LINK
            : os === 'Linux'
            ? LINUX_LINK
            : os === 'macOS'
            ? MACOS_LINK
            : '';

    return (
        <section
            id="hero"
            className="content-wrapper content-spacing mt-4 sm:mt-16 flex flex-col lg:flex-row items-center justify-between lg:space-x-9 space-y-9 lg:space-y-0"
        >
            <main
                style={{ maxWidth: '472px' }}
                className="text-center flex flex-col items-center"
            >
                <h1 className="text-secondary">
                    Twitch channel points without watching Twitch!
                </h1>
                <p className="mt-3">
                    Twester watches Twitch and harvest channel points for you!
                    <br />
                    Free & Open Source 🎉
                </p>
                <Button className="mt-12" href={href}>{`Download for ${
                    os ? os : 'Free'
                }`}</Button>
                <Link
                    to="/#download"
                    className="text-primary mt-3 hover:underline"
                >
                    other platforms
                </Link>
            </main>
            <aside>
                <StaticImage
                    style={{ maxWidth: '722px' }}
                    className="border border-primary drop-shadow-screenshot"
                    src="../images/twester_home_tab.png"
                    alt="Twester home tab screenshot"
                    placeholder="blurred"
                />
            </aside>
        </section>
    );
}
