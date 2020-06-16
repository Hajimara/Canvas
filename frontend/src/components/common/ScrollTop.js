import React, { Component } from "react";
import styled from "styled-components";

const ScrollTopStyled = styled.div`
  position: fixed;
  right: 24px;
  bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  font-size: 40px;
  padding: 0 5px;
  cursor: pointer;
  
  :active {
    box-shadow: 2px 2px 3px 3px #ccc;
    opacity: 0.5;
  }
`;

class ScrollTop extends Component {
  render() {
    return (
      <>
        <ScrollTopStyled>
          <i class="fas fa-arrow-up" />
        </ScrollTopStyled>
      </>
    );
  }
}

export default ScrollTop;
