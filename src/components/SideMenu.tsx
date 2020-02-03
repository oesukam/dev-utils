import React from 'react';
import styled from 'styled-components';
import COLORS from '../constants/colors';

const Container = styled.div`
  background-color: ${COLORS.primaryColor};
  color: ${COLORS.carolinaBlue};
  position: absolute;
  left: 0;
  top: 0;
  width: 310px;
  bottom: 0;
  padding: 15px;
`

const MenuHeader = styled.header`
  color: #fff;
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
`

const MenuItem = styled.header`
  color: ${COLORS.grayColor};
  font-size: 20px;
  width: 100%;
  margin-top: 10px;
`

const menuItems = [
  {
    icon: '',
    text: 'Header',
    to: '/',
    type: 'header'
  },
  {
    icon: '',
    text: 'Item 1',
    to: '/',
    type: 'item'
  },
  {
    icon: '',
    text: 'Item 2',
    to: '/',
    type: 'item'
  }
]

const allMenuItems = () => menuItems.map((item => {
  if (item.type === 'header') {
    return <MenuHeader>{item.text}</MenuHeader>
  }
  return <MenuItem>{item.text}</MenuItem>
}))

const SideMenu = () =>
  (
    <Container>
      {allMenuItems()}
    </Container>
  )

export default SideMenu;