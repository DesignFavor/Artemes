import type { NextPage } from "next";
import styles from "./night.module.css";

export type NightType = {
  className?: string;
};

const Night: NextPage<NightType> = ({ className = "" }) => {
  return (
    <div className={[styles.night, className].join(" ")}>
      <img
        className={styles.vectorIcon}
        loading="lazy"
        alt=""
        src="/vector-4.svg"
      />
      <img
        className={styles.nightIcon}
        loading="lazy"
        alt=""
        src="/night.svg"
      />
      <div className={styles.vectorWrapper}>
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
    </div>
  );
};

export default Night;
