import * as React from 'react';

import { Header, Layout } from '../components';

import { GatsbyImageFluidProps } from 'gatsby-image';

interface IndexPageProps {
    location: {
        pathname: string;
    };
    data: {
        image: {
            childImageSharp: GatsbyImageFluidProps;
        };
        site: {
            siteMetadata: {
                title: string;
                description: string;
            };
        };
    };
}

export function IndexPage({ location }: IndexPageProps) {
    return (
        <Layout location={location}>
            <Header />
        </Layout>
    );
}

export default IndexPage;
