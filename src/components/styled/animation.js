import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

export const FadeInDown = styled.div`
  animation: 500ms ${keyframes`${fadeInDown}`};
`;

const changeCardPosition = keyframes`
  to {
    transform: translateY(-12px);
    background: #836DF3;
    border: 4px solid #fff;
  }
`;

const restoreCardPosition = (isButton = false) => keyframes`
  from {
    transform: translateY(-12px);
    background: #836DF3;
    border: 4px solid #fff;
  }
  to {
    transform: translateY(0px);
    background: ${isButton ? 'none' : '#F7E7FF'};
    border: 4px solid #4A294A;
  }
`;

const changeTextColor = keyframes`
  to {
    color: #fff;
  }
`;

const restoreTextColor = keyframes`
  from {
    color: #fff;
  }
  to {
    color: #4A294A;
  }
`;

const changeIconColor = keyframes`
  to {
    background: #fff;
  }
`;

const restoreIconColor = keyframes`
  from {
    background: #fff;
  }
  to {
    background: #4A294A;
  }
`;

const changeBorder = keyframes`
  to {
    border: 3px solid #fff;
  }
`;

const restoreBorder = keyframes`
  from {
    border: 3px solid #fff;
  }
  to {
    border: 3px solid #4A294A;
  }
`;

const changeHr = keyframes`
  to {
    border-top: 0.75px solid #fff;
  }
`;

const restoreHr = keyframes`
  from {
    border-top: 0.75px solid #fff;
  }
  to {
    border-top: 0.75px solid #4A294A;
  }
`;

export default {
  changeCardPosition,
  restoreCardPosition,
  changeTextColor,
  restoreTextColor,
  changeIconColor,
  restoreIconColor,
  changeBorder,
  restoreBorder,
  changeHr,
  restoreHr,
};
