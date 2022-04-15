import { UserContext } from "context/user"
import { NextPage } from "next"
import { useContext, useEffect, useState } from "react"
import { getHistory } from "services/user"
import { HistoryItemType } from "types"
import styles from "./styles.module.scss"

const History: NextPage = () => {
  const { user } = useContext(UserContext)
  const [history, setHistory] = useState<HistoryItemType[]>([])
  useEffect(() => {
    getHistory().then(setHistory)
  }, [])

  return (
    <main className={styles.background}>
      <h1 className={styles.title}>{`Purchace history of ${user?.name}`}</h1>
      <ul className={styles.list}>
        {history.map((elem) => (
          <h2 key={elem.createDate}>{elem.name}</h2>
        ))}
      </ul>
    </main>
  )
}

export default History
