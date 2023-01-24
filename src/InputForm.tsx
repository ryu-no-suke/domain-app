import React from "react";
import {
  Container,
  Input,
  Heading,
  Checkbox,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
type Props = {
  name: string;
};

function InputForm({ name }: Props) {
  return (
    <Flex>
      <Text>{name}</Text>
      <Input />
    </Flex>
  );
}

export default InputForm;
