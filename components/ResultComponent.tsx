import { useState } from "react";
import styles from "./ResultComponent.module.css";

const ResultComponent = () => {
  const [resp, setResp] = useState(null);

  return (
    <>
      <div className={styles.display}>
        <input placeholder="https://google.fr" />
        <button>Click me</button>
      </div>
      {resp && <div>resp</div>}
    </>
  );
};

export default ResultComponent;
