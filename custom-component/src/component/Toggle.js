import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  .container {
    position: relative;
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
  text-align: center;
`;

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const clickToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <Container onClick={clickToggle}>
        <div className={`container ${isOn ? "click" : ""}`}>
          <div className={`circle ${isOn ? "click" : ""}`}></div>
        </div>
        <Description>
          {isOn ? "Toggle Switch ON" : "Toggle Switch OFF"}
        </Description>
      </Container>
    </>
  );
};
