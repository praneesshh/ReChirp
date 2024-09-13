import { NativeBaseProvider, Box, Text, Button, VStack } from 'native-base';

const Terms = () => {
  return (
    <NativeBaseProvider >
      <Box alignItems="left">
      <Text fontSize="5xl">Terms of Service</Text>
      <Text fontSize="3xl">1. Acceptance of Terms</Text>


      <Text fontSize="2xl" w="80%" mb="10" >PetPace smart collar is designed to improve pets’ quality of life, health, and well-being.
Developed by veterinarians and powered
by machine learning, our collar helps pet owners worldwide to maintain their dogs’ and cats’ welfare.</Text>

  </Box>
         </NativeBaseProvider>

  )
}

export default Terms;