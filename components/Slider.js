import Image from 'next/image';
import Link from 'next/link';
import styles from './Slider.module.scss';

export default function Slider(props) {
  return(
    <div>
      Slider component
      {props.slides && 
        <div className={`${styles.slider}`}>
          {props.slides.map((slide)=> (
            <div className={styles.slide}>
              {slide.image && 
                <div className="">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    width={600}
                    height={400} />
                </div>
              }
              <h2>{slide.title}</h2>
            </div>
          ))}
        </div>
      }
      <div></div>
    </div>
  );
}