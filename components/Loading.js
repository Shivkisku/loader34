// components/Loading.js

import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>
    </div>
  );
};

export default Loading;
