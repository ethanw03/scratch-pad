import { Box, Card, Flex, Input, Spacer, Text } from "@chakra-ui/react";

import StyledCardItem from "./StyledCardItem";
import { useState } from "react";

const StyledCard = ({}) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    setNotes([note, ...notes]);
    setNote("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddNote();
    }
  };

  return (
    <Card w="768px" h="514px" padding="6">
      <Flex direction="column" justifyContent="center">
        <Box>
          {notes.map((note, index) => (
            <StyledCardItem key={`styledCardItem__${index}`} message={note} />
          ))}
        </Box>

        <Spacer />
        <Box position="absolute" bottom="0" marginBottom="20px">
          <Input
            type="text"
            id="note"
            name="note"
            value={note}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
