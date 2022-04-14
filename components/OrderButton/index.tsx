import { StoreContext } from "context/store"
import { ChangeEvent, useContext } from "react"
import { Order } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  order: Order
  value: Order
}

export default function OrderButton({ order, value }: Iprops) {
  const { store, setStore } = useContext(StoreContext)

  const onOrderValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedStore = {
      ...store,
      order: e.target.value as Order,
    }
    setStore(updatedStore)
  }

  return (
    <div className={styles.container}>
      <input
        type={"radio"}
        name={"order"}
        value={value}
        checked={order === value}
        onChange={onOrderValueChange}
        className={styles.input}
      />
      <label htmlFor={value} className={styles.label}>
        {value}
      </label>
      <div className={styles.background} />
    </div>
  )
}
