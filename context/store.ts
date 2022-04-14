import { createContext } from "react"
import { Order, StoreType } from "types"

interface Icontext {
  store: StoreType
  setStore: (store: StoreType) => void
}

export const initialStore = {
  list: [],
  productsPerPage: 0,
  totalProducts: 0,
  page: 1,
  order: Order.MOSTRECENT,
}
export const StoreContext = createContext<Icontext>({
  store: initialStore,
  setStore: () => {},
})
