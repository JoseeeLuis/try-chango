import "./App.css";
import { Box, Flex, Text } from "@chakra-ui/react";
const phases = [
  {
    title: "Discovery",
    description: "Understanding the product.",
    start: 0,
    duration: 1,
    color: "Pink",
  },
  {
    title: "Development",
    description: "Understanding the product.",
    start: 1,
    duration: 1,
    color: "Green",
  },
  {
    title: "QA",
    description: "Understanding the product.",
    start: 2,
    duration: 1,
    color: "red",
  },
  {
    title: "Client Testing",
    description: "Understanding the product.",
    start: 3,
    duration: 1,
    color: "yellow",
  },
];
const totalsprint = 4;

function App() {
  const sprintsLabel = Array.from(
    { length: totalsprint },
    (_, i) => `Sprint ${i + 1}`
  );

  const calculateWidth = (duration) => `${(duration / totalsprint) * 100}%`;
  const calculateLeft = (start) => `${(start / totalsprint) * 100}%`;
  return (
    <div className="App">
      <header className="App-header">
        <Flex width="100%">
          {sprintsLabel.map((label, index) => (
            <Text
              width={calculateWidth(1)}
              key={index}
              fontWeight="bold"
              color="white"
              borderRight={"1px solid white"}
            >
              {label}
            </Text>
          ))}
        </Flex>
        {phases.map((phase) => (
          <Flex
            position={"relative"}
            height={"120px"}
            bgColor={"gray"}
            width="100%"
            overflow="hidden"
            marginBottom={5}
          >
            <Box
              position="absolute"
              top="0"
              height="100%"
              left={calculateLeft(phase.start)}
              width={calculateWidth(phase.duration)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              bg={phase.color}
              borderRadius="20px"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{ opacity: 0.8 }}
            >
              <Text>{phase.title}</Text>
            </Box>
          </Flex>
        ))}
      </header>
    </div>
  );
}

export default App;
