import React from "react"
import { useQuery } from "react-query"
import axios from "axios"

export const postData = (a, b) => {
  axios({
    method: "post",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    url: "https://api.mocki.io/v1/f2866550/post",
    data: {
      lastname: a,
      flightnumber: b,
    },
  })
}
