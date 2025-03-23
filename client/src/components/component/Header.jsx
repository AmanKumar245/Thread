import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import {
 
  useColorMode,

} from "@/components/ui/color-mode"
function Header() {
  const { colorMode ,toggleColorMode} = useColorMode()
  return (
   <Flex justifyContent={"center"} mt={6} mb={12}>
   <Image
   cursor={"pointer"}
    src={colorMode === "light" ? "/dark-logo.svg": "/light-logo.svg"}
     alt="logo" 
     w={6}
      onClick={toggleColorMode}
     />

   </Flex>
  )
}

export default Header