import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export function Features() {
    return (
        <div id="features">
            <section>
                <main className="section-main">
                    <div className="content-wrapper content-spacing">
                        <h2 className="text-center">Unlimited Streamers</h2>
                        <ul className="section-list">
                            <li>
                                Add <strong>unlimited streamers</strong> to
                                streamers list and Twester will watch them* and
                                harvest channel points for you.
                            </li>
                            <li>
                                <strong>Streamers tab</strong> to manage
                                streamers list and check their stats (time
                                watched, points harvested, is online/offline,
                                twester watching).
                            </li>
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
                        className="section-screenshot"
                        src="../images/twester_streamers_tab.png"
                        alt="Twester streamers tab screenshot"
                        placeholder="blurred"
                    />
                </aside>
            </section>

            <section>
                <main className="section-main">
                    <div className="content-wrapper content-spacing">
                        <h2 className="text-center">Minimal Dashboard</h2>
                        <ul className="section-list">
                            <li>
                                <strong>Minimal and Intuitive UI</strong>. Start
                                and pause Twester will a click of a button.
                            </li>
                            <li>
                                <strong>Event logs</strong> about all the things
                                you need to know. Example, when a streamer goes
                                offline or online, when channel points are
                                earned, when Twester starts or stops watching a
                                livestream and more.
                            </li>
                        </ul>
                    </div>
                </main>

                <aside className="content-wrapper content-spacing">
                    <StaticImage
                        className="section-screenshot"
                        src="../images/twester_home_tab.png"
                        alt="Twester home tab screenshot"
                        placeholder="blurred"
                    />
                </aside>
            </section>
            <section>
                <main className="section-main">
                    <div className="content-wrapper content-spacing">
                        <h2 className="text-center">
                            Features to come in future
                        </h2>
                        <ul className="section-list">
                            <li>
                                <strong>Predictions</strong> - Twester will make
                                predictions based on your preferences.
                            </li>
                            <li>
                                <strong>Analytics</strong> - Visual
                                representation of channel points earned for a
                                streamer.
                            </li>
                        </ul>
                    </div>
                </main>
            </section>
        </div>
    );
}
