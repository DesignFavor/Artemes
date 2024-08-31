import React, { useState, useEffect } from "react";
import Night from "./night";
import styles from "./frame-component3.module.css";

// Define the type for webgi controls
interface WebGIControls {
    changeEnvironment: (mode: string) => Promise<void>;
}

export type FrameComponent3Type = {
    className?: string;
};

const FrameComponent3: React.FC<FrameComponent3Type> = ({ className = "" }) => {
    const [mode, setMode] = useState("day");

    useEffect(() => {
        const setupViewer = async () => {
            const { ViewerApp, addBasePlugins, FileTransferPlugin } = await import('webgi');
            // Ensure the canvas element exists
            const canvas = document.getElementById('webgi-canvas') as HTMLCanvasElement;
            if (!canvas) {
                console.error('Canvas element not found');
                return;
            }

            // Initialize the viewer with type assertion
            const viewer = new ViewerApp({ canvas }) as any; // Use 'any' if types are incompatible

            try {
                await addBasePlugins(viewer);
                await viewer.addPlugin(FileTransferPlugin);
                await viewer.load("./assets/scene2.glb");

                // Set default environment map
                await viewer.setEnvironmentMap("./assets/day.hdr");

                // Add a method to change the environment map
                window.webgiControls = {
                    changeEnvironment: async (mode: string) => {
                        let hdrFile = "";
                        switch (mode) {
                            case "day":
                                hdrFile = "./assets/day.hdr";
                                break;
                            case "night":
                                hdrFile = "./assets/night.hdr";
                                break;
                            case "warm":
                                hdrFile = "./assets/sunset.hdr";
                                break;
                            default:
                                hdrFile = "./assets/day.hdr"; // default fallback
                        }
                        console.log(`Attempting to load HDRI: ${hdrFile}`); // Debugging line

                        try {
                            await viewer.setEnvironmentMap(hdrFile);
                            console.log(`Successfully loaded HDRI: ${hdrFile}`); // Debugging line
                        } catch (error) {
                            console.error(`Error loading HDRI: ${hdrFile}`, error); // Debugging line
                        }
                    },
                } as WebGIControls; // Type assertion for webgiControls
            } catch (error) {
                console.error("Error setting up WebGI viewer:", error);
            }
        };

        setupViewer();

        // Ensure that webgiControls is initialized
        const checkWebgiControls = () => {
            if (!window.webgiControls) {
                console.error("webgiControls is not defined.");
            }
        };

        // Check if the iframe content is fully loaded before accessing webgiControls
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.onload = checkWebgiControls;
        } else {
            checkWebgiControls();
        }
    }, []);

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
        if (window.webgiControls) {
            console.log(`Changing to mode: ${newMode}`);
            window.webgiControls.changeEnvironment(newMode);
        } else {
            console.error("webgiControls is not available.");
        }
    };

    return (
        <section className={[styles.climaticInner, className].join(" ")}>
            <canvas id="webgi-canvas" style={{ width: "100%", height: "100vh", position: "absolute" }} />
            <div className={styles.comeLavoriamoParent}>
                <h1 className={styles.comeLavoriamo}>Come lavoriamo</h1>
                <div className={styles.dayNightSelectorWrapper}>
                    <div className={styles.dayNightSelector}>
                        <div className={styles.themeSelection}>
                            <img className={styles.bgIcon} alt="" src="/bg.svg" />
                            <div className={styles.selectorOptions}>
                                <div className={styles.chooseOption}>
                                    <h2 className={styles.choose}>Choose</h2>
                                </div>
                                <div className={styles.themeOptions}>
                                    <div
                                        className={`${styles.day} ${mode === "day" ? styles.active : ""}`}
                                        onClick={() => handleModeChange("day")}
                                    >
                                        <img
                                            className={styles.vectorIcon}
                                            loading="lazy"
                                            alt=""
                                            src="/vector-2.svg"
                                        />
                                        <div className={styles.dayLabelContainerWrapper}>
                                            <div className={styles.dayLabelContainer}>
                                                <img
                                                    className={styles.dayIcon}
                                                    loading="lazy"
                                                    alt=""
                                                    src="/day.svg"
                                                />
                                                <img
                                                    className={styles.vectorIcon1}
                                                    loading="lazy"
                                                    alt=""
                                                    src="/vector-3.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Night Component as Button */}
                                    <div onClick={() => handleModeChange("night")}>
                                        <Night />
                                    </div>
                                    <div
                                        className={`${styles.warmbt} ${mode === "warm" ? styles.active : ""}`}
                                        onClick={() => handleModeChange("warm")}
                                    >
                                        <img
                                            className={styles.vectorIcon2}
                                            loading="lazy"
                                            alt=""
                                            src="/vector-6.svg"
                                        />
                                        <img
                                            className={styles.warmIcon}
                                            loading="lazy"
                                            alt=""
                                            src="/warm.svg"
                                        />
                                        <div className={styles.vectorWrapper}>
                                            <img
                                                className={styles.vectorIcon3}
                                                alt=""
                                                src="/vector-7.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.themeSelectionInner}>
                                <div className={styles.inziaParent}>
                                    <div className={styles.inzia}>INZIA</div>
                                    <div className={styles.vectorParent}>
                                        <img
                                            className={styles.vectorIcon4}
                                            alt=""
                                            src="/vector.svg"
                                        />
                                        <img
                                            className={styles.frameIcon}
                                            loading="lazy"
                                            alt=""
                                            src="/frame-1@2x.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dayNightSelectorInner}>
                            <img
                                className={styles.frameChild}
                                loading="lazy"
                                alt=""
                                src="/rectangle-17.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent3;
