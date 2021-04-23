import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CallToAction.module.scss';


export default function CallToAction (props) {
  return (
    <div className={`section section--margin container page-spacer`}>
      <div className={` ${styles.wrapper}`}>
        <div className={`${styles.image}`}>
          {props.image &&
            <Image 
              src={props.image}
              alt={props.image_alt}
              layout="fill"
              objectFit="cover"
              quality={75} />
          }
        </div>
        <div className={`${styles.content}`}>
          {props.title &&
            <h2 className={styles.title}>
              {props.title}
            </h2>
          }
          {props.paragraph && 
            <p className="rte rte--md">
              {props.paragraph}
            </p>
          }
          {((props.primary_link_to && props.primary_link_text) || (props.secondary_link_to && props.secondary_link_text)) &&
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
        </div>

      </div>
    </div>
  );
}