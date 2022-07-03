import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { API_URL } from "../utils";

const Home: NextPage = () => {

    useEffect(() => {
        console.log("api", API_URL)
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Github Stat</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Github Stat
                </h1>

                <p className={styles.description}>
                </p>

                <div className={styles.grid}>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
