import {
    Box,
    Flex,
    Input,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
  } from "@chakra-ui/react";
export default function RegisterForm(){
    return(
        <Flex w="100%" justifyContent="center" ml="5%">
            <FormControl>
                <Flex gap="2.5%">
                    <Input type="text" placeholder="Name"></Input>
                    <Input type="text" placeholder="Name"></Input>
                </Flex>
            </FormControl>
        </Flex>
    )
}