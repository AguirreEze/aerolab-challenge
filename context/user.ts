import { createContext } from "react"
import { UserType } from "types"

interface Icontext {
  user: UserType | null
  refreshUser: () => void
}

export const UserContext = createContext<Icontext>({
  user: null,
  refreshUser: () => {},
})
