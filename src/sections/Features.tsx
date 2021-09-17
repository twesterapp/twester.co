import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const featureMain = `bg-primary pt-3 pb-6 md:pt-6 md:pb-12 mt-12 mb-6 md:mt-24 md:mb-12`;
const featureList = `mt-3 list-disc list-inside text-sm md:text-base`;
const featureScreenshot = `border border-primary drop-shadow-screenshot`;

export function Features() {
    return (
        <div id="features">
            <section>
                <main className={featureMain}>
                    <div className="content-spacing">
                        <h2 className="text-center">Unlimited Streamers</h2>
                        <ul className={featureList}>
                            <li>
                                Add as many streamers you want and Twester will
                                watch streamers* that are live and harvest
                                channel points for you.
                            </li>
                            <li>Streamer card with their stats.</li>
                        </ul>
                        <p className="mt-3 text-xs">
                            * Twitch allows max 2 livestreams to be watched at a
                            time. Twester will pick the highest priority
                            streamers to be watched.
                        </p>
                    </div>
                </main>

                <aside className="content-wrapper content-spacing">
                    <StaticImage
                        className={featureScreenshot}
                        src="../images/twester_streamers_tab.png"
                        alt="Twester streamers tab screenshot"
                        placeholder="blurred"
                    />
                </aside>
            </section>

            <section>
                <main className={featureMain}>
                    <div className="content-spacing">
                        <h2 className="text-center">Minimal Dashboard</h2>
                        <ul className={featureList}>
                            <li>
                                Click a button to play/pause Twester’s Watcher
                            </li>
                            <li>
                                Minimal Twester’s stats about how long it
                                watched Twitch and how many points it earned.
                            </li>
                            <li>
                                Event logs about all the things you need to
                                know. Like when a streamer goes offline or
                                online, when channel points are earned, when
                                Twester starts or stops watching a livestream
                                and more.
                            </li>
                        </ul>
                    </div>
                </main>

                <aside className="content-wrapper content-spacing">
                    <StaticImage
                        className={featureScreenshot}
                        src="../images/twester_home_tab.png"
                        alt="Twester home tab screenshot"
                        placeholder="blurred"
                    />
                </aside>
            </section>
            <section>
                <main className={featureMain}>
                    <div className="content-spacing">
                        <h2 className="text-center">Features in Future</h2>
                        <ul className={featureList}>
                            <li>
                                Predictions - Twester will make predictions
                                based on your preferences.
                            </li>
                            <li>
                                Analytics - Visual representation of channel
                                points earned for a streamer.
                            </li>
                        </ul>
                    </div>
                </main>
            </section>
        </div>
    );
}
