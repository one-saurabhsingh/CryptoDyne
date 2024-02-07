import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
      fontFamily={"Bebas Neue"}
        fontSize={"7xl"}
        textAlign={"center"}
        fontWeight={"thick"}
        color={"whiteAlpha.700"}
        mt={"-20"}
        p={"5"}
      >
        C R Y P T O D Y N E
      </Text>
    </Box>
  );
};

export default Home;
