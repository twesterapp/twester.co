import React from 'react';
import { DownloadButton } from '../components';
import { Button, IconGithub } from '../ui';

export function Download() {
    return (
        <section id="download">
            <main className="section-main bg-secondary mb-0">
                <div className="content-wrapper content-spacing">
                    <h2 className="text-center text-alter">Download</h2>
                    <p className="text-center text-alter mt-2">
                        Twester is developed out in the open on our GitHub page.
                        You can join the discussion, request for features,
                        report issues or just check the source code there!
                    </p>
                    <div className="flex flex-col sm:justify-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 md:space-x-8 mt-6 sm:mt-9">
                        <DownloadButton os="windows" variant="secondary" />
                        <DownloadButton os="linux" variant="secondary" />
                        <DownloadButton os="macos" variant="secondary" />
                        <a
                            href="https://github.com/twesterapp/twester"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                icon={IconGithub}
                                variant="secondary"
                                className="w-full"
                            >
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </main>
        </section>
    );
}
