import * as React from 'react';

import { Header, Layout } from '../components';
import { Hero } from '../sections';

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
        </Layout>
    );
}

export default IndexPage;
