import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  margin-top: 100px;
  left: 43%;
  cursor: pointer;
  .container {
    width: 100px;
    height: 55px;
    border-radius: 25px;
    background: #c5c5c5;
    transition: all 0.2s;
    &.click {
      background-color: #4701cd;
    }
  }
  .circle {
    position: absolute;
    top: 2.5px;
    left: 1px;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 25px;
    transition: all 0.2s;
    &.click {
      left: 49px;
    }
    .circle::after {
      content: "aaaa";
    }
  }
`;
const Description = styled.div`
  margin-top: 10px;
`;

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const clickToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <Container onClick={clickToggle}>
        <div className={`container ${isOn ? "click" : ""}`}></div>
        <div className={`circle ${isOn ? "click" : ""}`}></div>
      </Container>
      <Description>
        {isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}
      </Description>
    </>
  );
};
