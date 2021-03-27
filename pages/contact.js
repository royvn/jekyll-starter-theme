import Head from 'next/head';
import Layout from '../components/Layout';
import ListSocial from '../components/ListSocial';

export default function Contact () {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <section className="section section--margin">
        <div className="container page-spacer">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
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
        </div>
      </section>
    </Layout>
  );
}