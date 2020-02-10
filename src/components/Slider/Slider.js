import React from "react";
import { Section, Logo, MainImage } from "./Slider.styles";

class Slider extends React.Component {
  render() {
    return (
      <Section>
        <MainImage src="images/main.png" />
        <Logo src="images/logo.png" alt="logo" />
      </Section>
    );
  }
}

export default Slider;
