// app/layout.tsx
'use client'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'

import {ChevronDownIcon} from '@chakra-ui/icons'
import Link from 'next/link'
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          바로가기
        </MenuButton>
        <MenuList>
        <MenuItem><Link href = {'/data/upload'}>데이터 업로드</Link></MenuItem>
          <MenuItem><Link href = {'/data/clean'}>데이터 초기 전처리</Link></MenuItem>
          <MenuItem><Link href = {'/data/check'}>모델 결과 확인</Link></MenuItem>
          <MenuItem><Link href = {'/data/visualization'}>데이터 시각화</Link></MenuItem>
      </MenuList>
        </Menu>
        {children}
      </>
      
  );
}