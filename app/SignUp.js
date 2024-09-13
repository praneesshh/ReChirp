import React from 'react';
import { NativeBaseProvider, Box, Text, Button, Input, Image, VStack } from 'native-base';

const rechirp = require("../images/rechirp.png");

export default function SignUp() {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" safeArea p={4}>
        <Image 
          resizeMode="contain" 
          source={rechirp} 
          alt="Rechirp Logo"
          mb={'16'} 
        />
        <Box backgroundColor="orange.200" padding="16" alignItems="center" borderRadius="3xl" borderColor="orange.100" borderWidth="4">
        <Text fontSize="4xl" fontWeight="bold" mb={6}>Welcome Aboard</Text>
        <Input 
          mx="3" 
          borderRadius="3xl" 
          size="3xl" 
          mb={10} 
          placeholder="User Name" 
          bgColor="white"
          w="100%" 
          h="15%"
        />
        <Input 
          mx="3" 
          borderRadius="3xl"
          size="3xl" 
          mb={10} 
          placeholder="Password" 
          type='password' 
          bgColor="white"
          h="15%"
          w="100%" 
        />
         <Input 
          mx="3" 
          borderRadius="3xl"
          size="3xl" 
          mb={10} 
          placeholder="Confirm Password" 
          type='password' 
          h="15%"
          bgColor="white"
          w="100%" 
        />
        <Text>By proceeding with the app, you agree with our Terms and Conditions</Text>
        <Button>Terms Of Service</Button>
      <VStack space={6} mt="10" alignItems="center" w="20%">
  <Button size="lg" borderRadius="3xl" px="10" bg="green.600" color="white">
    Register
  </Button>
</VStack>

        <Text fontSize="2xl" my={4}>Forgot Password?</Text>
        <a href=''>Already user? Sign in</a>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
