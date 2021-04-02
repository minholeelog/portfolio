import React from 'react';
import styled from 'styled-components';
import WordCloudContainer from '../components/WordCloud';

const Home = () => {
  return (
    <main className="main">
      <HomeTitle>더 나은 사용자 경험을 위해 끊임없이 고민하는 개발자</HomeTitle>
      <WordCloudContainer />
    </main>
  );
};

const HomeTitle = styled.h2`
  font-family: 'Yeon Sung', cursive;
  font-size: 28px;
`;

export default Home;
