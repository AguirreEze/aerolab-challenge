import Image from "next/image"
import { ProductType, UserType } from "types"
import Coin from "public/icons/coin.svg"
import styles from "./styles.module.scss"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "context/user"
import BlueBag from "public/icons/buy-blue.svg"
import WhiteBag from "public/icons/buy-white.svg"
import MissingCoins from "components/MissingCoins"
import { redeemProduct } from "services/products"

interface Iprops {
  data: ProductType
}

export default function Product({ data }: Iprops) {
  const { user, refreshUser } = useContext(UserContext)
  const [canBuy, setCanBuy] = useState<boolean>(false)

  useEffect(() => {
    user && setCanBuy(user?.points >= data.cost)
  }, [user?.points])

  const handleClick = () => {
    if (
      window.confirm(`Want to buy ${data.name}, for ${data.cost} ?`) &&
      user
    ) {
      redeemProduct(data._id).then(() => refreshUser())
    }
  }

  return (
    <article className={styles.container}>
      {canBuy ? (
        <div className={styles.bag_icon2}>
          <Image
            src={BlueBag}
            height={42}
            width={42}
            alt={"White bag with blue background"}
          />
        </div>
      ) : (
        user && <MissingCoins>{data.cost - user?.points}</MissingCoins>
      )}
      <div className={styles.image_container}>
        <Image src={data.img.hdUrl} width={175} height={142} alt={data.name} />
      </div>
      <span className={styles.category}>{data.category}</span>
      <span className={styles.name}>{data.name}</span>
      <div className={styles.overlay}>
        <div className={styles.bag_icon}>
          {canBuy && (
            <Image
              src={WhiteBag}
              height={42}
              width={42}
              alt={"Blue bag with white background"}
            />
          )}
        </div>
        <div>
          <span className={styles.cost}>{data.cost}</span>
          <Image src={Coin} alt={"Gold Coin"} />
        </div>
        <button
          className={styles.button}
          disabled={!canBuy}
          onClick={handleClick}
        >
          Redeem now
        </button>
      </div>
    </article>
  )
}
