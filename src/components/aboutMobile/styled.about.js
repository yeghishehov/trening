import styled from 'styled-components';
import StyledText from '../styled/text';
// import backgroundImg from '../../assets/images/Layer.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
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
  flex-direction: column;
  width: 85%;
  margin-top: 25px;
`;

export const Column = styled.div`
  display: ${({ background }) => (background && 'none')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 600px;
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const Text = styled(StyledText)`
  font-family: Poppins !important;
`;
