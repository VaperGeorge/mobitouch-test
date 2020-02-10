import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-bottom: 350px;
  background: url("images/discography-back.png") bottom no-repeat;
`;

export const SectionList = styled.div`
`;
export const SectionListItem = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding-bottom: 100px;

  .left-col {
    width: calc(45% - 25px);
    padding-right: 25px;
    padding-top: 25px;

    .date {
      color: grey;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }

    .album {
      width: 100%;
      font-size: 13px;
      font-weight: 700;
      padding-top: 3px;
      margin-top: 3px;
      display: inline-block;
      text-transform: uppercase;
      border-top: 1px solid #000;
    }
  }
  .right-col {
    width: 55%;

    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      padding: 19px 78px;
      font-weight: 600;
      font-size: 15px;
      background: url("images/hover.png") center no-repeat;
      display: inline-block;
      -webkit-filter: grayscale(100%);
      filter: gray;
      transition: all 0.4s ease;

      &:hover {
        -webkit-filter: grayscale(0%);
        filter: none;
      }
    }
  }
`;
export const ListItemTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 10px;
`;
export const ListItemDesc = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: lightgrey;
  margin-bottom: 30px;
`;
