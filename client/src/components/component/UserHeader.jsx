import { VStack, Box, Flex, Avatar ,Text, Link} from '@chakra-ui/react'
import React from 'react'

function UserHeader() {
  return (
    <> 
    <VStack gap={4} alignItems={"start"}>
   <Flex justifyContent={"space-between"} w={"full"}>
   <Box>
    <Text fontSize = {"2xl"} fontWeight={"bold"} >
        Aman Kumar
    </Text>
    <Flex gap={4} alignItems={"center"} >
        <Text fontSize = {"sm"}>
            10 posts
        </Text>
        <Text fontSize = {"xs"}
        bg={"#1e1e1e"}
        color={"#616161"}
        >
            100 followers
        </Text>
        <Text fontSize = {"sm"}>
            100 following
        </Text>
    </Flex>
   </Box>
    <Box>
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="/post1.png" />
    </Avatar.Root>
    </Box> 
  </Flex>
  <Text w={"full"} justifyContent={"center"}  fontSize = {"md"}>
        Full Stack Developer
    </Text>
    <Flex gap={4} alignItems={"center"}>
    <Text color={"#616161"}>32k followers</Text>
    <Box w={1} h={1} borderRadius={"full"} bg={"#616161"}></Box>
    <Link color={"#616161"}>Instagram.com</Link>
    </Flex>
    </VStack>
    </>
  )
}

export default UserHeader