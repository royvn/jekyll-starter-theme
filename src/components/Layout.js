import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Notice from "./Notice";
import Header from "./Header";
import Footer from "./Footer";
import TabBar from "./TabBar";

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main" id="content">
        {children}
      </main>
      <Footer />
      <TabBar />
      <Notice title="Nieuw op blog: Verbeter de weergave van je productinformatie in Shopify" link="/blog/verbeter-de-weergave-van-je-productinformatie-in-shopify/" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;