import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  padding-bottom: 100px;
  padding-top: 150px;

  .compositions {
    padding: 0;
  }
  .container {
    max-width: 1130px;
  }
  .button-wrapper {
    text-align: center;
    .add-new {
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
  }
`;

export const Item = styled.li`
  width: 100%;
  text-align: left;
  display: flex;
  padding-bottom: 60px;

  .left-col {
    width: calc(50% - 70px);
    padding: 35px;
    background-color: #f5f6f6;
    position: relative;

    &__delete {
      position: absolute;
      background: red;
      border: none;
      top: 10px;
      right: 35px;
      color: white;
    }
    &__edit {
      position: absolute;
      border: 1px solid black;
      background: none;
      padding: 0.5px 7px;
      top: 10px;
      right: 105px;
    }
    &__date {
      color: grey;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
    }

    &__album {
      width: 100%;
      font-size: 13px;
      font-weight: 700;
      padding-top: 3px;
      margin-top: 3px;
      display: inline-block;
      text-transform: uppercase;
      border-top: 1px solid #000;
    }
    &__title {
      font-size: 20px;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 10px;
    }
    &__desc {
      font-size: 11px;
      font-weight: 500;
      color: grey;
      margin-bottom: 50px;
    }
    &__footer {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      a {
        font-size: 11px;
        font-weight: 500;
        color: black;
        text-decoration: none;
        padding: 15px 30px;
        border: 1px solid black;
      }
    }
    .footer {
      &__social {
        font-size: 11px;
        font-weight: 500;
        color: grey;
        margin-bottom: 5px;
        span {
          margin: 0 10px;
        }
      }
    }
  }
  .right-col {
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
  }
`;
