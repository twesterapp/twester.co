import React from 'react';
import { Button, IconApple, IconGithub, IconLinux, IconWindows } from '../ui';
import {
    GITHUB_LINK,
    WINDOWS_LINK,
    LINUX_LINK,
    MACOS_LINK,
} from '../constants';

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
                        <Button
                            className="w-full"
                            icon={IconWindows}
                            variant="secondary"
                            href={WINDOWS_LINK}
                        >
                            Windows
                        </Button>
                        <Button
                            className="w-full"
                            icon={IconLinux}
                            variant="secondary"
                            href={LINUX_LINK}
                        >
                            Linux
                        </Button>
                        <Button
                            className="w-full"
                            icon={IconApple}
                            variant="secondary"
                            href={MACOS_LINK}
                        >
                            macOS
                        </Button>
                        <Button
                            className="w-full"
                            icon={IconGithub}
                            variant="secondary"
                            href={GITHUB_LINK}
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    );
}
