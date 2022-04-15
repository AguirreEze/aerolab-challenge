import "../styles/globals.css"
import type { AppProps } from "next/app"
import UserProvider from "components/UserProvider"
import StoreProvider from "components/StoreProvider"
import Layout from "components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </UserProvider>
  )
}

export default MyApp
