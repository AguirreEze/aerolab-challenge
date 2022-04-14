export interface UserType {
  createDate: string
  name: string
  points: number
  _id: string
}

export interface ProductType {
  _id: string
  name: string
  cost: number
  category: string
  img: {
    url: string
    hdUrl: string
  }
}

export enum Order {
  MOSTRECENT = "Most recent",
  LOWESTPRICE = "Lowest price",
  HIGHESTPRICE = "Highest price",
}

export interface StoreType {
  list: ProductType[]
  productsPerPage: number
  totalProducts: number
  page: number
  order: Order
}
