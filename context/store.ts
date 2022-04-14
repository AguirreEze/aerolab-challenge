import { createContext } from "react"
import { Order, ProductType } from "types"

interface Icontext {
  store: {
    list: ProductType[]
    productsPerPage: number
    totalProducts: number
  }
  page: number
  setPage: (user: number) => void
  order: Order
  setOrder: (user: Order) => void
}

export const initialStore = {
  list: [],
  productsPerPage: 0,
  totalProducts: 0,
}
export const StoreContext = createContext<Icontext>({
  store: initialStore,
  page: 0,
  setPage: () => {},
  order: Order.MOSTRECENT,
  setOrder: () => {},
})
