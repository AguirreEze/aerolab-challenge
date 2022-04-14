import OrderButton from "components/OrderButton"
import { StoreContext } from "context/store"
import { useContext } from "react"
import { Order } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  bottomNav: boolean
}

export function StoreNav({ bottomNav }: Iprops) {
  const { store, setStore } = useContext(StoreContext)

  const setPage = (updatedPage: number) => {
    const updatedStore = {
      ...store,
      page: updatedPage,
    }
    setStore(updatedStore)
  }

  return (
    <section className={bottomNav ? styles.bottom_nav : styles.nav}>
      <span className={styles.text_bold}>{`${
        store ? store.productsPerPage * store.page : "0"
      } of ${store ? store.totalProducts : "0"} products`}</span>
      <form className={styles.buttoneer}>
        {!bottomNav && <span className={styles.text}>Sort by:</span>}
        {!bottomNav &&
          Object.values(Order).map((option) => (
            <OrderButton value={option} order={store.order} key={option} />
          ))}
        {store.page !== 1 ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setPage(store.page - 1)}
          >
            <span>{"<"}</span>
          </button>
        ) : null}
        {store.totalProducts > store.productsPerPage * store.page ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setPage(store.page + 1)}
          >
            <span>{">"}</span>
          </button>
        ) : null}
      </form>
    </section>
  )
}
