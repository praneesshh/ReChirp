import React from 'react';
import { NativeBaseProvider, Box, Text, Button, Input, Image, VStack } from 'native-base';

const rechirp = require("../images/rechirp.png");

export default function SignIn() {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" safeArea p={4}>
        <Image 
          resizeMode="contain" 
          source={rechirp} 
          alt="Rechirp Logo"
          mb={'32'} 
        />
        <Text fontSize="4xl" fontWeight="bold" mb={6}>Sign In</Text>
        <Input 
          mx="3" 
          borderRadius="3xl" 
          size="3xl" 
          mb={10} 
          placeholder="User Name" 
          w="80%" 
          h="10%"
        />
        <Input 
          mx="3" 
          borderRadius="3xl"
          size="3xl" 
          mb={10} 
          placeholder="Password" 
          type='password' 
          h="10%"
          w="80%" 
        />
      <VStack space={6} alignItems="center" w="20%">
  <Button size="lg" borderRadius="3xl" px="10" bg="orange.600" color="white">
    SIGN-IN
  </Button>
</VStack>

        <Text fontSize="2xl" my={4}>Forgot Password?</Text>
        <a href=''>New user? Sign UP</a>
      </Box>
    </NativeBaseProvider>
  );
}
