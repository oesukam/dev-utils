import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import SideMenu from '../SideMenu';


const Container = styled.div`
  background-color: ${COLORS.secondaryColor};
  color: red;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const Layout = () =>
  (
    <Container>
      <SideMenu />
    </Container>
  )

export default Layout;