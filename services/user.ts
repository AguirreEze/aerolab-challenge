const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN

export const getUser = () => {
  const request = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return fetch("https://coding-challenge-api.aerolab.co/user/me", request).then(
    (res) => res.json()
  )
}

export const addBalance = (value: 1000 | 5000 | 7500) => {
  const body = {
    amount: value,
  }
  const request = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return fetch(
    "https://coding-challenge-api.aerolab.co/user/points",
    request
  ).then((res) => res.json())
}

export const getHistory = () => {
  const request = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return fetch(
    "https://coding-challenge-api.aerolab.co/user/history",
    request
  ).then((res) => res.json())
}
