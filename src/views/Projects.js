import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const projects = [
  {
    id: 1,
    title: 'Parking Factory 1',
    description: '주차장 입,출차 무인 정산 시스템',
    stack: 'JavaScript, Node.js, MySQL, CSS',
    repository: 'https://github.com/minholeelog/parking-factory-v1.0',
    roles: '기획,서버 구축, DB 설계, 입,출차 기능 구현',
    thumbnail: '/projects/parking_factory.png',
  },
  {
    id: 2,
    title: 'Parking Factory 2',
    description: '주차장 입,출차 무인 정산 시스템',
    stack: 'JavaScript, Node.js, MySQL, CSS',
    repository: 'https://github.com/minholeelog/parking-factory-v1.0',
    roles: '기획,서버 구축, DB 설계, 입,출차 기능 구현',
    thumbnail: '/projects/parking_factory.png',
  },
  {
    id: 3,
    title: 'Parking Factory 3',
    description: '주차장 입,출차 무인 정산 시스템',
    stack: 'JavaScript, Node.js, MySQL, CSS',
    repository: 'https://github.com/minholeelog/parking-factory-v1.0',
    roles: '기획,서버 구축, DB 설계, 입,출차 기능 구현',
    thumbnail: '/projects/parking_factory.png',
  },
];

const Projects = () => {
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
                    pathname: '/detail',
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
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ProjectItem = styled.li``;

const ProjectLink = styled(Link)``;

const ProjectThumbnail = styled.img`
  width: 300px;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default Projects;
