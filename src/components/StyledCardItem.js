import { Box, Flex, Text } from "@chakra-ui/react";

const StyledCardItem = ({ message, timestamp }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb="20px">
      <Text
        backgroundColor="blue.500"
        border="1px"
        borderColor="gray.200"
        borderRadius="8px"
        color="white"
        padding="6px"
        wordBreak="break-word"
      >
        {message}
      </Text>
      <Text color="gray.500" fontSize="xs" ml="10px">
        {timestamp}
      </Text>
    </Flex>
  );
};

export default StyledCardItem;
