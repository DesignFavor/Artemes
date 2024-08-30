import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img
            className={styles.logo64Icon}
            loading="lazy"
            alt=""
            src="/logo64.svg"
          />
          <b className={styles.logoipsum}>logoipsum</b>
        </div>
      </div>
      <div className={styles.copyrights2024}>
        Copyrights © 2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default GroupComponent;
