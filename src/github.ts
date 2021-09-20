import {
    GITHUB_API_BASE_URI,
    GITHUB_ORG_NAME,
    GITHUB_REPO_NAME,
} from './constants';
import { OS } from './utils';

interface ReleaseAsset {
    browser_download_url: string;
    download_count: number;
    name: string;
}

interface Release {
    assets: ReleaseAsset[];
    name: string;
    tag_name: string;
}

import axios from 'axios';

const client = axios.create({ baseURL: GITHUB_API_BASE_URI });

function getReleaseUri(tag?: string) {
    let url = `/repos/${GITHUB_ORG_NAME}/${GITHUB_REPO_NAME}/releases`;

    if (tag) {
        url = url + `/tags/${tag}`;
    } else {
        url = url + `/latest`;
    }

    return url;
}

async function fetchRelease(tag?: string): Promise<Release | false> {
    try {
        const res = await client.get(getReleaseUri(tag));
        const data: Release = res.data;
        return data;
    } catch (e) {
        console.error('Failed to fetch release. Error: ', e);
        return false;
    }
}

async function fetchReleases(): Promise<Release[] | false> {
    try {
        const res = await client.get(
            `/repos/${GITHUB_ORG_NAME}/${GITHUB_REPO_NAME}/releases`
        );
        const data: Release[] = res.data;
        return data;
    } catch (e) {
        console.error('Failed to fetch releases. Error: ', e);
        return false;
    }
}

function getAssetExtension(os: OS): string {
    if (os === 'Windows') {
        return '.exe';
    } else if (os === 'Linux') {
        return '.AppImage';
    } else if (os === 'macOS') {
        return '.dmg';
    }
}

// If a `tag` is not provided, we will fetch data for the `latest` release.
export async function getDownloadCount(os: OS, tag?: string) {
    const release = await fetchRelease(tag);

    if (!release) {
        return;
    }

    const assets = release.assets;

    for (const asset of assets) {
        if (asset.name.match(getAssetExtension(os))) {
            return asset.download_count;
        }
    }
}

export async function getDownloadLink(os: OS, tag?: string) {
    const release = await fetchRelease(tag);

    if (!release) {
        return;
    }

    const assets = release.assets;

    for (const asset of assets) {
        if (asset.name.match(getAssetExtension(os))) {
            return asset.browser_download_url;
        }
    }
}

export async function getLatestReleaseVersion() {
    const release = await fetchRelease();

    if (!release) {
        return;
    }

    return release.tag_name;
}

export async function getAllTimeDownloadCount() {
    const releases = await fetchReleases();

    if (!releases) {
        return;
    }

    let count = 0;

    for (const release of releases) {
        const assets = release.assets;

        for (const asset of assets) {
            count += asset.download_count;
        }
    }

    return count;
}
