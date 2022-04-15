import Image from "next/image"
import styles from "./styles.module.scss"
import Coin from "public/icons/coin.svg"
import { addBalance } from "services/user"
import { useContext, useState } from "react"
import { UserContext } from "context/user"

interface Iprops {
  show: boolean
  setShow: (show: boolean) => void
}

export default function BalanceOptions({ show, setShow }: Iprops) {
  const { refreshUser } = useContext(UserContext)
  const [disable, setDisabled] = useState<boolean>(false)

  const handleClick = (value: 1000 | 5000 | 7500) => {
    setDisabled(true)
    addBalance(value).then((res) => {
      console.log(res)
      refreshUser()
      setDisabled(false)
      setShow(false)
    })
  }
  return (
    <div className={show ? styles.container : styles.hide}>
      <span className={styles.text}>Add Balance</span>
      <button
        className={styles.button}
        onClick={() => handleClick(1000)}
        disabled={disable}
      >
        1000
        <Image src={Coin} alt={"Gold Coin"} />
      </button>
      <button
        className={styles.button}
        onClick={() => handleClick(5000)}
        disabled={disable}
      >
        5000
        <Image src={Coin} alt={"Gold Coin"} />
      </button>
      <button
        className={styles.button}
        onClick={() => handleClick(7500)}
        disabled={disable}
      >
        7500
        <Image src={Coin} alt={"Gold Coin"} />
      </button>
    </div>
  )
}
