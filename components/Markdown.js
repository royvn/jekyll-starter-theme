import styles from './Markdown.module.scss';

export default function markdown (props) {
  return(
    <div>
      {props.content && 
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }} />
      }
    </div>
  );
}