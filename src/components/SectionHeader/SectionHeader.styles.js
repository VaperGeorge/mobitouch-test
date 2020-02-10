import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 400;
  position: relative;
  color: #9b6d4e;

  &:before {
    content: "";
    width: 120%;
    height: 1px;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    background: #000;
  }
`;

export const SectionText = styled.span`
  font-size: 12px;
  max-width: 500px;
  margin: 0 auto;
  display: inline-block;
  padding-bottom: 140px;
`;
