import React from 'react';
import ReactWordCloud from 'react-wordcloud';
import styled from 'styled-components';

const words = [
  {
    text: 'Frontend',
    value: 50,
  },
  {
    text: 'Web',
    value: 50,
  },
  {
    text: 'React',
    value: 50,
  },

  {
    text: 'Node.js',
    value: 50,
  },
  {
    text: 'Vue',
    value: 50,
  },
  {
    text: 'ES6',
    value: 50,
  },
  {
    text: 'JavaScript',
    value: 50,
  },
  {
    text: 'MongoDB',
    value: 50,
  },
  {
    text: 'HTML5',
    value: 50,
  },
  {
    text: 'CSS3',
    value: 50,
  },
  {
    text: 'Git',
    value: 50,
  },
];

const options = {
  fontWeight: 500,
  fontFamily: 'Nanum Gothic',
};
const size = [700, 400];

const WordCloudContainer = () => {
  return <WordCloud words={words} size={size} options={options} />;
};

const WordCloud = styled(ReactWordCloud)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WordCloudContainer;
