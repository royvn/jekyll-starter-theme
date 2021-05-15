import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import { getAllPosts } from '../lib/api';
import ListLatestPosts from '../components/ListLatestPosts';

export default function Info ({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>Info</title>
      </Head>
      <Intro title="Info"/>
      <div className="relative z-30 container mx-auto px-6 lg:px-16">
        <div className={`grid grid-cols-12 md:gap-6 relative z-10 min-h-screen-3/4 md:min-h-screen`}>
          <div className={`col-span-12 md:col-span-6 py-12`}>
            <p>Hello world</p>
            <h2>Info</h2>
            <p>
              Korte samenvatting
            </p>
            <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className="inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-black text-white hover:bg-gray-700 hover:text-white">
              Bekijk Linkedin
            </a>
          </div>
          <div className={`col-span-12 md:col-span-6 py-12`}>
            <p>
              Hoi, ik ben <b>Roy van Neden</b>. Petrolhead, front-end developer, digital designer en meer uit Leidschendam woonachtig in Den Haag.
            </p>
            <p>
              Met plezier besteed ik het meeste van mijn tijd aan het realiseren van digitale tools en shops.
            </p>
            <p>
              In 2015 behaalde ik mijn Bachelor Communication & Multimedia Design aan de Haagse Hogeschool. De jaren daarna ben ik bij vele uiteenlopende projecten betrokken geweest. Van concept tot realisatie. Ik vind het leuk om in teamverband te werken en iteratief een product steeds verder uit te bouwen. Structuur en kwaliteit vind ik daarbij belangrijk om het onderhoud en verder uitbouwen tot iets groots mogelijk te maken.
            </p>
            <blockquote>
              If we want users to like our software we should design it to behave like a likeable person: respectful, generous and helpful.
            </blockquote>
            <p>
              Alan Cooper
            </p>
            {/* <Banner image={data.image1.childImageSharp.fluid}/> */}
            <h2>
              Vaardigheden
            </h2>
            <p>
              UX, UI, Sketch, HTML, SCSS, Javascript, Git, NPM, Yarn, Grunt, Gulp, Webpack, Twig, Liquid, Shopify, OctoberCMS, WordPress, Statamic, Jekyll.
            </p>
            {/* <Img fluid={data.image3.childImageSharp.fluid} alt="Vaardigheden" style={{maxWidth: 320}} /> */}
            <h2>
              Workflow
            </h2>
            <p>
              Het fijnst en snelst werk ik met macOS, Sketch of Figma, Visual studio code, Git en Google Gallery.
            </p>
            <h2>
              Werkervaring
            </h2>
            <h3>
              Front-end developer
            </h3>
            <p>
              CODE - a Shopify Plus agency <br />
              Okt. 2019 - heden <br />
              Delft
            </p>
            <h3>
              Front-end developer & designer
            </h3>
            <p>
              Pluut Interaction B.V.  <br />
              Feb. 2015 – sep. 2019  <br />
              Lisse
            </p>
            <h3>
              Afstudeerder
            </h3>
            <p>
              Pluut Interaction  <br />
              Aug. 2014 – jan. 2015  <br />
              Wateringen
            </p>
            <h3>
              Front-end developer & webdesigner
            </h3>
            <p>
              Pluut Interaction  <br />
              Jun. 2014 – aug. 2014  <br />
              Wateringen
            </p>
            <h3>
              Stagiair vormgeving & front-end
            </h3>
            <p>
              PDC Informatie Architectuur B.V.  <br />
              Februari 2013 – juli 2013  <br />
              Den Haag
            </p>
            <h3>
              Student Communicatie & Multimedia design (CMD)
            </h3>
            <p>
              De Haagse Hogeschool  <br />
              2010 – 2015  <br />
              Den Haag
            </p>
            <p>
            Voor meer info verwijs ik je graag door naar mijn <a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer">Linkedin</a>.
            </p>
            <h2>
              Overig
            </h2>
            <p>
              In mijn vrije tijd loop ik graag met mijn parttime hond door de natuur. Klussen, sportief en competitief bezig zijn vind ik ook leuk. Zo ben ik altijd in voor een ⛷ en 🏎 sessie. Op koude regenachtige dagen slinger ik ook graag een goede game 🎮 aan.
            </p>
            <h2>
              Meer lezen?
            </h2>
            <p>
              Je bent aan het einde van deze pagina gekomen. Maar er is meer. Bekijk mijn recent geplaatste artikelen.
            </p>
            <ListLatestPosts posts={allPosts} />
            <p>
              <Link href="/blog/">
                <a className="inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-black text-white hover:bg-black hover:text-white">
                  Bekijk blog
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title'
  ]);
  return {
    props: { allPosts },
  }
}