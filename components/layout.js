import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  MenuDivider,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';


export default function MenuLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          바로가기
        </MenuButton>
        <MenuList>
          <MenuGroup title='정성조사'>
            <MenuItem>
              <Link href='/net/data/upload'>데이터 업로드</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/net/data/clean'>데이터 초기 전처리</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/net/data/check'>모델 결과 확인</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/net/dashboard'>데이터 시각화</Link>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title='초거대 AI'>
            <MenuItem>
              <Link href='/'>초거대 AI</Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      {children}
    </>
  );
}
