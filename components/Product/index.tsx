import Image from "next/image"
import { ProductType } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  data: ProductType
}

export default function Product({ data }: Iprops) {
  return (
    <article className={styles.container}>
      <div className={styles.image_container}>
        <Image src={data.img.hdUrl} width={175} height={142} />
      </div>
      <span className={styles.category}>{data.category}</span>
      <span className={styles.name}>{data.name}</span>
    </article>
  )
}
