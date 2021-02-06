import React from "react";
import { graphql, StaticQuery } from "gatsby";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import ListSocial from "../components/ListSocial";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Wil je iets vragen of met mij in contact komen? Hier lees je hoe." />
    <section className="section">
      {/* <div className="container page-spacer"> */}
        <div className="double-layout">
          <div className="double-layout__left">
            <header>
              <h1>
                Stuur een <a href="mailto:roy.van.neden@gmail.com">mail</a>. Of maak een connectie via <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">Linkedin</a>.
              </h1>
            </header>
            <article className="markdown">
              <h2 className="h5">
                Locatie
              </h2>
              <p>
                Aarde, Nederland, Zuid Holland, Den Haag.
              </p>
              <a href="https://www.google.com/maps/place/Den+Haag/@52.0716335,4.2398286,12z/data=!3m1!4b1!4m5!3m4!1s0x47c5b72f4298bd71:0x400de5a8d1e6c10!8m2!3d52.0704978!4d4.3006999" target="_blank" rel="noopener">
                Bekijk op kaart
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg> */}
              </a>
              <h2 className="h5">
                Links
              </h2>
              <p>
                Hier en daar op het internet.
              </p>

              <ListSocial />

            </article>


          </div>
        </div>
      {/* </div> */}
    </section>
  </Layout>
);

export default ContactPage;