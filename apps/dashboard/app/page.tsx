import Link from "next/link";
import { Button } from "@repo/ui/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Button appName="web" className={styles.secondary}>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </main>

    </div>
  );
}
