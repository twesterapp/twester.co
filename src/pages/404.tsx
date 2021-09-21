import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';

interface IndexPageProps {
    location: {
        pathname: string;
    };
}

export function NotFound({ location }: IndexPageProps) {
    return (
        <Layout location={location}>
            <section className="h-screen flex items-center justify-center">
                <main className="text-center">
                    <h1 className="font-poppins py-4">Ooops! - 404</h1>
                    <p>
                        Looks like you are lost. This page could not be found.
                    </p>
                </main>
            </section>
        </Layout>
    );
}

export default NotFound;

export const NotFoundQuery = graphql`
    query NotFoundPageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
