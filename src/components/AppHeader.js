import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../assets/images/avatar.png';

const AppHeader = ({ info }) => {
  const { github } = info;
  return (
    <HeaderContainer>
      <HeaderNav>
        <Home to="/" exact>
          <Logo />
          <Title>minholee.log</Title>
        </Home>
        <NavList>
          <NavItem>
            <Linker to="/" exact>
              Home
            </Linker>
          </NavItem>
          <NavItem>
            <Linker to="/about">About</Linker>
          </NavItem>
          <NavItem>
            <Linker to="/project">Projects</Linker>
          </NavItem>
          <NavItem>
            <OuterLink href={github} target="_blank" rel="noreferrer">
              GitHub
            </OuterLink>
          </NavItem>
        </NavList>
      </HeaderNav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  background-color: rgba(245, 245, 245, 0.6);
  backdrop-filter: blur(4px);
  position: sticky;
  top: 0;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

const HeaderNav = styled.nav`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Home = styled(NavLink)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Logo = styled.img.attrs({ src: avatar, alt: 'Logo' })`
  width: 40px;
  @media screen and (max-width: 768px) {
    width: 25px;
  }
`;

const Title = styled.span`
  font-size: 28px;
  margin-left: 10px;
  &:hover {
    color: #79a3d9;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavItem = styled.li``;

const Linker = styled(NavLink)`
  width: 100%;
  padding: 5px 5px 4px;
  margin: 10px;
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;

  color: #000;
  &:hover {
    color: #79a3d9;
    border-bottom: 3px solid #79a3d9;
  }
  &.active {
    color: #79a3d9;
    border-bottom: 3px solid #79a3d9;
  }
  &.active:hover {
    color: #79a3d9;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const OuterLink = styled.a`
  width: 100%;
  font-size: 19px;
  font-weight: 600;
  padding: 5px 5px 2px;
  margin: 10px;
  color: #000;
  text-transform: uppercase;

  &:hover {
    color: #79a3d9;
    border-bottom: 3px solid #79a3d9;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default AppHeader;
