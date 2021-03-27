import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './hero.module.scss';

export default function Hero (props) {
  return (
    <div className={`${styles.wrapper} ${styles.wrapperDarkMode}`}>
      <span>
        {props.image}
      </span> 
      {props.image &&
        <Image 
          src={props.image}
          alt={props.image_alt}
          layout="fill"
          objectFit="cover"
          quality={75} />
      }
      <div className="container page-spacer">
        <div className="row text-center">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            {props.subtitle &&
              <p className={`subtitle`}>
                {props.subtitle}
              </p>
            }
            {props.title &&
              <h1 className={styles.title}>
                {props.title}
              </h1>
            }
            {props.paragraph && 
              <p className="rte rte--lg">
                {props.paragraph}
              </p>
            }

            {((props.primary_link_to && props.primary_link_text) && (props.secondary_link_to && props.secondary_link_text)) &&
              <div className={`buttons ${styles.buttons}`}>
                {(props.primary_link_to && props.primary_link_text) &&
                  <Link href={props.primary_link_to} className="button">
                    <a>
                      {props.primary_link_text}
                    </a>
                  </Link>
                }
                {(props.secondary_link_to && props.secondary_link_text) &&
                  <Link href={props.secondary_link_to} className="button button--secondary">
                    <a>
                      {props.secondary_link_text}
                    </a>
                  </Link>
                }
              </div> 
            }

            {/* <button type="button" className={styles.mouse} onClick={handleMouseClick}>
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