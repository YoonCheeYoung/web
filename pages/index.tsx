'use client'
import React from 'react';
import { Center, SimpleGrid, Container } from '@chakra-ui/react';
import ServiceCard from './ServiceCard';
import { Tooltip } from '@chakra-ui/react';

const services = [
  {
    title: '정성 조사 NET 분류 AI',
    description: '정성조사 설문에 대해서 NET로 분류를 자동으로 진행해 주는 AI 입니다.',
    link: '/net/data-upload',
  },
  {
    title: '초거대 AI 활용한 대화 요약 AI',
    description: '현재 개발 중입니다.',
    link: '/service2',
  },
  // Add more services as needed
];


const cardHeight = '300px'; // Set your desired height here
const cardMargin = '16px';

const IndexPage = () => {
  return (
    <Center h="100vh"> {/* Centering vertically */}
      <Container maxW="container.lg" py={10} gap = {16}>
      <Tooltip label="Click to learn more" placement="top">
        <ServiceCard
          title={services[0].title}
          description={services[0].description}
          link={services[0].link}
          height={cardHeight}
        />
        </Tooltip>

        <Tooltip label='댜댜댜'>
        <ServiceCard
          title={services[1].title}
          description={services[1].description}
          link={services[1].link}
          height={cardHeight}
        />
        </Tooltip>

      </Container>
    </Center>
  );
};

export default IndexPage;