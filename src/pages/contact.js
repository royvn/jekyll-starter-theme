import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ToolkitHeadline from "../components/ToolkitHeadline"
const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Laat iets van je horen, gezellig en leuk!" />
    <div className="page-content content">
      <ToolkitHeadline title="Contact" subtitle="Laat iets van je horen, gezellig en leuk!" />
      <p>
        Wil je iets vragen of met mij in contact komen? Stuur gerust een berichtje op <a href="https://www.linkedin.com/in/roy-van-neden-10549761/">Linkedin</a>! Direct mailen kan ook naar roy.van.neden@gmail.com.
      </p>
    </div>
  </Layout>
);

export default ContactPage;