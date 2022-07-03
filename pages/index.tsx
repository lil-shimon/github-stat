import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { API_URL } from "../utils";

const Home: NextPage = () => {

    useEffect(() => {
        const USER_URL = `${API_URL}/users/lil-shimon`;
        fetch(USER_URL)
            .then(res => res.json())
            .then(data => console.log(data))
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
