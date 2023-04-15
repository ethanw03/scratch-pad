import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import StyledCard from "@/components/StyledCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scratch Pad</title>
        <meta
          name="description"
          content="Another day, another note you forgot to write down"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex h="100vh" w="100vw" align="center" justify="center">
          <StyledCard>
            <Text fontSize="4xl">Delete this</Text>
          </StyledCard>
        </Flex>
      </main>
    </>
  );
}
