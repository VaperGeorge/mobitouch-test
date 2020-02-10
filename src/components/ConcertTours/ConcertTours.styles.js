import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-bottom: 150px;
  padding-top: 150px;
  background: url("images/concert-back.png") bottom no-repeat;
  background-size: contain;
  
  .concerts {
    padding-top: 200px;
  }
`;

export const ConcertItem = styled.div`
  text-align: left;
  max-width: 650px;

  .item-top {
    &_date {
      color: grey;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 600;
    }

    &_album {
      width: 100%;
      max-width: 400px;
      font-size: 13px;
      font-weight: 700;
      padding-top: 3px;
      margin-top: 3px;
      text-transform: uppercase;
      border-top: 1px solid #000;
    }
  }

  .item-content {
    &_title {
      font-size: 22px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 10px;
    }

    &_desc {
      font-size: 13px;
      font-weight: 500;
      color: grey;
      margin-bottom: 30px;
    }

    .buy-btn {
      color: black;
      text-decoration: none;
      padding: 19px 78px;
      font-weight: 600;
      font-size: 15px;
      display: inline-block;
      border: 1px solid black;
      transition: all 0.4s ease;
      i {
        padding-left: 15px;
      }

      &:hover {
        background: black;
        color: white;
      }
    }
  }
`;
