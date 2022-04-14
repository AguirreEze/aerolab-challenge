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

  useEffect(() => {
    getProducts({ page: store.page, order: store.order }).then(setStore)
  }, [store.page, store.order])

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <StoreContext.Provider value={{ store, setStore }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp
