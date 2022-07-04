import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { UserProfileComponent } from "../components/organisms/user_profile";
import { useUserStat } from "../hooks/useUserStat";
import { Box, Link } from "@chakra-ui/react";
import NextLink from 'next/link'

const Home: NextPage = () => {

    const { userStat } = useUserStat()
    return (
        <div className={styles.container}>
            <Head>
                <title>Github Stat</title>
            </Head>

            <main className={styles.main}>
                <Box display={'flex'}>
                    {userStat.name && userStat.avatar_url &&
                        <UserProfileComponent name={userStat.name} avatarUrl={userStat.avatar_url}/>}
                    <Box ml={'18'}>
                        <p>{userStat.login}</p>

                        {userStat.repos_url &&
                            // TODO: create a link to the user's repos (now, just json)
                            <NextLink href={userStat.repos_url} passHref>
                                <Link isExternal>repositories</Link>
                            </NextLink>
                        }
                    </Box>
                </Box>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home
