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
  MostRecent = "MOSTRECENT",
  LowestPrice = "LOWESTPRICE",
  HighestPrice = "HIGHESTPRICE",
}
