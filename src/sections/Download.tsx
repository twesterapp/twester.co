import React from 'react';
import { Button, IconApple, IconGithub, IconLinux, IconWindows } from '../ui';

export function Download() {
    return (
        <section id="download">
            <main className="section-main bg-secondary mb-0">
                <div className="content-wrapper content-spacing">
                    <h2 className="text-center text-alter">Download</h2>
                    <p className="text-center text-alter mt-2">
                        Twester is developed out in the open on our GitHub page.
                        You can report issues, request features, ask questions
                        or just check the source code there!
                    </p>
                    <div className="flex flex-col sm:justify-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 md:space-x-8 mt-6 sm:mt-9">
                        <Button icon={IconWindows} variant="secondary">
                            Windows
                        </Button>
                        <Button icon={IconLinux} variant="secondary">
                            Linux
                        </Button>
                        <Button icon={IconApple} variant="secondary">
                            macOS
                        </Button>
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
