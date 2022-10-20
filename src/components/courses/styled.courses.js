import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StyledCard from '../styled/card';
import StyledText from '../styled/text';
import animation from '../styled/animation';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1600px;
  margin: auto;
  margin-top: 200px;  
  box-sizing: border-box;
  @media (max-width: 810px) {
    margin-top: 50px;  
  }
`;

export const Text = styled(StyledText)`
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Icon = styled.div`
  width: 25%;
  height: 100px;
  background: #4A294A;
  mask-image: url(${(({ src }) => src)});
  mask-repeat: no-repeat;
  mask-size: contain;
  @media (max-width: 810px) {
    height: 100%;
  }
`;

export const Card = styled(StyledCard)`
  justify-content: flex-start;
  padding-top: 33px;
  background: #F7E7FF;
  cursor: pointer;
  :hover {
    animation: ${animation.changeCardPosition} 0.5s ease both;
    ${Text}{
      animation: ${animation.changeTextColor} 0.5s ease both;
    }
    ${Icon}{
      animation: ${animation.changeIconColor} 0.5s ease both;
    }
  }
  :not(:hover) {
    animation: ${animation.restoreCardPosition()} 0.5s ease both;
    ${Text}{
      animation: ${animation.restoreTextColor} 0.5s ease both;
    }
    ${Icon}{
      animation: ${animation.restoreIconColor} 0.5s ease both;
    }
  }
  @media (max-width: 810px) {
    min-width: 251px;
    min-height: 204px;
    max-width: 251px;
    max-height: 204px;
    flex-shrink: 0;
    scroll-snap-align: center;
    padding-bottom: 20px;
    :hover {
      animation: none;
      ${Text}{
        animation: none;
      }
      ${Icon}{
        animation: none;
      }
    }
    :not(:hover) {
      animation: none;
      ${Text}{
        animation: none;
      }
      ${Icon}{
        animation: none;
      }
    }
  }
`;

export const ModalCard = styled(StyledCard)`
  flex-direction: row;
  min-width: 50%;
  min-height: 655px;
  background: #F7E7FF;
  border: 4px solid #663FD3;
  box-sizing: border-box;
  border-radius: 44px;
  @media (max-width: 1000px) {
    min-height: 240px;
    min-width: 330px;
  } 
`;

export const ModalImg = styled.img`
  height: 90%;
`;

export const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 55%;
`;

export const ModalHeader = styled.div`
  font-family: Montserrat !important;
  font-weight: bold;
  font-size: 46px;
  text-align: center;
  color: #000000;
  @media (max-width: 1000px) {
    font-size: 22px;
  } 
`;

export const Bold = styled.b`
  font-weight: 600;
`;

export const ModalText = styled.div`
  font-family: Montserrat !important;
  font-size: 36px;
  color: #000000;
  max-width: 436px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const CloseContainer = styled.div`
  width: 0;
  height: 80%;
`;

export const CloseImg = styled.img`
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 17px;
  }
`;
