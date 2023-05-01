import { Box, Card, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import StyledCardItem from "./StyledCardItem";

const StyledCard = ({}) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    setNotes([...notes, note]);
    setNote("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddNote();
    }
  };

  const notesContainerRef = useRef();

  useEffect(() => {
    if (notesContainerRef.current) {
      notesContainerRef.current.scrollTop =
        notesContainerRef.current.scrollHeight;
    }
  }, [notes]);

  return (
    <Card w="768px" h="514px" padding="6">
      <Flex direction="column" justifyContent="space-between">
        <Box
          ref={notesContainerRef}
          width="722px"
          height="360px"
          overflowY="scroll"
          overflowX="hidden"
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
              borderRadius: "8px",
              backgroundColor: `transparent`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `blue.500`,
            },
          }}
        >
          <Flex direction="column" minHeight="100%" justifyContent="flex-end">
            <Spacer />
            {notes.map((note, index) => (
              <StyledCardItem key={`styledCardItem__${index}`} message={note} />
            ))}
          </Flex>
        </Box>

        <Box marginTop="20px">
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
