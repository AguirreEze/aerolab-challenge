import { createContext } from "react"
import { UserType } from "types"

interface Icontext {
  user: UserType | null
  setUser: (user: UserType) => void
}

export const UserContext = createContext<Icontext>({
  user: null,
  setUser: () => {},
})
