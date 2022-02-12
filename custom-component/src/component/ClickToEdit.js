import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChangeBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  /* background: red; */
  div {
    margin-right: 20px;
  }
`;

const InputBox = styled.div`
  text-align: center;
  input {
    text-align: center;
    width: 150px;
    height: 30px;
  }
  div {
    width: 150px;
    height: 30px;
    border: 1px solid #7b7b7b;
    padding-top: 5px;
  }
`;

export const ClickToEdit = () => {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);

  return (
    <Container>
      <ChangeBox>
        <div>이름</div>
        <InputTag
          value={name}
          handleValueChange={(changedValue) => setName(changedValue)}
        />
      </ChangeBox>
      <ChangeBox>
        <div>나이</div>
        <InputTag
          value={age}
          handleValueChange={(changedValue) => setAge(changedValue)}
        />
      </ChangeBox>
      <div>
        이름 {name} 나이 {age}
      </div>
    </Container>
  );
};

const InputTag = ({ value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => {
    handleValueChange(newValue);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox onClick={handleClick}>
      {isEditMode ? (
        <input
          type="text"
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <div onClick={handleClick}>{newValue}</div>
      )}
    </InputBox>
  );
};
