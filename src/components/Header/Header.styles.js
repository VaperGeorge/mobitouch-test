import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const ListItem = styled.li`
  padding: 20px 0;
  margin: 0 25px;
  text-transform: uppercase;
  position: relative;

  &.active {
    &:after {
      content: "";
      position: absolute;
      bottom: 10px;
      right: 50%;
      transform: translateX(50%);
      height: 2px;
      width: 100%;
      background: #000;
    }
  }
`;
