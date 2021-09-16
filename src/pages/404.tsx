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
            <div>
                <h1 className="font-poppins">Ooops!</h1>
                <p>Looks like you are lost</p>
            </div>
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
