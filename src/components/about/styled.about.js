import styled from 'styled-components';
import StyledText from '../styled/text';
import backgroundImg from '../../assets/images/Layer.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 80px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  margin-top: 10vh;
`;

export const Column = styled.div`
  background: ${({ background }) => (background && `url(${backgroundImg}) center center / contain no-repeat`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ background }) => (background ? '60%' : '40%')};
  height: 70vh;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 600px;
  display: ${({ mobile }) => (mobile ? 'none' : 'inline-block')};
`;

export const Text = styled(StyledText)`
  font-family: Poppins !important;
`;
