import OrderButton from "components/OrderButton"
import StoreElement from "components/Product"
import { useEffect, useState } from "react"
import { getProducts } from "services/products"
import { ListType, Order } from "types"
import styles from "./styles.module.scss"

export default function Store() {
  const [list, setList] = useState<ListType | null>(null)
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>(Order.MOSTRECENT)

  useEffect(() => {
    getProducts(page, order).then(setList)
  }, [page, order])
  return (
    <main className={styles.background}>
      <section className={styles.nav}>
        <span className={styles.text_bold}>{`${
          list ? list.productsPerPage * page : "0"
        } of ${list ? list.totalProducts : "0"} products`}</span>
        <span className={styles.text}>Sort by:</span>
        <form className={styles.buttoneer}>
          {Object.values(Order).map((option) => (
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
          {list && list.totalProducts > list.productsPerPage * page ? (
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

      <ul className={styles.stand}>
        {list?.list.map((elem) => (
          <StoreElement key={elem._id} data={elem} />
        ))}
      </ul>
    </main>
  )
}
