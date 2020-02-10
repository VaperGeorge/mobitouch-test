import React from "react";
import { SectionTitle, SectionText, SectionHeaderWrapper } from "./SectionHeader.styles";

class SectionHeader extends React.Component {
  render() {
    return (
      <SectionHeaderWrapper>
        <SectionTitle>{this.props.title}</SectionTitle>
        <SectionText>{this.props.desc}</SectionText>
      </SectionHeaderWrapper>
    );
  }
}
export default SectionHeader;
