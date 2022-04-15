import Image from "next/image"
import styles from "./styles.module.scss"

import Logo from "public/aerolab-logo.svg"
import Coin from "public/icons/coin.svg"
import BalanceOptions from "components/BalanceOptions"
import { ReactChild, useContext, useState } from "react"
import { UserContext } from "context/user"

interface Iprops {
  children: ReactChild
}

export default function Layout({ children }: Iprops) {
  const { user } = useContext(UserContext)
  const [showBalanceOptions, setShowBalanceOptions] = useState<boolean>(false)
  return (
    <>
      <header className={styles.header}>
        <Image src={Logo} alt={"Orange flyer"} />
        {user ? (
          <span className={styles.user_name}>{user.name}</span>
        ) : (
          <span className={styles.user_name}>User</span>
        )}
        <div
          className={styles.coin_container}
          onClick={() => setShowBalanceOptions(!showBalanceOptions)}
        >
          {user ? (
            <span className={styles.coin_counter}>{user.points}</span>
          ) : (
            <span className={styles.coin_counter}>0</span>
          )}
          <Image src={Coin} alt={"Gold Coin"} />
        </div>
        <BalanceOptions
          show={showBalanceOptions}
          setShow={setShowBalanceOptions}
        />
      </header>
      {children}
    </>
  )
}
