import React from "react";
import { graphql, StaticQuery } from "gatsby";

import SEO from "../components/Seo";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Laat iets van je horen, gezellig en leuk!" />
    <div className="section">
      <div className="container page-spacer">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="markdown">
              <h1>
                Contact
              </h1>
              <p>
                Wil je iets vragen of met mij in contact komen? Laat iets van je horen! Stuur gerust een berichtje op <a href="https://www.linkedin.com/in/roy-van-neden-10549761/">Linkedin</a>! Direct mailen kan ook naar roy.van.neden@gmail.com.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className="button button--primary">
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;