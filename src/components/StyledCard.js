import { Box, Card, Flex, Input, Spacer, Text } from "@chakra-ui/react";

import StyledCardItem from "./StyledCardItem";

const StyledCard = ({}) => {
  const messages = [
    "Wow this is such a great design!",
    "Chakra ui is awesome!",
  ];

  return (
    <Card w="768px" h="514px" padding="6">
      <Flex direction="column" justifyContent="center">
        <Box>
          {messages.map((message) => (
            <StyledCardItem key="styledCardItem__id" message={message} />
          ))}
        </Box>

        <Spacer />
        <Box position="absolute" bottom="0" marginBottom="20px">
          <Input
            textAlign="left"
            width="722px"
            height="80px"
            placeholder="Start typing here"
          />
        </Box>
      </Flex>
    </Card>
  );
};
export default StyledCard;
