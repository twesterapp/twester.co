import React from 'react';

export function HowItWorks() {
    return (
        <section id="how-it-works">
            <main className="section-main bg-background">
                <div className="content-wrapper content-spacing">
                    <h2 className="text-center">How it works?</h2>
                    <ul className="section-list">
                        <li>
                            Twitch rewards channel points for a lot of{' '}
                            <a
                                className="text-primary hover:underline"
                                href="https://help.twitch.tv/s/article/channel-points-guide?language=en_US#viewers"
                            >
                                reasons
                            </a>
                            . Twester earns channel points by mainly “watching”
                            a streamer.
                        </li>
                        <li>
                            Twester earns channel points for the following
                            <ul className="section-list mt-0 ml-4 sm:ml-6">
                                <li>Watching</li>
                                <li>
                                    Active watching (bonus redeemed by click)
                                </li>
                                <li>Watch streaks</li>
                                <li>Participating in a Raid</li>
                            </ul>
                        </li>
                        <li>
                            Twitch allows users to watch and get channel points
                            for maximum of 2 streamers at a time. That’s why
                            Twester asks you to keep the streamers on Streamers
                            tab sorted(top to bottom) based on priority. Twester
                            picks the 2 streamers from the list with highest
                            priority that are online and “watches” their
                            livestream.
                        </li>
                        <li>
                            To “watch” a livestream, Twester sends a “minute
                            watched event” request to Twitch’s API for that
                            livestream. Twitch uses that request to know which
                            user has watched a livestream for a minute. After
                            several of these requests, Twitch rewards the user
                            with channel points.
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
}
