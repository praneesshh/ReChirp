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
          mb={8} // Adjust the size as needed
        />
        <Text fontSize="4xl" fontWeight="bold" mb={4}>Sign Up</Text>
        <Input 
          mx="3" 
          borderRadius="lg" 
          size="2xl" 
          mb={4} 
          placeholder="User Name" 
          w="80%" 
        />
        <Input 
          mx="3" 
          borderRadius="lg" 
          size="2xl" 
          mb={4} 
          placeholder="Email" 
          w="80%" 
        />
        <Input 
          mx="3" 
          borderRadius="lg" 
          size="2xl" 
          mb={4} 
          placeholder="Password" 
          type='password' 
          w="80%" 
        />
        <VStack space={4} alignItems="center" w="80%">
          <Button size="lg"  borderRadius="lg"  width="full" mb='4'>SIGN-UP</Button>
        </VStack>
        <a mt={2} href=''>Already a user? SignIn</a>
      </Box>
    </NativeBaseProvider>
  );
}
