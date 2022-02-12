import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background: #4701cd;
  color: white;
  height: 50px;
  border-radius: 20px;
  cursor: grab;
  border: none;
`;

const Backdrop = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const View = styled.div`
  background-color: white;
  width: 300px;
  height: 120px;
  margin: 100px;
  color: #4701cd;
  text-align: center;
  border-radius: 10px;
  .xbtn {
    cursor: pointer;
    display: inline-block;
    padding-top: 5px;
    margin-bottom: 30px;
  }
`;

export const Modal = () => {
  const [isOn, setIsOn] = useState(false);

  const clickModal = () => {
    setIsOn(!isOn);
  };

  return (
    <Container>
      <Button onClick={clickModal}>{isOn ? "Opened" : "Open Modal"}</Button>
      {isOn && (
        <Backdrop onClick={clickModal}>
          <View onClick={(e) => e.stopPropagation()}>
            <span className="xbtn" onClick={clickModal}>
              &times;
            </span>
            <div>HELLO CODESTATES!</div>
          </View>
        </Backdrop>
      )}
    </Container>
  );
};
