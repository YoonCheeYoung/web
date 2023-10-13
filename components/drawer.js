import React, { useState } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Stack
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function MenuLayout({
  children, // will be a page or nested layout
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Button
        rightIcon={<ChevronRightIcon />}
        onClick={openDrawer}
      >
        메뉴 바로가기
      </Button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>메뉴</DrawerHeader>
          <DrawerBody>
            <Stack spacing='24px'>
            <Link href='/net/data-upload'>
              데이터 업로드
            </Link>
            </Stack>
            <Stack spacing='24px'>
            <Link href='/net/data-check'>
              데이터 초기 전처리
            </Link>
            </Stack>
            <Stack spacing='24px'>
            <Link href='/net/data-visual'>
              모델 결과 확인
            </Link>
            </Stack>
            <Stack spacing='24px'>
            <Link href='/net/data-dashboard'>
              데이터 시각화
            </Link>
            </Stack>
            <Stack spacing='36px'>
            {/* <Link href='/'>
              초거대 AI
            </Link> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {children}
    </>
  );
}
