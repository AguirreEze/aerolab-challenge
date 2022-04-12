import { ChangeEvent } from "react"
import { Order } from "types"
import styles from "./styles.module.scss"

interface Iprops {
  setOrder: (state: Order) => void
  order: Order
  value: Order
}

export default function OrderButton({ setOrder, order, value }: Iprops) {
  const onOrderValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value as Order)
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
