import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding-top: 120px;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  border: 1px solid #7b7b7b;
  border-radius: 15px;
  padding: 15px;
  z-index: 1;
  &:focus-within {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
  input {
    flex: auto;
    border: none;
    outline: none;
    font-size: 15px;
    padding: 0;
  }
  div {
    cursor: pointer;
  }
`;

const OptionBox = styled.ul`
  background-color: #ffffff;
  z-index: 3;
  list-style: none;
  margin: 0;
  padding: 5px 0px 10px 0px;
  z-index: 2;
  border: 1px solid #7b7b7b;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  margin-top: -15px;
  li {
    padding-left: 15px;
    font-size: 15px;
  }
  li:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  .focus {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Autocomplete = () => {
  const singers = [
    "아이유",
    "홍진영",
    "박정현",
    "이효리",
    "백지영",
    "윤하",
    "제니",
    "최예나",
    "로제",
    "이수영",
    "조유리",
    "보미",
    "태연",
    "아이린",
  ];
  const [isOn, setIsOn] = useState(false);
  const [options, setOptions] = useState(singers);
  const [index, setIndex] = useState(-1);
  const [value, setValue] = useState("");

  // 타자를 입력했을 때 함수
  const inputValue = (e) => {
    // console.log(123123);
    setValue(e.target.value);
    const filteredOptions = singers.filter((singer) =>
      singer.includes(e.target.value)
    );
    if (e.target.value !== "" && filteredOptions.length) {
      setIsOn(true);
      setOptions(filteredOptions);
    } else {
      setIsOn(false);
    }
    setIndex(-1);
  };

  // option을 클릭했을 때 함수
  const clickOption = (option) => {
    // console.log(option);
    setValue(option);
    const filteredOptions = options.filter((el) => el.includes(option));
    setOptions(filteredOptions);
  };

  // x를 눌렀을 때 함수
  const deleteValue = () => {
    setValue("");
    setIsOn(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && index >= 0 && e.target.value !== "") {
      setValue(options[index]);
      setOptions([options[index]]);
      setIndex(-1);
    }
    if (
      e.key === "ArrowDown" &&
      index < options.length - 1 &&
      e.target.value !== ""
    ) {
      setIndex(index + 1);
      // setValue(options[index + 1]);
    }

    if (e.key === "ArrowUp" && index > 0 && e.target.value !== "") {
      e.preventDefault();
      setIndex(index - 1);
      // setValue(options[index - 1]);
    }
  };

  return (
    <Container>
      <InputBox>
        <input value={value} onChange={inputValue} onKeyDown={handleKeyUp} />
        <div onClick={deleteValue}>&times;</div>
      </InputBox>
      {isOn ? (
        <OptionBox>
          {options.map((option, idx) => {
            return (
              <li
                key={idx}
                onClick={() => clickOption(option)}
                className={idx === index ? "focus" : ""}
              >
                {option}
              </li>
            );
          })}
        </OptionBox>
      ) : null}
    </Container>
  );
};
