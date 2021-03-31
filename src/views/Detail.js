import React from 'react';
import styled from 'styled-components';

function Detail(props) {
  const {
    location: {
      state: { title, description, stack, repository, roles },
    },
  } = props;
  return (
    <main className="main">
      <h1>💬 준비중...</h1>
      <DetailContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{stack}</p>
        <p>{roles}</p>
        <a href={repository} target="_blank" rel="noreferrer">
          <i className="fab fa-github">Repository</i>
        </a>
      </DetailContainer>
    </main>
  );
}

const DetailContainer = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Detail;
