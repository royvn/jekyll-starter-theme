import Image from 'next/image';
import styles from './Footer.module.scss';

function Outro(props) {
  return (
    <div className="container page-spacer">
      <div className={` ${styles.row} row`}>
        <div className="col-12 col-lg-5">
          <div className={styles.content}>
            
            {props.subtitle && 
              <p className="subtitle subtitle--primary">
                {props.subtitle}
              </p>
            }

            {props.title && 
              <h2 className="h3">
                { props.title }
              </h2>
            }

            {props.paragraph && 
              <p className={`${styles.paragraph}`}>
                {props.paragraph}
              </p>
            }

            {(props.link_to && props.link_text) || (props.button_href && props.button_text) &&
              <div className={`${styles.buttons} buttons`}>

                {props.link_to && props.link_text &&
                  <Link href={props.link_to} className="button button--primary button--lg">
                    <a>
                      {props.link_text}
                    </a>
                  </Link>
                }
  
                {props.button_href && props.button_text &&
                  <a href={props.button_href} rel="noopener noreferrer" className="button button--primary button--lg">
                    {props.button_text}
                  </a>
                }

              </div>
            }

          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="row">
            <div className="col-6">
              {props.image_1 &&
                <Image 
                  src={props.image_1} 
                  alt=""
                  width={1000}
                  height={1500}
                   />
              }
            </div>
            <div className="col-6">
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