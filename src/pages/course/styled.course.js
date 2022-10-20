/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Link as LinkToId } from 'react-scroll';
import animation from '../../components/styled/animation';
import layerImg from '../../assets/images/Layer.png';
import { ReactComponent as BackArrowSvg } from '../../assets/icons/backArrow.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 100px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 67vh;
  box-sizing: border-box;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const Col = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Paragraph = styled.div`
  font-weight: ${({ type }) => ((type === 'header' || type === 'title') && 'bold')};
  font-size: ${({ type }) => (type === 'header' ? '46px' : type === 'title' ? '30px' : type === 'text' ? '22px' : '26px')};
  font-family: ${({ type }) => ((type === 'header' || type === 'title') ? 'Montserrat' : 'Bahnschrift')} !important; 
  text-shadow: ${({ type }) => (type === 'header' && '3px 3px 2px rgba(0, 0, 0, 0.25)')};
  text-align: ${({ align }) => (align)};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  color: #310A31;
  @media (max-width: 1200px) {
    font-size: ${({ type }) => (type === 'header' ? '40px' : type === 'title' ? '24px' : type === 'text' ? '16px' : '20px')};
  }
  @media (max-width: 900px) {
    font-size: ${({ type }) => (type === 'header' ? '24px' : type === 'title' ? '20px' : type === 'text' ? '14px' : '14px')};
    text-align: ${({ align }) => (align || 'center')};
  }
  @media (max-width: 768px) {
    width: ${({ type }) => (type === 'header' && '90%')};
  }
`;

export const ButtonContainerDesktop = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const ButtonContainerMobile = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const Button = styled.button`
  min-width: 228px;
  height: 62px;
  background: #F7E7FF;
  border: 3px solid #4A294A;
  box-sizing: border-box;
  border-radius: 56px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: #4A294A;
  margin: auto;
  margin-top: 70px;
  :focus {
    outline: none;
  }
  :hover {
    animation: ${animation.changeCardPosition} 0.5s ease both, ${animation.changeTextColor} 0.5s ease both;
  }
  :not(:hover) {
    animation: ${animation.restoreCardPosition()} 0.5s ease both, ${animation.restoreTextColor} 0.5s ease both;
  }
  :active {
  }
  @media (max-width: 900px) {
    min-width: 165px;
    height: 44px;
    margin-top: 0px;
    margin-bottom: 30px;
    border-radius: 17px;
    font-size: 16px;
    :hover {
      animation: none;
    }
    :not(:hover) {
      animation: none;
    }
  }
`;

export const Image = styled.img`
  width: 80%;
  opacity: ${({ imageChanged }) => (imageChanged ? 0 : 1)};
  transform: ${({ imageChanged }) => (imageChanged ? 'scale(0.5)' : 'scale(1)')};
  transition: 50ms;
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Bg = styled.div`
  height: 100%;
  width: 40%;
  background: url(${layerImg}) center center / contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    width: 50%;
  }
  @media (max-width: 1050px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.div`
  box-sizing: border-box;  
  overflow-y: auto;
  width: 575px;
  height: 320px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(74, 41, 74, 0.35);
    box-shadow: inset 0 0 0 2px #fff; 
  }
  ::-webkit-scrollbar-thumb {
    background: #836DF3; 
    /* box-shadow: 0px 2px 2px 2px rgba(131, 109, 243, 0.2); */
    border-radius: 56px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #715bdf
  }
  @media (max-width: 1200px) {
    /* margin-top: 20px;
    margin-bottom: 20px; */
    /* padding: 0 8px; */
    width: 400px;
    height: 100%;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;  
    width: 80%;
    height: 150px;
  }
  @media (max-width: 768px) {
    padding: 0 8px;
    width: 95%;
    height: 150px;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    width: 95%;
    flex-wrap: wrap;
  }
`;

export const BottomCol = styled.div`
  width: 200px;
  @media (max-width: 900px) {
    width: 140px;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(LinkToId)`
  font-family: Montserrat !important;
  font-weight: 600;
  font-size: 20px;
  color: ${({ border }) => (border ? '#B4F759' : '#fff')};
  border: ${({ border }) => (border ? '2px solid #B4F759' : '0')};;
  border-radius: 17px;
  text-decoration: none;
  padding: 5px 23px;
  flex: none;
  cursor: pointer;
`;

export const BackArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  cursor: pointer;
`;

export const BackArrow = styled(BackArrowSvg)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 10%;
  }
`;
