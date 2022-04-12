import Image from "next/image"
import { ProductType } from "types"
import Coin from "public/icons/coin.svg"
import styles from "./styles.module.scss"

interface Iprops {
  data: ProductType
}

export default function Product({ data }: Iprops) {
  return (
    <article className={styles.container}>
      <div className={styles.image_container}>
        <Image src={data.img.hdUrl} width={175} height={142} alt={data.name} />
      </div>
      <span className={styles.category}>{data.category}</span>
      <span className={styles.name}>{data.name}</span>
      <div className={styles.overlay}>
        <div>
          <span className={styles.cost}>{data.cost}</span>
          <Image src={Coin} alt={"Gold Coin"} />
        </div>
        <button className={styles.button}>Redeem now</button>
      </div>
    </article>
  )
}
