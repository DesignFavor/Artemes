import type { NextPage } from "next";
import FormContainer from "../components/form-container";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import GroupComponent from "../components/group-component";
import styles from "./index.module.css";
import BackgroundModel from "../components/BackgroundModel";

const Climatic: NextPage = () => {
  return (
    <div className={styles.climatic}>
      <FormContainer />
      <FrameComponent3 />
      <FrameComponent4 />
      <GroupComponent />
    </div>
  );
};

export default Climatic;
