import React from 'react';
import { Input, InputLeftAddon, InputGroup } from '@chakra-ui/input';
import { EmailIcon, ArrowLeftIcon, ArrowRightIcon, LockIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';


function RegisterUI({ handleChange, handleSubmit }) {
  return (
    <>
      <Center marginTop={10} p={4}>
        <Heading>User Login</Heading>
      </Center>
      <Flex marginTop='5' justifyContent="center" justifyItems="center">
        <Box width="md">
          <VStack gridRowGap='10'>

            <InputGroup>
              <InputLeftAddon children={<EmailIcon />} />
              <Input variant='flushed' type="text" name="username" onChange={handleChange} placeholder="email..." />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children={<LockIcon />} />
              <Input variant='flushed' type="password" name="password" onChange={handleChange} placeholder="password..." />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children={<LockIcon />} />
              <Input variant='flushed' type="password" name="cPassword" onChange={handleChange} placeholder="password..." />
            </InputGroup>

            <Button leftIcon={<ArrowLeftIcon />} rightIcon={<ArrowRightIcon />} type="submit" onClick={handleSubmit}>Login</Button>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default RegisterUI;