import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span>Hola mundo</span>

        <Link href="/about">About Page</Link>
      </main>
    </div>
  );
}
