import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import menuItems, { MenuItemInterface } from './menuItems';

const Container = styled.div`
  background-color: ${COLORS.primaryColor};
  color: ${COLORS.carolinaBlue};
  width: 310px;
  padding: 15px 0;
  user-select: none;
  height: 100%;
`;

const MenuHeader = styled.header`
  color: #fff;
  font-size: 20px;
  width: 100%;
  margin-bottom: 15px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

const MenuHeaderIcon = styled.img`
  margin-right: 10px;
  height: 30px;
  width: 30px;
`;

const MenuItem = styled.a`
  display: block;
  color: ${COLORS.grayColor};
  font-size: 18px;
  width: 100%;
  cursor: pointer;
  text-transform: capitalize;
  border-left: 4px solid transparent;
  padding: 6px 0px 6px 11px;
  text-decoration: none;
  &:hover {
    border-left: 4px solid ${COLORS.carolinaBlue};
    background-color: ${COLORS.lightGrayColor};
  }
  &.active {
    border-left: 4px solid ${COLORS.carolinaBlue};
    background-color: ${COLORS.lightGrayColor};
  }
`;

const subMenuItems = (items: MenuItemInterface[] | void, parent: string) => {
  return items 
  ? items.map(item => 
    (
      <MenuItem key={item.text} href={item.to}>
      {item.text}
      </MenuItem>
      )
    )
  : null
};

const allMenuItems = () => menuItems.map((item => {
    return <>
      <MenuHeader key={item.text}>
        { item.icon ? <MenuHeaderIcon src={item.icon} /> : null}
        {item.text}
      </MenuHeader>
      {subMenuItems(item.items, item.to)}
    </>
  }));

const SideMenu = () =>
  (
    <Container>
      {allMenuItems()}
    </Container>
  );

export default SideMenu;