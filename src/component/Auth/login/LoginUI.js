import React from 'react';
import { Input, InputLeftAddon, InputGroup } from '@chakra-ui/input';
import { EmailIcon, ArrowLeftIcon, ArrowRightIcon, LockIcon } from '@chakra-ui/icons';
import { Box,Flex, Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';


function LoginUI({ handleChange, handleSubmit }) {
  return (
    <>

      <Flex direction='column' justifyItems="center">
        <Heading p={10}>Login</Heading>
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

            <Button leftIcon={<ArrowLeftIcon />} rightIcon={<ArrowRightIcon />} type="submit" onClick={handleSubmit}>Login</Button>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

export default LoginUI;