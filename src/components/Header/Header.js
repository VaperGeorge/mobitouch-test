import React from "react";
import { List, ListItem, BurgerButton, HeaderPage } from "./Header.styles";

class Header extends React.Component {
  state = {
    mobileMenuOpened: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      mobileMenuOpened: !prevState.mobileMenuOpened
    }));
  };

  render() {
    return (
      <HeaderPage>
        <List className={this.state.mobileMenuOpened ? "opened" : ""}>
          <ListItem className="active">ABOUT </ListItem>
          <ListItem>DISCOGRAPHY </ListItem>
          <ListItem>Concert tours </ListItem>
          <ListItem>latter compositions </ListItem>
          <ListItem>new tracks </ListItem>
          <ListItem>Upcoming Events </ListItem>
          <ListItem>History </ListItem>
          <ListItem>contact</ListItem>
        </List>

        <BurgerButton onClick={this.toggleMenu}>
          <i className="fa fa-bars"></i>
        </BurgerButton>
      </HeaderPage>
    );
  }
}
export default Header;
