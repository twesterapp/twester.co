import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Button, IconWindows } from '../ui';
import { Link } from 'gatsby';

export function Hero() {
    return (
        <section
            role="hero"
            className="mt-4 sm:mt-16 flex flex-col lg:flex-row items-center"
        >
            <main
                style={{ maxWidth: '472px' }}
                className="text-center flex flex-col items-center lg:mr-9"
            >
                <h1 className="text-secondary">
                    Twitch channel points without watching Twitch!
                </h1>
                <p className="mt-3">
                    Twester watches Twitch and harvest channel points for you!
                    <br />
                    Free & Open Source 🎉
                </p>
                <Button icon={IconWindows} className="mt-12">
                    Download for Windows
                </Button>
                <Link to="/#download" className="text-primary mt-3">
                    other platforms
                </Link>
            </main>
            <aside>
                <StaticImage
                    style={{ maxWidth: '722px' }}
                    className="border border-primary drop-shadow-screenshot mt-9 lg:mt-0"
                    src="../images/twester_home_tab.png"
                    alt="Twester home tab screenshot"
                    placeholder="blurred"
                />
            </aside>
        </section>
    );
}
