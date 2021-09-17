import React, { ReactNode } from 'react';

import { SEO } from '../components/SEO';

if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

interface ILayoutProps {
    children: ReactNode;
    location: {
        pathname: string;
    };
}

export function Layout({ children, location }: ILayoutProps) {
    return (
        <>
            <SEO pathname={location.pathname} />
            {children}
        </>
    );
}
