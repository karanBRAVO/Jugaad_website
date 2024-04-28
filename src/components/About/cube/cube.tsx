import styles from './styles.module.css'
// import Link from 'next/link';
const Cubemodel=()=>{
    return(
        <div className={styles.cubeloader}>
            <div className={styles.cube}>
              <div className={`${styles.side} ${styles.top}`}></div>
              <div className={`${styles.side} ${styles.bottom}`}></div>
              <div className={`${styles.side} ${styles.right}`}></div>
              <div className={`${styles.side} ${styles.left}`}></div>
              <div className={`${styles.side} ${styles.front}`}></div>
              <div className={`${styles.side} ${styles.back}`}></div>
            </div>
        </div>
    )
}

export default Cubemodel;