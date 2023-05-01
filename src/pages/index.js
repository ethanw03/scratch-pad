import { Button, Flex, Text } from "@chakra-ui/react";

import Head from "next/head";
import StyledCard from "@/components/StyledCard";
import { useState } from "react";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handlePreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    const previousDateString = previousDate.toISOString().slice(0, 10);
    setCurrentDate(previousDateString);
  };

  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDateString = nextDate.toISOString().slice(0, 10);
    setCurrentDate(nextDateString);
  };

  return (
    <>
      <Head>
        <title>Scratch Pad</title>
        <meta
          name="description"
          content="Another day, another note you forgot to write down"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/note.ico" />
      </Head>
      <main>
        <Flex
          h="100vh"
          w="100vw"
          direction="column"
          align="center"
          justify="center"
          backgroundColor="gray.100"
        >
          <Flex mb="4">
            <Button size="sm" onClick={handlePreviousDay}>
              Previous Day
            </Button>
            <Text mx="4">{currentDate}</Text>
            <Button size="sm" onClick={handleNextDay}>
              Next Day
            </Button>
          </Flex>
          <StyledCard currentDate={currentDate}></StyledCard>
        </Flex>
      </main>
    </>
  );
}
