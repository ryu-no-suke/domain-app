import { useState } from "react";
import {
  Container,
  Input,
  Heading,
  Checkbox,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import InputForm from "./InputForm";
import CheckForm from "./CheckForm";

type c_t = {
  text: string;
  check: boolean;
};

type InputType = {
  text: string;
  check: boolean;
  select: string[];
  c_t: c_t;
  // 複合
};

export type Content = {
  id: string;
  name: string;
  inputType: InputType["text"];
};

// ベースのtype定義は上記みたいに共通化して引っ張ってこれるようになってても、
// ドメインごとに分かれてtype指定されているといいのかなと思うので都度、入力項目のドメインごとにtype指定を書いちゃうって感じでもいいのかなと

// 共通設定
type TBase = {
  note: string;
};

type ContentBase = {
  itemCode: number;
  contentCode: number;
  name: string;
};

// ドメインごと

type InputTypeContent = ContentBase & {
  inputType: any;
  value: string;
};

type CheckboxTypeContent = ContentBase & {
  inputType: any;
  value: boolean;
};

type Excretion = TBase & {
  contents: [InputTypeContent, CheckboxTypeContent];
};

type Test = TBase & {
  contents: Content[];
};

function App() {
  const [count, setCount] = useState(0);

  const content1: InputTypeContent = {
    itemCode: 1,
    contentCode: 1,
    name: "排尿",
    inputType: <Input />,
    value: "text",
  };

  const content2: CheckboxTypeContent = {
    itemCode: 2,
    contentCode: 2,
    name: "排便",
    inputType: <Checkbox />,
    value: false,
  };

  const data: Excretion = {
    note: "test",
    contents: [content1, content2],
  };

  const sampleFunc = (type: any, name: any) => {
    switch (type) {
      case "text":
        return <InputForm name={name} />;
        break;
      default:
        return <CheckForm name={name} />;
    }
  };

  return (
    <Container>
      {data.contents.map((content) => (
        <div key={content.itemCode}>
          {/* <Heading>{content.name}</Heading>
          <Text>{content.value}</Text> */}
          {sampleFunc(content.value, content.name)}
          {/* {content.inputType} */}
        </div>
      ))}
      <Divider />
      <InputForm name="排尿" />
      <InputForm name="おむつ交換" />
      <CheckForm name="排便" />
    </Container>
  );
}

export default App;
