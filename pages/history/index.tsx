import { UserContext } from "context/user"
import { NextPage } from "next"
import Head from "next/head"
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
      <Head>
        <title>Aerolab - Purchase history</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>{`Purchace history of ${user?.name}`}</h1>
      <ul className={styles.list}>
        {history.map((elem) => (
          <li key={elem.createDate} className={styles.container}>
            <div className={styles.image_container}>
              <Image
                src={elem.img.hdUrl}
                width={175}
                height={142}
                alt={elem.name}
              />
            </div>
            <h2 className={styles.text_bold}>{elem.name}</h2>
            <span className={styles.text}>{`Date: ${elem.createDate}`}</span>
            <span className={styles.text}>{`Category: ${elem.category}`}</span>
            <span className={styles.text}>{`Price: ${elem.cost}`}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default History
