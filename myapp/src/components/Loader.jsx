import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transform={"scale(2.5)"}>
       
        <Spinner size={"xl"} />
       
      </Box>
      <Heading p={20}>LOADING...</Heading>
    </VStack>
  );
};

export default Loader;
