/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Notice from "./Notice";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="wrapper">
      <a href="#content" className="sr-only">Skip to content</a>
      <Notice title="Lees mijn laatste blog over CSS variabelen en preprocessor variabelen" link="/blog/css-variabelen-en-preprocessor-variabelen/" button_text="Nu lezen"/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main" id="content">
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;