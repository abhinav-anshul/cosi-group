import React from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, Box, Stack, Text } from "@chakra-ui/react"
import { renderhandlesubmit } from "./renderhandlesubmit"
import { motion } from "framer-motion"
import "./styles/welcome.css"
const Welcome = ({
  renderlastname,
  renderflightnumber,
  rendersetlastname,
  rendersetflightnumber,
}) => {
  function handlelastname(event) {
    console.log(renderlastname)
    return rendersetlastname(event.target.value)
  }

  function handleflightnumber(event) {
    return rendersetflightnumber(event.target.value)
  }

  let history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()
    renderhandlesubmit(renderlastname, renderflightnumber)
    history.push("/detail")
  }

  return (
    <div className='welcome'>
      {/* <p>Hello</p> */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={5}>
          <Text fontSize='3xl'>Welcome To Your Web Check-in</Text>

          <Input
            isRequired={true}
            size='lg'
            placeholder='# Flight Number'
            value={renderflightnumber}
            onChange={handleflightnumber}
          />

          <Input
            isRequired={true}
            size='lg'
            placeholder='Last Name'
            value={renderlastname}
            onChange={handlelastname}
          />

          <Button colorScheme='teal' size='lg' type='submit' value='Submit'>
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export { Welcome }
