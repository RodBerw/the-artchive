import { Flex, Icon, Input, Text, Box } from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";

export default function ArrayInput(props) {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    props.data(array);
  }, [array]);

  return (
    <Flex flexDirection="column" flex="1">
      <Flex flexDirection="column" rowGap="15px">
        <Flex bg="#0E0E0E" alignItems="center">
          <Input
            type="text"
            placeholder={props.placeholder}
            style={props.style}
            onChange={(e) => {
              setValue(e.target.value)
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
              if (value !== "" && !array.includes(value) &&
              value.match(/^[A-Za-z]+$/)) {
                setArray([...array, value]);
                setValue("");
              }
            }}
          />
        </Flex>
        {!value.match(/^[A-Za-z]+$/) && value != "" && (
              <Text textStyle="error">{props.errorMessage}</Text>
              )}
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
        mr="-10px"
      >
        {array &&
          array.map((value, i) => (
            <Flex w="31.6%" mb="15px">
              <Flex
                w="85%"
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
              <Flex
                bg="#0E0E0E"
                transition="background .25s"
                _hover={{ bg: "#75170b" }}
                flex="1"
                alignItems="center"
                cursor="pointer"
                onClick={() => {
                  const newArray = [...array];
                  newArray.splice(i, 1);
                  setArray(newArray);
                }}
              >
                <Icon as={ClearIcon} color="gray"></Icon>
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
