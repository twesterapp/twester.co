import * as React from 'react';

import { Header, Layout } from '../components';
import { Hero, Features } from '../sections';

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

export function IndexPage({ location }: IndexPageProps) {
    return (
        <Layout location={location}>
            <Header />
            <Hero />
            <Features />
        </Layout>
    );
}

export default IndexPage;
