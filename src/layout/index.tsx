import React, { ReactChild } from 'react'

import Head from '../components/Head'

interface ILayoutProps {
  children: ReactChild
  location: {
    pathname: string
  }
}

export default ({ children, location }: ILayoutProps) => {
  return (
    <div>
      <Head pathname={location.pathname} />
      {children}
    </div>
  )
}
