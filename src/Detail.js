import React, { useState } from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { Checkbox, CheckboxGroup, Link } from "@chakra-ui/react"
import "./styles/detail.css"

import {
  Button,
  Input,
  InputLeftAddon,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"

import axios from "axios"

const Detail = ({
  renderfirstname,
  renderlastname,
  rendernationality,
  renderemail,
  renderphone,
  renderpassport,
  setrenderfirstname,
  setrenderlastname,
  setrendernationality,
  setrenderemail,
  setrenderphone,
  setrenderpassport,
}) => {
  const [dropdown, setDropdown] = useState("austria")
  const [checked, setChecked] = useState(false)
  function handlefirstname(event) {
    setrenderfirstname(event.target.value)
  }
  function handlelastname(event) {
    setrenderlastname(event.target.value)
  }
  //   function handlenationality(event) {
  //     setrendernationality(event.target.value)
  //   }
  function handleemail(event) {
    setrenderemail(event.target.value)
  }
  function handlephone(event) {
    setrenderphone(event.target.value)
  }

  function handlepassport(event) {
    setrenderpassport(event.target.value)
  }

  let history = useHistory()

  function handleformsubmit(event) {
    event.preventDefault()
    history.push("/review")
  }

  function handleDropdown(event) {
    event.preventDefault()
    setDropdown(event.target.value)
  }

  function handleCheckbox(event) {
    setChecked(event.target.checked)
    console.log(checked)
  }

  return (
    <div className='detail'>
      <form onSubmit={handleformsubmit}>
        <Stack spacing={5}>
          <Text fontSize='2xl'>Hey there &#128075; {renderlastname}</Text>
          <Input
            isRequired={true}
            onChange={handlefirstname}
            value={renderfirstname}
            placeholder='FIrst Name'
            type='text'
          />
          <Input
            isRequired={true}
            onChange={handlelastname}
            value={renderlastname}
            placeholder='Last Name'
            type='text'
          />
          {/* <Input
            onChange={handlenationality}
            value={rendernationality}
            placeholder='Nationality'
            type='text'
          /> */}
          <Select variant='filled' onChange={handleDropdown}>
            <option value='austria'>Austria</option>
            <option value='belgium'>Belgium</option>
            <option value='france'>France</option>
            <option value='greece'>Greece</option>
            <option value='spain'>Spain</option>
          </Select>

          {dropdown === "austria" ? (
            <div>
              <Box
                style={{ margin: "0 auto" }}
                padding='20px'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Stack spacing={2}>
                  <Input type='text' placeholder='Residence' />
                  <label>
                    <Text fontSize='l'>Passport Expiry Date</Text>
                    <Input type='Date' />
                  </label>
                </Stack>
              </Box>
            </div>
          ) : null}
          {dropdown === "belgium" ? (
            <div>
              <Box
                style={{ margin: "0 auto" }}
                padding='20px'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Stack spacing={2}>
                  <Input type='text' placeholder='Residence' />
                  <label>
                    <Text fontSize='l'>Birthdate:</Text>
                    <Input type='date' placeholder='Date' />
                  </label>
                </Stack>
              </Box>
            </div>
          ) : null}
          {dropdown === "france" ? (
            <div>
              <Box
                style={{ margin: "0 auto" }}
                padding='20px'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Stack spacing={2}>
                  <label>
                    <Text fontSize='l'>Birthdate</Text>
                    <Input type='date' />
                  </label>
                  <Input type='text' placeholder='Birth Place' />
                  <Input type='text' placeholder='Residence' />
                </Stack>
              </Box>
            </div>
          ) : null}
          {dropdown === "greece" ? (
            <div>
              <Box
                style={{ margin: "0 auto" }}
                padding='20px'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Stack spacing={4}>
                  <Input placeholder='Location of Passport Issued' />
                  <label>
                    <Stack spacing={2}>
                      <Text placeholder='abc' fontSize='l'>
                        Passport Date Of Issue
                      </Text>
                      <Input type='date' />
                    </Stack>
                  </label>
                  <label>
                    <Stack spacing={2}>
                      <Text fontSize='l'>Passport Expiry Date</Text>
                      <Input type='date' />
                    </Stack>
                  </label>
                </Stack>
              </Box>
            </div>
          ) : null}
          {dropdown === "spain" ? (
            <div>
              <Input placeholder='Residence' />
            </div>
          ) : null}
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input
              isRequired={true}
              onChange={handleemail}
              value={renderemail}
              placeholder='Email'
              type='text'
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children='+1' />
            <Input
              isRequired={true}
              onChange={handlephone}
              value={renderphone}
              placeholder='Phone Number'
              type='phone'
            />
          </InputGroup>
          <Input
            onChange={handlepassport}
            value={renderpassport}
            placeholder='Passport'
            type='text'
          />
          <Checkbox onChange={handleCheckbox} defaultIsChecked={false}>
            <Link
              href='https://www.termsandconditionsgenerator.com/live.php?token=e9Bw8CTu2AZLu9Y8NSvvO0m1mGJqcn9r'
              isExternal
            >
              Terms & Conditions <ExternalLinkIcon mx='2px' />
            </Link>
          </Checkbox>
          <Button
            isDisabled={!checked}
            colorScheme='teal'
            size='lg'
            type='submit'
            value='submit'
          >
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export { Detail }

// export const renderhandlesubmit = (a, b) => {
//   return axios({
//     method: "post",
//     mode: "no-cors",
//     headers: {
//       Accept: "application/json",
//       "content-type": "application/json"
//     },
//     url: "https://api.mocki.io/v1/f2866550/post",
//     data: {
//       lastname: a,
//       flightnumber: b
//     }
//   })
//     .then((response) => console.log(JSON.parse(response.config.data)))
//     .catch((error) => {
//       console.log(error);
//     });
// };
