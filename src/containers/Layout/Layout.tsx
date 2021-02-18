import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import SideMenu from './SideMenu';


const Container = styled.div`
  background-color: ${COLORS.secondaryColor};
  color: white;
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

type LayoutProps = {
  children: any
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): any =>
  (
    <Container>
      <SideMenu />
      {children}
    </Container>
  );

export default Layout;