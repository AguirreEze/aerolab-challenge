import StoreElement from "components/Product"
import { StoreNav } from "components/StoreNav"
import { initialStore, StoreContext } from "context/store"
import { useEffect, useState } from "react"
import { getProducts } from "services/products"
import { StoreType, Order } from "types"
import styles from "./styles.module.scss"

export default function Store() {
  const [store, setStore] = useState<StoreType>(initialStore)
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>(Order.MOSTRECENT)

  useEffect(() => {
    getProducts(page, order).then(setStore)
  }, [page, order])
  return (
    <main className={styles.background}>
      <StoreContext.Provider value={{ store, page, setPage, order, setOrder }}>
        <StoreNav bottomNav={false} />
      </StoreContext.Provider>
      <ul className={styles.stand}>
        {store?.list.map((elem) => (
          <StoreElement key={elem._id} data={elem} />
        ))}
      </ul>
      <StoreContext.Provider value={{ store, page, setPage, order, setOrder }}>
        <StoreNav bottomNav={true} />
      </StoreContext.Provider>
    </main>
  )
}
