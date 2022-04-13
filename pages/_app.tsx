import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContext } from "context/user"
import { useEffect, useState } from "react"
import { UserType } from "types"
import { getUser } from "services/user"

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserType | null>(null)
  useEffect(() => {
    getUser().then(setUser)
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
