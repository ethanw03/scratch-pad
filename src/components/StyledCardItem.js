import { Box, Flex, Text } from "@chakra-ui/react";

const StyledCardItem = ({ message }) => {
  return (
    <Flex my={2}>
      <Box
        bg="blue.500"
        color="white"
        borderRadius="8px"
        py={2}
        px={4}
        maxWidth="80%"
      >
        <Text>{message}</Text>
      </Box>
    </Flex>
  );
};

export default StyledCardItem;
