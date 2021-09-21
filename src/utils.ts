type Platform = 'web' | 'ios' | 'android';
export type OS = 'Windows' | 'Linux' | 'macOS';

function getPlatform(): Platform {
    const userAgent =
        typeof navigator === 'undefined' || typeof window === 'undefined'
            ? ''
            : navigator.userAgent ||
              navigator.vendor ||
              (window as any).opera ||
              '';

    if (/android/i.test(userAgent)) return 'android';

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
        return 'ios';

    return 'web';
}

export function getOSName(): OS {
    const os = getPlatform();

    // On mobile we will default to `windows`
    if (os === 'ios' || os === 'android') return 'Windows';

    const platform =
        typeof navigator === 'undefined'
            ? ''
            : `${navigator.platform || ''}`.toLowerCase().trim();

    if (platform.startsWith('mac')) return 'macOS';
    if (platform.startsWith('linux')) return 'Linux';
    if (platform.startsWith('win')) return 'Windows';

    return 'Windows';
}
