import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero (props) {
  return (
    <div className={`relative bg-black text-white z-10`}>
      {props.image &&
        <Image 
          src={props.image}
          alt={props.image_alt}
          layout="fill"
          objectFit="cover"
          quality={100} 
          className="relative z-10"/>
      }
      <div className="absolute z-20 inset-y-0 inset-x-0 bg-gradient-to-b from-black opacity-40"></div>
      <div className="relative z-30 container mx-auto px-8 lg:px-16">
        <div className={`grid grid-cols-12 gap-6 relative z-10 min-h-screen items-end md:items-center text-center`}>
          <div className={`col-span-12 md:col-span-8 lg:col-span-6 md:col-start-3 lg:col-start-4 py-12`}>
            {props.title &&
              <h1 className={`block text-6xl md:text-8xl font-bold mb-6 md:mb-12`}>
                {
                  props.title.split(' ').map((word) => (
                    <span className="block">
                      {word}
                    </span>
                  ))
                }
              </h1>
            }
            {props.subtitle &&
              <p className={`text-base`}>
                {props.subtitle}
              </p>
            }
            {props.paragraph && 
              <p className="text-lg">
                {props.paragraph}
              </p>
            }

            {((props.primary_link_to && props.primary_link_text) || (props.secondary_link_to && props.secondary_link_text)) &&
              <div className={`block space-x-4 mx-auto`}>

                {(props.primary_link_to && props.primary_link_text) &&
                  <Link href={props.primary_link_to}>
                    <a className={`inline-block text-center px-6 py-3 md:py-4 text-sm leading-6 font-semibold transition-all rounded-full bg-white text-black hover:bg-black hover:text-white`}>
                      {props.primary_link_text}
                    </a>
                  </Link>
                }

                {(props.secondary_link_to && props.secondary_link_text) &&
                  <Link href={props.secondary_link_to}>
                    <a className={`inline-block text-center px-6 py-3 md:py-4 text-sm leading-6 font-semibold transition-all rounded-full bg-transparent text-white hover:bg-black hover:text-white`}>
                      {props.secondary_link_text}
                    </a>
                  </Link>
                }

              </div> 
            }

            {/* <button type="button" className={``} onClick={handleMouseClick}>
              <span className="sr-only">
                Scroll verder
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}