import React from "react";
import { NavLink } from "react-router-dom";
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
          <ListItem>
            <NavLink exact to="/" activeClassName="is-active">
              HOME
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/discography" activeClassName="is-active">
              DISCOGRAPHY
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/concert_tours" activeClassName="is-active">
              Concert tours
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/compositions_list" activeClassName="is-active">
              latter compositions
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/slider_comments" activeClassName="is-active">
              Upcoming Events
            </NavLink>
          </ListItem>
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
