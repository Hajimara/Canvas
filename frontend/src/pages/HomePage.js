import React, { Component } from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import SideBarContainer from "../containers/common/SideBarContainer";
import ScrollTopContainer from "../containers/common/ScrollTopContainer";

class HomePage extends Component {
  render() {
    return (
      <>
        <SideBarContainer />
        <HeaderContainer />
        <ScrollTopContainer />
      </>
    );
  }
}

export default HomePage;
