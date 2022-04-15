import { initialStore, StoreContext } from "context/store"
import { ReactChild, useEffect, useState } from "react"
import { getProducts } from "services/products"
import { StoreType } from "types"

interface Iprops {
  children: ReactChild
}

export default function StoreProvider({ children }: Iprops) {
  const [store, setStore] = useState<StoreType>(initialStore)

  useEffect(() => {
    getProducts({ page: store.page, order: store.order }).then(setStore)
  }, [store.page, store.order])

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}
