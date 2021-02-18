import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import colors from '../../constants/colors';

type HeaderWrapperType = {
  children: any
  category?: string
  name: string
};

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${colors.grayColor};
  margin-bottom: 5px;
  user-select: none;
`;

const ArrowIcon = styled.img`
  height: 20px;
  width: 20px;
  padding-bottom: 0px;
`;

const renderIcon = (text: string) => 
  <>
    <ArrowIcon src={arrowRightIcon} alt="Arrow icon" />
    {text}
  </>

const WrapperContainer = styled.div`
  width: 100%;
  padding: 10px 10px 0 10px;
`;

const Wrapper:FunctionComponent<HeaderWrapperType> = ({ children, category, name }) =>
  <WrapperContainer>
    <Header>
    { category ?  renderIcon(category) : null }
    { name ?  renderIcon(name) : null }
    </Header>
    {children}
  </WrapperContainer>

export default Wrapper;
