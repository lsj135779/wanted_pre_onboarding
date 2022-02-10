import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagBox = styled.div`
  border: 1px solid #7b7b7b;
  border-radius: 10px;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 8px;
    margin: 8px 0 0 0;
    li {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      padding: 0 8px;
      font-size: 15px;
      border-radius: 5px;
      margin: 0 8px 8px 0;
      background: #4701cd;
      .closeButton {
        width: 15px;
        height: 15px;
        text-align: center;
        font-size: 15px;
        margin-left: 8px;
        color: #4701cd;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
      }
    }
  }
  input {
    flex: 1;
    border: none;
    height: 30px;
    font-size: 15px;
    margin: 8px;
    outline: transparent;
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

export const Tag = () => {
  const [tags, setTags] = useState(["CodeStates", "JJang"]);

  // 태그 추가하는 함수
  const addTag = (e) => {
    if (
      e.target.value !== "" &&
      !tags.includes(e.target.value) &&
      e.target.value.length <= 20
    ) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  // 태그 삭제하는 함수
  const removeTag = (idx) => {
    setTags([...tags.slice(0, idx), ...tags.slice(idx + 1, tags.length)]);
  };

  return (
    <Container>
      <TagBox>
        <ul>
          {tags.map((tag, idx) => {
            return (
              <li key={idx}>
                <span>{tag}</span>
                <span className={"closeButton"} onClick={() => removeTag(idx)}>
                  &times;
                </span>
              </li>
            );
          })}
        </ul>
        <input
          type={"text"}
          onKeyUp={(e) => (e.key === "Enter" ? addTag(e) : null)}
          placeholder="Press enter to add tags"
        ></input>
      </TagBox>
    </Container>
  );
};
