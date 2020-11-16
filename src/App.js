import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import "./styles/base.css"
import { Welcome } from "./Welcome"
import { Review } from "./Review"
import { Detail } from "./Detail"
import { Verified } from "./Verified"
import { Error } from "./Error"

export default function App() {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [nationality, setnationality] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [passport, setpassport] = useState("")
  const [flightnumber, setflightnumber] = useState("")

  return (
    <div className='App'>
      <>
        <Header />
        <ChakraProvider>
          <Router>
            <Switch>
              <Route path='/welcome'>
                <Welcome
                  rendersetlastname={setlastname}
                  rendersetflightnumber={setflightnumber}
                  renderlastname={lastname}
                  renderflightnumber={flightnumber}
                />
              </Route>
              {/* <Detail detaillastname={lastname} />
        {postData(lastname, flightnumber)} */}
              <Route exact path='/detail'>
                <Detail
                  renderfirstname={firstname}
                  setrenderfirstname={setfirstname}
                  renderlastname={lastname}
                  setrenderlastname={setlastname}
                  rendernationality={nationality}
                  setrendernationality={setnationality}
                  renderemail={email}
                  setrenderemail={setemail}
                  renderphone={phone}
                  setrenderphone={setphone}
                  renderpassport={passport}
                  setrenderpassport={setpassport}
                />
              </Route>
              <Route exact path='/review'>
                <Review
                  renderfirstname={firstname}
                  renderlastname={lastname}
                  rendernationality={nationality}
                  renderemail={email}
                  renderphone={phone}
                />
              </Route>

              <Route exact path='/confirmed'>
                <Verified />
              </Route>
              <Route component={Error} />
            </Switch>
          </Router>
        </ChakraProvider>
      </>
    </div>
  )
}
