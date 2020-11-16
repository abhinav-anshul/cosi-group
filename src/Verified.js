import React from "react"
import { motion } from "framer-motion"
import { CheckCircleIcon } from "@chakra-ui/icons"
import { Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Verified = () => {
  return (
    <>
      <div style={{ marginTop: "150px", textAlign: "center" }}>
        <Text fontSize='4xl'>You're all set 💪 </Text>
        <CheckCircleIcon w={12} h={12} color='teal.500' />
        <br />
        <br />
        <Link to='/welcome'>
          <Text>
            Goto{" "}
            <Button colorScheme='teal' size='xs'>
              Home
            </Button>
          </Text>
        </Link>
      </div>
    </>
  )
}

export { Verified }
