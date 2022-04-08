import { Order, ProductType } from "types"

const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN
const productsPerPage = 16

export const getProducts = (page: number, order: Order) => {
  const request = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return fetch("https://coding-challenge-api.aerolab.co/products", request)
    .then((res) => res.json())
    .then((products: ProductType[]) => {
      if (order === "HIGHESTPRICE") products.sort((a, b) => a.cost - b.cost)
      if (order === "LOWESTPRICE") products.sort((a, b) => b.cost - a.cost)
      return products.slice(
        productsPerPage * (page - 1),
        productsPerPage * page
      )
    })
}