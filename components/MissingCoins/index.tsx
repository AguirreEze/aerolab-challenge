import Image from "next/image"
import Coin from "public/icons/coin.svg"
import styles from "./styles.module.scss"

interface Iprops {
  children: number
}

export default function MissingCoins({ children }: Iprops) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{`You need ${children}`}</span>
      <Image src={Coin} alt={"Gold Coin"} />
    </div>
  )
}
