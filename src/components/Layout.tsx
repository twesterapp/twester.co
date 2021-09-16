import React, { ReactNode } from 'react';

import { SEO } from '../components/SEO';

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
