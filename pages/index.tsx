import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { API_URL } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUserStat, userStatSelector } from "../slicers/userStatSlice";
import { UserProfileComponent } from "../components/organisms/user_profile";

const Home: NextPage = () => {

    const dispatch = useDispatch()
    const userStat = useSelector(userStatSelector)
    console.log('userStat', userStat)

    useEffect(() => {
        const USER_URL = `${API_URL}/users/lil-shimon`;
        fetch(USER_URL)
            .then(res => res.json())
            .then(data => dispatch(setUserStat(data)))
    }, [])

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
