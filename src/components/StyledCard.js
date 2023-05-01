import {
  Box,
  Card,
  Flex,
  Input,
  Spacer,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import StyledCardItem from "./StyledCardItem";

const StyledCard = ({}) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [maxCharLimit] = useState(200);
  const [timestamps, setTimestamps] = useState([]);

  const handleChange = (event) => {
    if (event.target.value.length <= maxCharLimit) {
      setNote(event.target.value);
    }
  };

  const handleAddNote = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const timestamp = `${formattedHours}:${formattedMinutes}${ampm}`;

    setNotes([...notes, note]);
    setTimestamps([...timestamps, timestamp]);
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
              backgroundColor: `transparent`,
            },
          }}
        >
          <Flex direction="column" minHeight="100%">
            {notes.map((note, index) => (
              <StyledCardItem
                key={`styledCardItem__${index}`}
                message={note}
                timestamp={timestamps[index]}
              />
            ))}
          </Flex>
        </Box>

        <Box marginTop="20px" position="relative">
          <Textarea
            id="note"
            name="note"
            value={note}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            textAlign="left"
            width="722px"
            height="80px"
            placeholder="Start typing here"
            sx={{
              "&::-webkit-scrollbar": {
                width: "4px",
                borderRadius: "8px",
                backgroundColor: `transparent`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `transparent`,
              },
            }}
          />
          <Box position="absolute" bottom="2" right="2">
            <Text
              fontSize="xs"
              color={maxCharLimit - note.length === 0 ? "red.500" : "inherit"}
            >
              {maxCharLimit - note.length}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Card>
  );
};
export default StyledCard;
