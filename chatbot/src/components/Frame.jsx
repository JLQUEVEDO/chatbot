import React from "react";
import { InputContainer } from "./InputContainer";
import { ScrollWindow } from "./ScrollWindow";
import { Title } from "./Title";

export function Frame({conversation}) {
  
  return (
    <div className="main">
      <div className="chatbotframe">
        <Title />
        <ScrollWindow  conversation={conversation}/>
        <InputContainer />
      </div>
    </div>
  );
}

