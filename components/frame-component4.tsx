import type { NextPage } from "next";
import React from "react";
import FrameComponent2 from "./frame-component2";
import styles from "./frame-component4.module.css";
import background from "../public/theatre.png"
import desk from "../public/"
import Image from "next/image";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.contactContainerWrapper, className].join(" ")}>
      <Image  src={background} className={styles.bgs3}/>
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerInner}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>100-200</div>
          </div>
        </div>
        <div className={styles.scegliLaTuaCameraParent}>
          <h1 className={styles.scegliLaTua}>Scegli la tua camera</h1>
          <h1 className={styles.scegliLaTua1}>Scegli la tua camera</h1>
        </div>
        <div className={styles.contactContainerChild}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/group-1171277436.svg"
          />
        </div>
        <div className={styles.cameraHeader}>
          <div className={styles.unionElements}>
            <div className={styles.unionParent}>
              <img
                className={styles.unionIcon}
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <b className={styles.emptyUnion}>100</b>
            </div>
            <div className={styles.unionParent}>
              <img
                className={styles.unionIcon}
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <b className={styles.b}>200</b>
              
            </div>
          </div>
          
        </div>
        
        <FrameComponent2 />
      </div>
    </section>
  );
};

export default FrameComponent4;
