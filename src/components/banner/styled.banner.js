/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Link } from 'react-scroll';
import animation from '../styled/animation';
import layerImg from '../../assets/images/Layer.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 80px;

  @media (max-width: 850px) {
    padding-top: 100px;
  };
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 72vh;
  box-sizing: border-box;
  @media (max-width: 850px) {
    flex-direction: column;
    height: 100%;
  };
`;

export const Col = styled.div`
  width: 40%;
  @media (max-width: 850px) {
    width: 100%;
    box-sizing: border-box;
  };
`;

export const Paragraph = styled.div`
  display: ${({ type }) => (type === 'header' ? 'none' : 'block')};
  font-weight: ${({ type }) => (
    type === 'title' || type === 'header'
      ? 'bold' : '500')};
  font-size: ${({ type }) => (
    type === 'title'
      ? '46px'
      : '24px'
  )};
  margin-bottom: ${({ mb }) => `${mb}px`};
  font-family: Montserrat !important;
  color: #310A31;
  text-shadow: ${({ type }) => (type === 'title' && '3px 3px 2px rgba(0, 0, 0, 0.25)')};

  @media (max-width: 1365px) {
    font-size: ${({ type }) => (
    type === 'title'
      ? '44px'
      : '22px'
  )};
  }
  @media (max-width: 1150px) {
    font-size: ${({ type }) => (
    type === 'title'
      ? '40px'
      : '20px'
  )};
  }
  @media (max-width: 900px) {
    font-size: ${({ type }) => (
    type === 'title'
      ? '25px'
      : '16px'
  )};
  }

  @media (max-width: 850px) {
    display: block;
    font-size: ${({ type }) => (
    type === 'header'
      ? '24px'
      : type === 'title'
        ? '17px'
        : '14px'
  )};
    text-shadow: none;
    margin-bottom: ${({ mb }) => `${mb / 2}px`};
    text-align: center;
  };
`;

export const Bg = styled.div`
  height: 100%;
  width: 50%;
  background: url(${layerImg}) center center / contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    padding-top: 30px;
    width: 100%;
  };
`;

export const Image = styled.img`
  width: 80%;
  opacity: ${({ imageChanged }) => (imageChanged ? 0 : 1)};
  transform: ${({ imageChanged }) => (imageChanged ? 'scale(0.5)' : 'scale(1)')};
  transition: 50ms;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 53px;
  width: 85%;
  @media (max-width: 850px) {
    margin-top: 25px;
  }
  @media (max-width: 380px) {
    margin-top: 25px;
    width: 98%;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  min-width: 286px;
  height: 63px;
  background: none;
  border: 3px solid #4A294A;
  box-sizing: border-box;
  border-radius: 56px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: #4A294A;
  margin-right: 35px;
  margin-bottom: 35px;
  :focus {
    outline: none;
  }
  :hover {
    animation: ${animation.changeCardPosition} 0.5s ease both, ${animation.changeTextColor} 0.5s ease both;
  }
  :not(:hover) {
    animation: ${animation.restoreCardPosition(true)} 0.5s ease both, ${animation.restoreTextColor} 0.5s ease both;
  }
  :active {
  }
  @media (max-width: 1520px) {
    min-width: 270px;
    height: 55px;
    font-size: 18px;
    margin-right: 20px;
  };
  @media (max-width: 1370px) {
    min-width: 260px;
    height: 50px;
    font-size: 16px;
    margin-right: 10px;
  };
  @media (max-width: 1280px) {
    min-width: 200px;
    height: 48px;
    font-size: 14px;
    border: 2px solid #4A294A;
  };
  @media (max-width: 850px) {
    min-width: 156px;
    height: 44px;
    font-size: 12px;
    margin-right: 7px;
    background: #F7E7FF;
    margin-bottom: 18px;
    :hover {
      animation: none;
    }
    :not(:hover) {
      animation: none;
    }
  };
  @media (max-width: 385px) {
    min-width: 150px;
    height: 43px;
    font-size: 11px;
    margin-right: 5px;
    background: #F7E7FF;
  };
`;

export const LinkToId = styled(Link)`
  min-width: 165px;
  height: 44px;
  background: #F7E7FF;
  border: 3px solid #4A294A;
  box-sizing: border-box;
  border-radius: 17px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: #310A31;
  margin: 30px auto;
  box-shadow: 0px 0px 10px 5px rgba(102, 63, 211, 0.15);
  text-decoration: none;
  display: none;
  :hover {
    animation: ${animation.changeCardPosition} 0.5s ease both, ${animation.changeTextColor} 0.5s ease both;
  }
  :not(:hover) {
    animation: ${animation.restoreCardPosition()} 0.5s ease both, ${animation.restoreTextColor} 0.5s ease both;
  }
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      animation: none;
    }
    :not(:hover) {
      animation: none;
    }
  }
`;

export const DirectionsText = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #4A294A;
  width: 100%;
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
`;
