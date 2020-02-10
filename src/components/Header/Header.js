import React from "react";
import { List, ListItem } from "./Header.styles";

class Header extends React.Component {
  render() {
    return (
      <header>
        <List className="headerMenu">
          <ListItem className="active">ABOUT </ListItem>
          <ListItem>DISCOGRAPHY </ListItem>
          <ListItem>Concert tours </ListItem>
          <ListItem>latter compositions </ListItem>
          <ListItem>new tracks </ListItem>
          <ListItem>Upcoming Events </ListItem>
          <ListItem>History </ListItem>
          <ListItem>contact</ListItem>
        </List>
      </header>
    );
  }
}
export default Header;
