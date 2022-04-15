import "../styles/globals.css"
import type { AppProps } from "next/app"
import UserProvider from "components/UserProvider"
import StoreProvider from "components/StoreProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </UserProvider>
  )
}

export default MyApp
