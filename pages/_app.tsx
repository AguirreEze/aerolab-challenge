import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContext } from "context/user"
import { useEffect, useState } from "react"
import { Order, StoreType, UserType } from "types"
import { getUser } from "services/user"
import { initialStore, StoreContext } from "context/store"
import { getProducts } from "services/products"

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserType | null>(null)

  const [store, setStore] = useState<StoreType>(initialStore)
  const [page, setPage] = useState<number>(1)
  const [order, setOrder] = useState<Order>(Order.MOSTRECENT)

  useEffect(() => {
    getProducts(page, order).then(setStore)
  }, [page, order])

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StoreContext.Provider value={{ store, page, setPage, order, setOrder }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp
