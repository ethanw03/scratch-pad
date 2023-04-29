import { Box, Card, Flex, Text } from "@chakra-ui/react";

const StyledCardItem = ({ message }) => {
  return (
    <Flex>
      <Text
        border="1px"
        borderColor="gray.200"
        borderRadius="8px"
        mb="20px"
        width="738px"
        height="75px"
      >
        <Box margin="6px">{message}</Box>
      </Text>
    </Flex>
  );
};

export default StyledCardItem;
