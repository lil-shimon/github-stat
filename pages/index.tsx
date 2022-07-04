import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { UserProfileComponent } from "../components/organisms/user_profile";
import { useUserStat } from "../hooks/useUserStat";

const Home: NextPage = () => {

    const { userStat } = useUserStat()
    return (
        <div className={styles.container}>
            <Head>
                <title>Github Stat</title>
            </Head>

            <main className={styles.main}>
                <p>{userStat.name}</p>
                {userStat.name && userStat.avatar_url &&
                    <UserProfileComponent name={userStat.name} avatarUrl={userStat.avatar_url}/>}
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
