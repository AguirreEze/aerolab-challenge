import { UserContext } from "context/user"
import { ReactChild, useEffect, useState } from "react"
import { getUser } from "services/user"
import { UserType } from "types"

interface Iprops {
  children: ReactChild
}

export default function UserProvider({ children }: Iprops) {
  const [user, setUser] = useState<UserType | null>(null)
  const refreshUser = () => {
    getUser().then(setUser)
  }
  useEffect(() => {
    refreshUser()
  }, [])
  return (
    <UserContext.Provider value={{ user, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}
