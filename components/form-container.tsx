import React from "react";
import styles from "./form-container.module.css";

const WebGiComponent: React.FC = () => {
  return (
    <section className={styles.formContainer}>
      {/* Embed the first scene as a background using an iframe */}
      <iframe
        src="http://localhost:5174"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Adjust height if necessary
          border: "none",
          zIndex: 1, // Send iframe to the background
        }}
      />
      
      {/* Embed the second scene below the first scene using an iframe */}
      <iframe
        src="http://localhost:5174"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%", // Adjust height if necessary
          border: "none",
          zIndex: -2, // Send iframe to the background
        }}
      />

      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.logo64Parent}>
            <img
              className={styles.logo64Icon}
              loading="lazy"
              alt=""
              src="/logo64.svg"
            />
            <a className={styles.logoipsum}>logoipsum</a>
          </div>
          <h1 className={styles.benvenutoNel}>Benvenuto nel</h1>
          <h1 className={styles.tuoEventoInterattivo}>TUO EVENTO INTERATTIVO</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.vectorIcon}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <a href="https://demo-climatic.netlify.app" target="_blank" rel="noopener noreferrer">
                  <img
                    className={styles.iniziaIcon}
                    loading="lazy"
                    alt=""
                    src="/inizia.svg"
                  />
                </a>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebGiComponent;
