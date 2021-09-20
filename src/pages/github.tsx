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
                latestVersion,
                windowsCount,
                linuxCount,
                appleCount,
                totalCount,
                windowsLink,
                linuxLink,
                appleLink,
            });
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Github</h1>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
    );
}

export default Github;
