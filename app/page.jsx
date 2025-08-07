import styles from "@/app/page.module.css";

export default function Home() {
  const time = Date.now();
  return (
    <>
      <div>
        <h1>You've been watching this website for:</h1>
        <div className={styles.timer}>
          <h1>{Date.now() - time}</h1>
        </div>
      </div>
    </>
  );
}
