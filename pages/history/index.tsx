import { UserContext } from "context/user"
import { NextPage } from "next"
import Image from "next/image"
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
          <article key={elem.createDate} className={styles.container}>
            <div className={styles.image_container}>
              <Image
                src={elem.img.hdUrl}
                width={175}
                height={142}
                alt={elem.name}
              />
            </div>
            <h2>{elem.name}</h2>
            <span>{`Date: ${elem.createDate}`}</span>
            <span>{`Category: ${elem.category}`}</span>
            <span>{`Price: ${elem.cost}`}</span>
          </article>
        ))}
      </ul>
    </main>
  )
}

export default History
