import React from "react";
import { Checkbox } from "@chakra-ui/react";
type Props = {
  name: string;
};

function CheckForm({ name }: Props) {
  return <Checkbox defaultChecked>{name}</Checkbox>;
}

export default CheckForm;
