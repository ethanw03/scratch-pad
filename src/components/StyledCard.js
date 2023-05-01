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
      <Flex direction="column-reverse" justifyContent="flex-end">
        <Box
          ref={notesContainerRef}
          width="722px"
          height="18vh"
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "4px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.4)`,
            },
          }}
        >
          <Spacer />
          {notes.map((note, index) => (
            <StyledCardItem key={`styledCardItem__${index}`} message={note} />
          ))}
        </Box>

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
