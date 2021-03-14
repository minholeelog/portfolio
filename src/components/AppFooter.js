import React from "react";
import styled from "styled-components";

const date = new Date();
const currentYear = date.getFullYear();

function AppFooter() {
  return (
    <FooterContainer>
      <FooterColumn>{currentYear} Lee Minho All rights reserved.</FooterColumn>
      <FooterColumn>
        <select name='' disabled>
          <option value='ko'>한국어</option>
          <option value='en'>English</option>
        </select>
      </FooterColumn>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  right: 50;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 0px;
`;

const FooterColumn = styled.div``;

export default AppFooter;
