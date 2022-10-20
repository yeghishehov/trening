/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export default styled.div`
  font-family: Montserrat !important;
  font-weight: ${({ bold }) => bold && bold};
  text-align: ${({ align }) => (align || 'center')};
  color: ${({ color }) => (color === 'secondary' ? 'rgba(62, 65, 119, 0.6)' : '#310A31')};
  font-size: ${({ type }) => (
    type === 'header'
      ? '46px'
      : type === 'title'
        ? '36px'
        : type === 'title2'
          ? '24px'
          : type === 'name'
            ? '18px'
            : '14px'
  )};
  text-shadow: ${({ type, shadow }) => ((type === 'header' || shadow) && '3px 3px 2px rgba(0, 0, 0, 0.25)')};
  width: ${({ width }) => width && `${width}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  @media (max-width: 1365px) {
    font-size: ${({ type }) => (
    type === 'header'
      ? '46px'
      : type === 'title'
        ? '36px'
        : type === 'title2'
          ? '22px'
          : type === 'name'
            ? '18px'
            : '14px'
  )};
  }

  @media (max-width: 1280px) {
    font-size: ${({ type }) => (
    type === 'header'
      ? '44px'
      : type === 'title'
        ? '34px'
        : type === 'title2'
          ? '20px'
          : type === 'name'
            ? '17px'
            : '14px'
  )};
  }

  @media (max-width: 1150px) {
    font-size: ${({ type }) => (
    type === 'header'
      ? '38px'
      : type === 'title'
        ? '30px'
        : type === 'title2'
          ? '17px'
          : type === 'name'
            ? '15px'
            : '13px'
  )};
  }

  @media (max-width: 850px) {
    text-shadow: none;
    font-size: ${({ type }) => (
    type === 'header'
      ? '22px'
      : type === 'title'
        ? '18px'
        : type === 'title2'
          ? '15px'
          : type === 'name'
            ? '14px'
            : '12px'
  )};
  }
`;
