import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { addDays, format } from "date-fns";

export default function Home() {
  const eventDate = addDays(new Date(), 14);
  return (
    <div className={styles.container}>
      <Head>
        <title>Wackathon</title>
        <meta name="description" content="A 24-hour event for making." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://uwu.boats/important">Wackathon</a>.
        </h1>

        <p className={styles.description}>This is a fake event.</p>

        <p className={styles.datetime}>
          📅 {format(eventDate, "PPP")} • 📍{" "}
          <a
            href="https://goo.gl/maps/xLLYQY7Fb9ZhxJAg8"
            className={styles.link}
          >
            Hack Club HQ
          </a>
        </p>

        <a href="https://hack.af/wp-admin">
          <button className={styles.button}>Register &rarr;</button>
        </a>
        <br />
        <Image
          src="https://cloud-fvcuidd4c-hack-club-bot.vercel.app/0hack_club_assemble_02204.jpg"
          width={1200}
          height={800}
          alt="Hack Club Assemble"
        />
      </article>

      <footer className={styles.footer}>
        <a
          href="https://wackclub.com?utm_source=wackathon&utm_campaign=wackathon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="https://cloud-f2l2q375z-hack-club-bot.vercel.app/0image.png"
              alt="Wack Club Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
