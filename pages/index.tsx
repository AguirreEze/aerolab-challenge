import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "./styles.module.scss"

import Logo from "public/aerolab-logo.svg"
import Coin from "public/icons/coin.svg"
import { getUser } from "services/user"
import { UserType } from "types"
import Store from "components/Store"

const Home: NextPage = () => {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return (
    <div>
      <Head>
        <title>Aerolab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.top_bar}>
          <Image src={Logo} alt={"Orange flyer"} />
          {user ? (
            <span className={styles.user_name}>{user.name}</span>
          ) : (
            <span className={styles.user_name}>User</span>
          )}
          <div className={styles.coin_container}>
            {user ? (
              <span className={styles.coin_counter}>{user.points}</span>
            ) : (
              <span className={styles.coin_counter}>0</span>
            )}
            <Image src={Coin} alt={"Gold Coin"} />
          </div>
        </div>
        <Image
          src={"/header-x1.png"}
          width={2880}
          height={920}
          alt={"Blue headphones on a light blue background"}
          layout={"responsive"}
        />
      </header>
      <Store />
    </div>
  )
}

export default Home
