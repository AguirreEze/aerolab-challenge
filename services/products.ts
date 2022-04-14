import { Order, ProductType } from "types"

const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN
const productsPerPage = 16

interface Iprops {
  page: number
  order: Order
}

export const getProducts = ({ page, order }: Iprops) => {
  const request = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return fetch("https://coding-challenge-api.aerolab.co/products", request)
    .then((res) => res.json())
    .then((products: ProductType[]) => {
      if (order === Order.HIGHESTPRICE) products.sort((a, b) => b.cost - a.cost)
      if (order === Order.LOWESTPRICE) products.sort((a, b) => a.cost - b.cost)
      const list = products?.slice(
        productsPerPage * (page - 1),
        productsPerPage * page
      )
      return {
        list,
        productsPerPage,
        totalProducts: products.length,
        page,
        order,
      }
    })
}
