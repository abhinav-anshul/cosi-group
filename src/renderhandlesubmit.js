import axios from "axios"

export const renderhandlesubmit = (a, b) => {
  return axios({
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
    .then((response) => console.log(JSON.parse(response.config.data)))
    .catch((error) => {
      console.log(error)
    })
}
