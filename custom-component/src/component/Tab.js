import styled from "styled-components";
import { useState } from "react";

const Menu = styled.ul`
  background-color: #dcdcdc;
  color: #7b7b7b;
  font-weight: bold;
  display: flex;
  list-style: none;
  height: 50px;
  cursor: pointer;
  li {
    padding: 15px 0 0 10px;
    flex: auto;
  }
  .selected {
    color: white;
    background: #4701cd;
  }
`;

const Info = styled.div`
  text-align: center;
  margin-top: 8rem;
`;

export const Tab = () => {
  const [clickedMenu, setClickedMenu] = useState(null);

  const menuList = [
    { name: "Tab1", info: "Tab menu ONE" },
    { name: "Tab2", info: "Tab menu TWO" },
    { name: "Tab3", info: "Tab menu THREE" },
  ];

  const selectMenu = (idx) => {
    setClickedMenu(idx);
  };

  return (
    <>
      <Menu>
        {menuList.map((menu, idx) => {
          return (
            <li
              key={idx}
              className={clickedMenu === idx ? "selected" : ""}
              onClick={() => selectMenu(idx)}
            >
              {menu.name}
            </li>
          );
        })}
      </Menu>
      <Info>{clickedMenu !== null ? menuList[clickedMenu].info : null}</Info>
    </>
  );
};
