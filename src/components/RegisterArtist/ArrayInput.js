import { Flex, Icon, Input, Text, Box } from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";

export default function ArrayInput(props) {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    props.data(array);
  });

  return (
    <Flex flexDirection="column" flex="1" mb="15px">
      <Flex bg="#0E0E0E" alignItems="center">
        <Input
          type="text"
          placeholder={props.placeholder}
          style={props.style}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          id={props.id}
        />
        <Icon
          w="50px"
          h="50px"
          as={AddIcon}
          cursor="pointer"
          color="#727272"
          onClick={() => {
            if (value !== "" && !array.includes(value)) {
              setArray([...array, value]);
              setValue("");
            }
          }}
        />
      </Flex>
      <Flex
        gap="2.5%"
        flexWrap="wrap"
        maxH="140px"
        whiteSpace="pre-line"
        overflowX="hidden"
        overflowY="scroll"
        mt="15px"
        rowGap="15px"
      >
        {array &&
          array.map((value, i) => (
            <Flex w="30%">
              <Flex
                w="90%"
                key={i}
                justifyContent="center"
                alignItems="center"
                bg="#143544"
                color="white"
                h="50px"
              >
                <Text
                  p="5px"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {value}
                </Text>
              </Flex>
              <Box bg="red" w="10%">1</Box>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
