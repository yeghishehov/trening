import styled, { css, keyframes } from 'styled-components';
import { Link as LinkToId } from 'react-scroll';
import { Link } from 'react-router-dom';
import { fadeInDown, fadeOutUp } from 'react-animations';
import { ReactComponent as Icon } from '../../assets/icons/drop-down.svg';

export const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 82px;
  padding: 0 7%;
  z-index: 20;
  background-color: #310A31;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition: all 0.5s;
  :hover {
    opacity: 1;
  }
  @media (max-width: 1260px) {
    padding: 0 3%;
  };
  @media (max-width: 768px) {
    animation: 200ms ${({ hide }) => (hide ? keyframes`${fadeOutUp}` : keyframes`${fadeInDown}`)};
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    display: ${({ isRemoveFromDom }) => (isRemoveFromDom ? 'none' : 'flex')};
    :hover {
      opacity: ${({ hide }) => (hide ? 0 : 1)};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
    opacity: ${({ openDropDown }) => (openDropDown ? 1 : 0)};
    animation: 500ms ${({ openDropDown }) => (openDropDown ? keyframes`${fadeInDown}` : keyframes`${fadeOutUp}`)};
    position: absolute;
    top: 80px;
    left: 0;
    padding: 40px;
    box-sizing: border-box;
    flex-direction: column;
    height: calc(100vh - 80px);
    width: 100%;
    background: #310A31;
    /* border-radius: 0px 0px 43px 43px; */
    transition: opacity 1s;
  };
`;

export const DropDown = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-right: 10px;
  };
`;

const link = css`
  font-family: Montserrat !important;
  font-weight: 600;
  font-size: 20px;
  color: ${({ border }) => (border ? '#B4F759' : '#fff')};
  border: ${({ border }) => (border ? '2px solid #B4F759' : '0')};;
  border-radius: 17px;
  text-decoration: none;
  padding: 5px 23px;
  cursor: pointer;
  @media (max-width: 1150px) {
    font-size: 18px;
  }
  @media (max-width: 1070px) {
    font-size: 16px;
    padding: 5px 18px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
    padding: 5px 15px;
  }
  @media (max-width: 800px) {
    padding: 5px 12px;
  }
  @media (max-width: 730px) {
    font-size: 20px;
    padding: 5px 23px;
  }
`;

export const StyledLink = styled(Link)`${link}`;
export const StyledLinkToId = styled(LinkToId)`${link}`;

export const Lang = styled.select`
  width: 35px;
  height: 25px;
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
  box-sizing: border-box;
  border: 1px solid #FFFFFF;
  color: #fff;
  background: none;
  font-size: 15px;
  font-family: Montserrat !important;  

  -webkit-appearance: none;
  -moz-appearance: none;
  ::-ms-expand {
    display: none;
  }
  :focus {
    outline: none;
  }
`;

export const Option = styled.option`
  color: #000;
  font-size: 14px;
`;

export const DropDownIcon = styled(Icon)`
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0)')};
  transition: all 500ms;
`;
