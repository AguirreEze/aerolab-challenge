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
