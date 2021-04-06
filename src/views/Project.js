import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const projects = [
  {
    id: 1,
    title: 'Parking Factory',
    description: '주차장 입,출차 무인 정산 시스템',
    stack: 'JavaScript, Node.js, MySQL, CSS',
    repository: 'https://github.com/minholeelog/parking-factory-v1.0',
    roles: '기획,서버 구축, DB 설계, 입,출차 기능 구현',
    thumbnail: '/projects/parking_factory.png',
  },
];

const Project = () => {
  return (
    <main className="main">
      <h1>💬 준비중...</h1>
      <ProjectContainer>
        <ProjectList>
          {projects.map((project) => {
            return (
              <ProjectItem key={project.id}>
                <ProjectLink
                  to={{
                    pathname: `/project/${project.id}`,
                    state: {
                      id: project.id,
                      title: project.title,
                      description: project.description,
                      stack: project.stack,
                      repository: project.repository,
                      roles: project.roles,
                    },
                  }}
                >
                  <ProjectThumbnail
                    src={project.thumbnail}
                    alt={project.name}
                  />
                </ProjectLink>
              </ProjectItem>
            );
          })}
        </ProjectList>
      </ProjectContainer>
    </main>
  );
};

const ProjectContainer = styled.div`
  width: 80%;
  /* min-height: 80vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectItem = styled.li`
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ProjectLink = styled(Link)``;

const ProjectThumbnail = styled.img`
  width: 20vw;
  border-radius: 8px;
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 40vw;
  }

  @media screen and (max-width: 480px) {
    width: 50vw;
  }
`;

export default Project;
