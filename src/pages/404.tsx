import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout/index'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

export default ({ data, location }: IndexPageProps) => {
  const { site } = data
  return (
    <Layout location={location}>
      <div>
        <h1>{site.siteMetadata.title}</h1>
        <p>{site.siteMetadata.description}</p>
      </div>
    </Layout>
  )
}

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
