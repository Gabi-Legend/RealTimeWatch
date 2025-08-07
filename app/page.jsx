"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Home() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>You've been watching this website for:</h1>
      <div className={styles.timer}>
        <h1>{Math.floor(elapsed / 1000)} seconds</h1>
      </div>
    </div>
  );
}
