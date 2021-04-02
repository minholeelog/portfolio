import React from 'react';
import styled from 'styled-components';
import { infos, frontSkills, etcSkills } from './Infos';

const About = () => {
  return (
    <main className="main">
      <AboutContainer>
        <AboutColumn>
          <AboutSubtitle>&#60;about /&#62;</AboutSubtitle>
          <InnerColumn>
            <AboutRow>
              <h3>personal info</h3>
              {infos.map((item) => {
                return (
                  <AboutList key={item.id}>
                    <i className={item.icon}></i>
                    <AboutContent>{item.content}</AboutContent>
                  </AboutList>
                );
              })}
            </AboutRow>
            <AboutRow>
              <h3>education</h3>
              <AboutList>
                <i className="fas fa-university"></i>
                <AboutContent>2020.10 구공팩토리 수료</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fas fa-certificate"></i>
                <AboutContent>2016.07 정보처리기사 취득</AboutContent>
              </AboutList>
            </AboutRow>
          </InnerColumn>
        </AboutColumn>
        <AboutColumn>
          <AboutSubtitle>&#60;skills /&#62;</AboutSubtitle>
          <InnerColumn>
            <AboutRow>
              <h3>frontend</h3>
              {frontSkills.map((item) => {
                return (
                  <AboutList key={item.id}>
                    <i className={item.icon}></i>
                    <AboutContent>{item.content}</AboutContent>
                  </AboutList>
                );
              })}
            </AboutRow>
            <AboutRow>
              <h3>etc.</h3>
              {etcSkills.map((item) => {
                return (
                  <AboutList key={item.id}>
                    <i className={item.icon}></i>
                    <AboutContent>{item.content}</AboutContent>
                  </AboutList>
                );
              })}
            </AboutRow>
          </InnerColumn>
        </AboutColumn>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.div`
  width: 80%;
  min-height: 70vh;
  display: grid;
`;

const AboutColumn = styled.div``;

const AboutSubtitle = styled.h2`
  margin: 15px 0;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

const InnerColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutRow = styled.ul`
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    &:nth-child(2) {
      margin: 20px 0;
    }
  }
`;

const AboutList = styled.li`
  padding: 8px 10px;
  display: flex;
  align-items: center;
`;

const AboutContent = styled.span`
  display: inline-block;
  margin-left: 8px;
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export default About;
