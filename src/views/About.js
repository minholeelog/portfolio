import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <main className="main">
      <AboutContainer>
        <AboutColumn>
          <AboutSubtitle>&#60;about /&#62;</AboutSubtitle>
          <InnerColumn>
            <AboutRow>
              <h3>personal info</h3>
              <AboutList>
                <i className="fas fa-user"></i>
                <AboutContent>이민호</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fas fa-phone"></i>
                <AboutContent>010) 8436-4785</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fas fa-at"></i>
                <AboutContent>minholee.log@gmail.com</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-github"></i>
                <AboutContent>minholeelog</AboutContent>
              </AboutList>
            </AboutRow>
            <AboutRow>
              <h3>education</h3>
              <AboutList>2020.10 구공팩토리 수료</AboutList>
              <AboutList>2017.02 한국교통대 컴퓨터정보공학 학사</AboutList>
              <AboutList>2016.07 정보처리기사 취득</AboutList>
            </AboutRow>
          </InnerColumn>
        </AboutColumn>
        <AboutColumn>
          <AboutSubtitle>&#60;skills /&#62;</AboutSubtitle>
          <InnerColumn>
            <AboutRow>
              <h3>frontend</h3>
              <AboutList>
                <i className="fab fa-js-square"></i>
                <AboutContent>ES6 문법, 클래스에 대한 이해</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-react"></i>
                <AboutContent>
                  함수형 컴포넌트, 훅스와 라우터에 대한 이해
                </AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-vuejs"></i>
                <AboutContent>디렉티브와 컴포넌트 활용</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-html5"></i>
                <AboutContent>의미있는 태그를 활용한 마크업</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-css3-alt"></i>
                <AboutContent>Grid, Flex-box를 활용한 레이아웃</AboutContent>
              </AboutList>
            </AboutRow>
            <AboutRow>
              <h3>etc.</h3>
              <AboutList>
                <i className="fab fa-node-js"></i>
                <AboutContent>라우터, 템플릿 엔진 활용</AboutContent>
              </AboutList>
              <AboutList>
                <i className="fab fa-git-square"></i>
                <AboutContent>형상 관리를 위한 기본적인 사용 방법</AboutContent>
              </AboutList>
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

const AboutRow = styled.div`
  padding: 0 10px;

  &:nth-child(2) {
    margin: 20px 0;
  }
`;

const AboutList = styled.ul`
  padding: 8px 10px;
`;

const AboutContent = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

export default About;
