import React from "react"
import { useHistory } from "react-router-dom"
import "./styles/review.css"
import {
  Button,
  Input,
  InputLeftAddon,
  Select,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react"

const Review = ({
  renderfirstname,
  renderlastname,
  rendernationality,
  renderemail,
  renderphone,
}) => {
  let history = useHistory()
  function handleClickBack(event) {
    event.preventDefault()
    history.push("/detail")
  }

  function handleClickDone(event) {
    event.preventDefault()
    history.push("/confirmed")
  }

  return (
    <div className='review'>
      <Stack>
        <Text fontSize='3xl'>Review Your Details &#128064;</Text>

        {renderfirstname && renderlastname ? (
          <Text fontSize='xl'>
            {renderfirstname} {renderlastname}
          </Text>
        ) : null}
        {/* 
        <Text fontSize='xl'>
          {renderfirstname} {renderlastname}
        </Text> */}

        {rendernationality ? (
          <Text fontSize='xl'>I am from {rendernationality}</Text>
        ) : null}
        {renderemail ? (
          <Text fontSize='xl'>My Email Id is {renderemail}</Text>
        ) : null}

        {renderphone ? (
          <Text fontSize='xl'>Get in touch at {renderphone}</Text>
        ) : null}
        <br />
        <Button colorScheme='gray' onClick={handleClickBack}>
          ☜ Oops! Go Back
        </Button>
        <Button colorScheme='teal' onClick={handleClickDone}>
          Looks Great! 👍
        </Button>
      </Stack>
    </div>
  )
}

export { Review }
