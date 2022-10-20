import styled from 'styled-components';
import Card from '../styled/card';
import StyledText from '../styled/text';
import animation from '../styled/animation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 600px;
  box-sizing: border-box;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 1350px) {
    width: 90vw;
  }
  @media (max-width: 1210px) {
    width: 95vw;
  }
  @media (max-width: 1150px) {
    width: 97vw;
  }
  @media (max-width: 930px) {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: 25px;
`;

export const DesktopView = styled.div`
  @media (max-width: 930px) {
    display: none;
  }
`;

export const MobileView = styled.div`
  display: none;
  @media (max-width: 930px) {
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory; 
    -webkit-overflow-scrolling: touch;
  }
`;

export const CardContainer = styled.div`
  display: flex !important;
  justify-content: center;
  flex-shrink: 0;
  scroll-snap-align: center;
`;

export const Avatar = styled.div`
  background: url(${({ url }) => url}) center center / cover no-repeat;
  border-radius: 50%;
  height: 176px;
  width: 170px;
  border: 3px solid #4A294A;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 17px;
  @media (max-width: 768px) {
    height: 116px;
    width: 120px;
  }
  @media (max-width: 940px) {
    margin-top: 22px;
    margin-bottom: 29px;
    height: 106px;
    width: 110px;
  }
`;

export const Text = styled(StyledText)`
  margin-bottom: ${({ mb }) => `${mb}px`};
  border-top: ${({ type }) => (type === 'name' ? '0.75px solid #4A294A' : '0 !important')};
`;

export const TrainerCard = styled(Card)`
  justify-content: flex-start;
  width: 300px;
  height: 368px;
  margin-bottom: 0 20px;
  padding: 0 15px;
  box-sizing: border-box;
  background: #F7E7FF;
  :hover {
    animation: ${animation.changeCardPosition} 0.5s ease both;
    ${Text}{
      animation: ${animation.changeTextColor} 0.5s ease both, ${animation.changeHr} 0.5s ease both;
    }
    ${Avatar}{
      animation: ${animation.changeBorder} 0.5s ease both;
    }
  }
  :not(:hover) {
    animation: ${animation.restoreCardPosition()} 0.5s ease both;
    ${Text}{
      animation: ${animation.restoreTextColor} 0.5s ease both, ${animation.restoreHr} 0.5s ease both;
    }
    ${Avatar}{
      animation: ${animation.restoreBorder} 0.5s ease both;
    }
  }
  @media (max-width: 1150px) {
    width: 250px;
  }
  @media (max-width: 930px) {
    width: 254px;
    height: 312px;
    margin: 0 10px;
    margin-bottom: 20px;
    :hover {
      animation: none;
      ${Text}{
      animation: none;
    }
    ${Avatar}{
      animation: none;
    }
    };
    :not(:hover) {
      animation: none;
      ${Text}{
      animation: none;
    }
    ${Avatar}{
      animation: none;
    }
    };
  }
`;
