import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
  padding-top: 150px;

  .container {
    max-width: 1130px;
  }
`;

export const CompositionList = styled.ul`
  padding: 0;
`;

export const AddNewButtonWrapper = styled.div`
  text-align: center;

  button {
    font-size: 11px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    padding: 15px 30px;
    border: 1px solid black;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export const Item = styled.li`
  width: 100%;
  text-align: left;
  display: flex;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemLeftCol = styled.div`
  width: 50%;
  padding: 35px;
  background-color: #f5f6f6;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ItemDate = styled.span`
  color: grey;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
`;

export const ItemAlbum = styled.span`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  padding-top: 3px;
  margin-top: 3px;
  display: inline-block;
  text-transform: uppercase;
  border-top: 1px solid #000;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 10px;
`;

export const ItemDesc = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: grey;
  margin-bottom: 50px;
`;

export const ButtonEdit = styled.button`
  position: absolute;
  border: 1px solid black;
  background: none;
  padding: 0.5px 7px;
  top: 10px;
  right: 105px;
`;

export const ButtonRemove = styled.button`
  position: absolute;
  background: red;
  border: none;
  top: 10px;
  right: 35px;
  color: white;
`;

export const ItemLeftColFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemLink = styled.a`
  font-size: 11px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  padding: 15px 30px;
  border: 1px solid black;

  @media (max-width: 992px) {
    margin-bottom: 15px;
  }
`;

export const ItemSocialBlock = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: grey;
  margin-bottom: 5px;

  span {
    margin: 0 10px;
  }

  @media (max-width: 1110px) {
    span {
      margin: 0 4px;
    }
  }
`;

export const ItemRightCol = styled.div`
  width: 50%;
  position: relative;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;
