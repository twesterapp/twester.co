import React from 'react';
import { Button, IconApple, IconGithub, IconLinux, IconWindows } from '../ui';
import { GITHUB_REPO_LINK } from '../constants';
import { getDownloadLink, getLatestReleaseVersion } from '../github';

interface DownloadLinks {
    windows: string;
    linux: string;
    macos: string;
}

const initial: DownloadLinks = {
    windows: '',
    linux: '',
    macos: '',
};

export function Download() {
    const [fetchingLinks, setFetchingLnks] = React.useState(true);
    const [links, setLinks] = React.useState<DownloadLinks>(initial);
    const [version, setVersion] = React.useState('');

    React.useEffect(() => {
        const fetchLinks = async () => {
            const windows = await getDownloadLink('Windows');
            const linux = await getDownloadLink('Linux');
            const macos = await getDownloadLink('macOS');
            const version = await getLatestReleaseVersion();

            setLinks({
                windows,
                linux,
                macos,
            });

            setVersion(version);
            setFetchingLnks(false);
        };

        fetchLinks();
    }, []);

    if (fetchingLinks) {
        return null;
    }

    return (
        <section id="download">
            <main className="section-main bg-secondary mb-0">
                <div className="content-wrapper content-spacing">
                    <h2 className="text-center text-alter">Download</h2>
                    {version && (
                        <p className="text-sm text-center text-alter">
                            Latest version: {version}
                        </p>
                    )}
                    <p className="text-center text-alter mt-2">
                        Twester is developed out in the open on our GitHub page.
                        You can report issues, request features, ask questions
                        or just check the source code there!
                    </p>
                    <div className="flex flex-col sm:justify-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 md:space-x-8 mt-6 sm:mt-9">
                        <Button
                            className="w-full sm:w-min"
                            icon={IconWindows}
                            variant="secondary"
                            href={links.windows}
                        >
                            Windows
                        </Button>
                        <Button
                            className="w-full sm:w-min"
                            icon={IconLinux}
                            variant="secondary"
                            href={links.linux}
                        >
                            Linux
                        </Button>
                        <Button
                            className="w-full sm:w-min"
                            icon={IconApple}
                            variant="secondary"
                            href={links.macos}
                        >
                            macOS
                        </Button>
                        <Button
                            className="w-full sm:w-min"
                            icon={IconGithub}
                            variant="secondary"
                            href={GITHUB_REPO_LINK}
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    );
}
