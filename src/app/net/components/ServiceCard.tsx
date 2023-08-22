'use client'
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const ServiceCard = ({ title, description, link }) => {
  return (
    <Link href={link} passHref>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
      >
        <Heading size="md">{title}</Heading>
        <Text mt={2}>{description}</Text>
      </Box>
    </Link>
  );
};

export default ServiceCard;
