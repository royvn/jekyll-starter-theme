import Image from 'next/image';

function Outro(props) {
  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className={`grid grid-cols-12 gap-6 items-end md:items-center`}>
        <div className="col-span-12 md:col-span-5 py-12">
          <div className="">
            
            {props.subtitle && 
              <p className="text-xs uppercase tracking-widest opacity-50 mb-3">
                {props.subtitle}
              </p>
            }

            {props.title && 
              <h2 className="text-4xl font-bold mb-4">
                { props.title }
              </h2>
            }

            {props.paragraph && 
              <p className={`text-base mb-4`}>
                {props.paragraph}
              </p>
            }

            {(props.link_to && props.link_text) || (props.button_href && props.button_text) &&
              <div className={``}>

                {props.link_to && props.link_text &&
                  <Link href={props.link_to} className="inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-white text-black hover:bg-black hover:text-white">
                    <a>
                      {props.link_text}
                    </a>
                  </Link>
                }
  
                {props.button_href && props.button_text &&
                  <a href={props.button_href} rel="noopener noreferrer" className="inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-white text-black hover:bg-black hover:text-white">
                    {props.button_text}
                  </a>
                }

              </div>
            }

          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-12 gap-6 items-end md:items-center">
            <div className="col-span-6">
              {props.image_1 &&
                <Image 
                  src={props.image_1} 
                  alt=""
                  width={1000}
                  height={1500}
                   />
              }
            </div>
            <div className="col-span-6">
              {props.image_2 &&
                <Image 
                  src={props.image_2} 
                  alt=""
                  width={1000}
                  height={1500}
                   />
              }
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Outro;