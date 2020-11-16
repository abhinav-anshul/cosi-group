import React from "react"
import { Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "150px" }}>
      <Text fontSize='xl'>Something Is Not Right</Text>

      <Link to='/welcome'>
        <Text>
          Goto{" "}
          <Button colorScheme='teal' size='xs'>
            Home
          </Button>
        </Text>
      </Link>
    </div>
  )
}

export { Error }
