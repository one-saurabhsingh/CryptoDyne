import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import pc from "../assets/pc.jpg";


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           Track crypto trends with real-time graphs on our website. Analyze market trends, compare coins, and make informed decisions.
          </Text>
        </VStack>

        <VStack>
            <HStack>
            <a href="https://github.com/" target="blank"> <Avatar boxSize={"28"} mt={["0", "0"]} src={pc} /></a>
            
            
           
            </HStack>
            <Text>Prasannajit</Text>               
            
          <Text><b>  Founder  </b></Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
