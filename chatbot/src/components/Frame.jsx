import React from "react";
import { InputContainer } from "./InputContainer";
import { ScrollWindow } from "./ScrollWindow";
import { Title } from "./Title";

export function Frame() {
  return (
    <div className="chatbotframe">
      <Title />
      <ScrollWindow />
      <InputContainer/>
    </div>
  );
}
