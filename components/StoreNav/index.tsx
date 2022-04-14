import OrderButton from "components/OrderButton"
import { StoreContext } from "context/store"
import { useContext } from "react"
import { Order } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  bottomNav: boolean
}

export function StoreNav({ bottomNav }: Iprops) {
  const { store, page, setPage, order, setOrder } = useContext(StoreContext)

  return (
    <section className={bottomNav ? styles.bottom_nav : styles.nav}>
      <span className={styles.text_bold}>{`${
        store ? store.productsPerPage * page : "0"
      } of ${store ? store.totalProducts : "0"} products`}</span>
      <form className={styles.buttoneer}>
        {!bottomNav && <span className={styles.text}>Sort by:</span>}
        {!bottomNav &&
          Object.values(Order).map((option) => (
            <OrderButton
              value={option}
              order={order}
              setOrder={setOrder}
              key={option}
            />
          ))}
        {page !== 1 ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setPage(page - 1)}
          >
            <span>{"<"}</span>
          </button>
        ) : null}
        {store.totalProducts > store.productsPerPage * page ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => setPage(page + 1)}
          >
            <span>{">"}</span>
          </button>
        ) : null}
      </form>
    </section>
  )
}
