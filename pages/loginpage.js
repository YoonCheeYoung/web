'use client'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from '../components/Logo'
import { PasswordField } from '../components/PasswordField'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import axios from "axios"

export default function Login() {
  const router = useRouter()
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
// Empty dependency array to run this effect only once
  
  const handleLogin = async () => {
    // ... Fetch request and response handling ...
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', id);
    formData.append('password', password);

    try {
      const response = await fetch('http://115.68.193.117:8000/users/token', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);

        // Retrieve the intended route from localStorage
        const intendedRoute = localStorage.getItem('intendedRoute');

        if (intendedRoute) {
          // Clear the intended route from localStorage
          localStorage.removeItem('intendedRoute');

          // Navigate to the intended route
          router.replace(intendedRoute);
        } else {
          // If intended route is not available, redirect to a default route
          router.replace('/'); // Replace with your default route
        }
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
  <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>로그인 하여 진행해 주세요</Heading>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="id">ID</FormLabel>
              <Input id="id" type="string" value={id} onChange={e => setId(e.target.value)} />
            </FormControl>
            <PasswordField value={password} onChange={e => setPassword(e.target.value)}/>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
          </HStack>
          <Stack spacing="6">
            <Button onClick={handleLogin}>로그인</Button>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                기타 문의 사항은 담당자에게 문의 해주세요
              </Text>
              <Divider />
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)
  }