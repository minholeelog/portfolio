import React from "react";
import styled from "styled-components";

const date = new Date();
const currentYear = date.getFullYear();

function AppFooter({ info }) {
  const { email, github } = info;
  return (
    <Footer>
      <FooterContainer>
        <FooterColumn>{currentYear} Lee Minho All rights reserved.</FooterColumn>
        <FooterColumn>
          <FooterList>
            <FooterItem>
              <FooterLink href={github} target='_blank'>
                <i className='fab fa-github'></i>
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink href={email}>
                <i className='fas fa-at'></i>
              </FooterLink>
            </FooterItem>
          </FooterList>
          <select name='' disabled>
            <option value='ko'>한국어</option>
            <option value='en'>English</option>
          </select>
        </FooterColumn>
      </FooterContainer>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 0px;
`;

const FooterContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

const FooterColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterList = styled.ul`
  display: flex;
`;

const FooterItem = styled.li`
  margin-right: 15px;
`;

const FooterLink = styled.a`
  &:hover {
    color: #184059;
  }
`;

export default AppFooter;
