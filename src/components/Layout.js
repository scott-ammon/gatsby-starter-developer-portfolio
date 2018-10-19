import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from './Navbar';
import Footer from './Footer';
import { createGlobalStyle } from 'styled-components';

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            name
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <Navbar location={location} name={data.site.siteMetadata.name}/>
          <GlobalStyle />
          <div>
            {children}
          </div>
          <Footer name={data.site.siteMetadata.name}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,400');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400');
  html {
    height: 100%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    position: relative;
    margin: 0;
    padding-top: 0;
    padding-bottom: 15rem;
    min-height: 100%;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 400;
  }
  h1, h2 {
    color: #2C5364;
  }
  p, li, a, label {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
  .container {
    margin: 0 auto;
    padding-top: 6rem;
    width: 80vw;
  }
  @media (max-width: 550px) {
    .container {
      margin: 0 auto;
      width: 90vw;
    }
  }
`;