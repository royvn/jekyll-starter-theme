import { getStaticProps } from "../pages/blog";

export default function Intro (props) {
  return(
    <div className="bg-green-500">
      <div className="container mx-auto px-6 lg:px-16">
        <div className={`grid grid-cols-12 md:gap-6 min-h-screen-3/4 text-white items-end md:items-center`}>
          <div className={`col-span-12 md:col-span-8 lg:col-span-6 py-12`}>
            {props.title && 
              <h1 className={``}>
                {props.title}
              </h1>
            }
            {props.paragraph &&
              <p className={`text-base`}>
                {props.paragraph}
              </p>
            }
            {/* {((props.primary_link_to && props.primary_link_text) || (props.secondary_link_to && props.secondary_link_text)) &&
              <div className={`block space-x-4 mx-auto`}>

                {(props.primary_link_to && props.primary_link_text) &&
                  <Link href={props.primary_link_to}>
                    <a className={`inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-white text-black hover:bg-black hover:text-white`}>
                      {props.primary_link_text}
                    </a>
                  </Link>
                }

                {(props.secondary_link_to && props.secondary_link_text) &&
                  <Link href={props.secondary_link_to}>
                    <a className={`inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-transparent text-white hover:bg-black hover:text-white`}>
                      {props.secondary_link_text}
                    </a>
                  </Link>
                }

              </div> 
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}