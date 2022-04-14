import StoreElement from "components/Product"
import { StoreNav } from "components/StoreNav"
import { StoreContext } from "context/store"
import { useContext } from "react"

import styles from "./styles.module.scss"

export default function Store() {
  const { store } = useContext(StoreContext)

  return (
    <main className={styles.background}>
      <StoreNav bottomNav={false} />
      <ul className={styles.stand}>
        {store?.list.map((elem) => (
          <StoreElement key={elem._id} data={elem} />
        ))}
      </ul>
      <StoreNav bottomNav={true} />
    </main>
  )
}
