import styled from "styled-components";

export const HeaderPage = styled.header`
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 10px 0 8px 15px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background-color: darkorange;
    width: 250px;
    z-index: 9;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.4s ease;
    transform: translateX(100%);

    &.opened {
      transform: translateX(0);
    }
  }
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

  @media (max-width: 1280px) {
    margin: 0 10px;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;
export const BurgerButton = styled.button`
  display: none;
  i {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
