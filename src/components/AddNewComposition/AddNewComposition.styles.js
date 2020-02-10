import styled from "styled-components";

export const FormContent = styled.div`
  width: 100%;
  .date {
    color: grey;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 10px;
  }
  .author {
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    padding-top: 3px;
    margin-top: 3px;
    display: inline-block;
    text-transform: uppercase;
  }
  p {
    span {
      font-weight: 600;
    }
  }
`;
