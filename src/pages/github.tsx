import React from 'react';
import {
    getAllTimeDownloadCount,
    getDownloadCount,
    getDownloadLink,
    getLatestReleaseVersion,
} from '../github';

function Github() {
    const [data, setData] = React.useState<any>();

    React.useEffect(() => {
        const fetchData = async () => {
            const latestVersion = await getLatestReleaseVersion();
            const windowsCount = await getDownloadCount('Windows');
            const linuxCount = await getDownloadCount('Linux');
            const appleCount = await getDownloadCount('macOS');
            const totalCount = await getAllTimeDownloadCount();
            const windowsLink = await getDownloadLink('Windows');
            const linuxLink = await getDownloadLink('Linux');
            const appleLink = await getDownloadLink('macOS');

            setData({
                latest_release_version: latestVersion,
                download_count: {
                    latest_release: {
                        windows: windowsCount,
                        linux: linuxCount,
                        macos: appleCount,
                    },
                    all_time_total: totalCount,
                },
                download_link: {
                    latest_release: {
                        windows: windowsLink,
                        linux: linuxLink,
                        macos: appleLink,
                    },
                },
            });
        };

        fetchData();
    }, []);

    return (
        <div className="content-wrapper content-spacing h-screen flex flex-col items-center">
            <h1 className="py-4">GitHub Releases Stats</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default Github;
