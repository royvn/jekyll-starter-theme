import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>
      Wil je iets vragen of met mij in contact komen? Stuur gerust een berichtje op <a href="https://www.linkedin.com/in/roy-van-neden-10549761/">Linkedin</a> dan laat ik z.s.m. iets horen! Direct mailen kan ook naar roy.van.neden@gmail.com.
    </p>
  </Layout>
);

export default ContactPage;