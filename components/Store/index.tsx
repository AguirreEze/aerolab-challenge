import OrderButton from "components/OrderButton"
import { useEffect, useState } from "react"
import { getProducts } from "services/products"
import { ListType, Order } from "types"

export default function Store() {
  const [list, setList] = useState<ListType | null>(null)
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>(Order.MOSTRECENT)

  useEffect(() => {
    getProducts(page, order).then(setList)
  }, [page, order])

  return (
    <main>
      <section>
        <span>{`${list ? list.productsPerPage * page : "0"} of ${
          list ? list.totalProducts : "0"
        } products`}</span>
        <span>Sort by:</span>
        <form>
          {Object.values(Order).map((option) => (
            <OrderButton
              value={option}
              order={order}
              setOrder={setOrder}
              key={option}
            />
          ))}
        </form>
        <ul>
          {list?.list.map((elem) => (
            <h2 key={elem._id}>{elem.name}</h2>
          ))}
        </ul>
      </section>
    </main>
  )
}
