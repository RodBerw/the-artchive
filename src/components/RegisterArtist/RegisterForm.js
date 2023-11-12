import {
  Box,
  Flex,
  FormControl,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArrayInput from "./ArrayInput";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    bornLocation: "",
    bornDate: "",
    deathLocation: "",
    deathDate: "",
    education: {},
    movement: {},
    description: "",
  });
  const validated = false;
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

  const movementVal = false;
  const educationVal = false; 

  useEffect(() => {
    const data = formData;
    setFormData(data)
  }, [formData])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  return (
    <Flex w="100%" ml={{ base: "0", md: "5%" }} flexDirection="column">
      <Text textStyle="large" mb="20px">
        Biography
      </Text>
      <form>
        <Grid
          gap="15px"
          templateColumns={{ base: "1fr", md: "1fr", xl: "1fr 1fr" }}
          rowGap="15px"
          border="none"
        >
          <Flex flexDirection="column" rowGap="5px">
            <Input
              type="text"
              name="name"
              style={textInputStyle}
              placeholder="Name"
              onChange={handleInputChange}
            ></Input>
            {!formData.name.match(/^[A-Za-z]+$/) && formData.name != "" && (
              <Text textStyle="error">Invalid name</Text>
            )}
          </Flex>
          <Flex flexDirection="column" rowGap="15px">
            <Input
              type="text"
              name="fullName"
              style={textInputStyle}
              placeholder="Full name"
              onChange={handleInputChange}
            ></Input>
            {!formData.fullName.match(/^[A-Za-z]+$/) && formData.fullName != "" && (
              <Text textStyle="error">Invalid full name</Text>
            )}
          </Flex>
          <Flex gap="15px">
            <Flex flexDirection="column" rowGap="15px">
              <Input
                type="text"
                name="bornLocation"
                style={textInputStyle}
                placeholder="Born location"
              ></Input>
              {formData.bornLocation.match(/\d+/g) && !formData.bornLocation.match(/^[A-Za-z]+$/) && formData.bornLocation != "" && (
              <Text textStyle="error">Invalid full name</Text>
              )}
            </Flex>
            <Input
              type="date"
              style={textInputStyle}
              placeholder="Born date"
            ></Input>
          </Flex>
          <Flex gap="15px">
            <Flex flexDirection="column" rowGap="15px">
              <Input
                type="text"
                style={textInputStyle}
                placeholder="Death location"
              ></Input>
              {formData.deathLocation.match(/\d+/g) && !formData.deathLocation.match(/^[A-Za-z]+$/) && formData.deathLocation != "" && (
              <Text textStyle="error">Invalid death location</Text>
              )}
            </Flex>
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
              errorMessage="Invalid education"
            />
            <ArrayInput
              placeholder="Movement"
              style={textInputStyle}
              array={movements}
              data={(data) => {
                setMevements(data);
              }}
              errorMessage="Invalid movement"
            />
        </Grid>
        <Textarea
          style={textInputStyle}
          w="100%"
          h="250px !important"
          textAlign="start"
          placeholder="Description"
          resize="none"
          whiteSpace="pre-line"
          overflowX="hidden"
          overflowY="scroll"
        ></Textarea>
      </form>
      <Text textStyle="large" mb="20px" m="20px 0 20px 0">
        Artworks
      </Text>
      <Box></Box>
    </Flex>
  );
}
