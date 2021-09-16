import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout/index'

import { GatsbyImageFluidProps } from 'gatsby-image'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: GatsbyImageFluidProps
    }
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
        <h1 className="text-lg text-red font-bold text-3xl font-poppins">
          {site.siteMetadata.title}
        </h1>
        <p className="font-karla">{site.siteMetadata.description}</p>
      </div>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
