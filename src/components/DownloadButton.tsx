import React from 'react';

import { Button, IconWindows, IconLinux, IconApple, ButtonProps } from '../ui';
import { OS } from '../utils';

interface Props extends ButtonProps {
    os: OS;
    addPrefix?: boolean;
}

export function DownloadButton({ os, addPrefix = false, ...rest }: Props) {
    const Icon =
        os === 'macos' ? IconApple : os === 'linux' ? IconLinux : IconWindows;
    const osName =
        os === 'macos' ? 'macOS' : os === 'linux' ? 'Linux' : 'Windows';
    let buttonText = '';

    if (addPrefix) {
        buttonText += 'Download for ';
    }

    buttonText += osName;

    return (
        <Button icon={Icon} {...rest}>
            {buttonText}
        </Button>
    );
}
