import { Alert, AlertIcon, Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ProfilePicture from "../assets/IMG_0983.jpg"

const ErrorComponent = ({ message }) => {
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setErrorVisible(true);
      const timer = setTimeout(() => {
        setErrorVisible(false);
      }, 2000); // Hide after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
      >
        <Stack
          direction={["column", "row"]}
          h={"full"}
          alignItems={"center"}
        >
          <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              This is the best crypto trading app.
              
            </Text>
          </VStack>
          <VStack>
            <Avatar boxSize={"28"} src={ProfilePicture} mt={["4", "0"]} />
            <Text fontSize={"12px"}>Mohd. Faiyaaz Khan</Text>
          </VStack>
        </Stack>
      </Box>
      {errorVisible && (
        <Alert
          status="error"
          position={"fixed"}
          bottom={"4"}
          left={"50%"}
          transform={"translateX(-50%)"}
          w={"container.lg"}
        >
          <AlertIcon />
          {message}
        </Alert>
      )}
    </>
  );
};

export default ErrorComponent;
