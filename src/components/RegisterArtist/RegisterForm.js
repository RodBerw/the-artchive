import { Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import ArrayInput from "./ArrayInput";

export default function RegisterForm() {
  const [education, setEducation] = useState([]);
  const [movements, setMevements] = useState([]);
  const textInputStyle = {
    height: "60px",
    textStyle: "basic",
    border: "none",
    backgroundColor: "#0E0E0E",
    color: "white",
    borderRadius: "0",
  };

  return (
    <Flex w="100%" ml="5%" flexDirection="column">
      <Text textStyle="large" mb="20px">
        Biography
      </Text>
      <FormControl>
        <Grid gap="15px" templateColumns="1fr 1fr" rowGap="15px" border="none">
          <Input type="text" style={textInputStyle} placeholder="Name"></Input>
          <Input
            type="text"
            style={textInputStyle}
            placeholder="Full name"
          ></Input>
          <Flex gap="15px">
            <Input
              type="text"
              style={textInputStyle}
              placeholder="Born location"
            ></Input>
            <Input
              type="date"
              style={textInputStyle}
              placeholder="Born date"
            ></Input>
          </Flex>
          <Flex gap="15px">
            <Input
              type="text"
              style={textInputStyle}
              placeholder="Death location"
            ></Input>
            <Input
              type="date"
              style={textInputStyle}
              placeholder="Death date"
            ></Input>
          </Flex>
          <ArrayInput
            placeholder="Education"
            style={textInputStyle}
            array={education}
            data={(data) => {
              setEducation(data);
            }}
          />
          <ArrayInput
            placeholder="Movement"
            style={textInputStyle}
            array={movements}
            data={(data) => {
              setMevements(data);
            }}
          />
        </Grid>
      </FormControl>
    </Flex>
  );
}
