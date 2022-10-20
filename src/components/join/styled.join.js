import styled from 'styled-components';
import Text from '../styled/text';
import Card from '../styled/card';
import StyledInput from '../styled/input';
import arrowDownImage from '../../assets/images/arrow-down.png';
import layerImg from '../../assets/images/Layer.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  margin-top: 130px;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  box-sizing: border-box;
  margin: auto;
  margin-top: 95px;
  @media (max-width: 850px) {
    margin-top: 25px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  @media (max-width: 850px) {
    align-items: center;
    width: 100%;
  };
`;

export const Header = styled(Text)``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UpperCase = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: #663FD3;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  text-align: left;
  margin-bottom: 7px;
  @media (max-width: 850px) {
    font-size: 12px;
  };
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 22px;
  color: #310A31;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  text-align: left;
  @media (max-width: 850px) {
    font-size: 18px;
    text-shadow: none;
  };
`;

export const Description = styled(Text)`
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  @media (max-width: 850px) {
    text-shadow: none;
  };
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(StyledInput)`
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 850px) {
    width: 335px;
  }
  @media (max-width: 508px) {
    width: 320px;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  border: 1px solid #4A294A;
  box-sizing: border-box;
  width: 393px;
  height: 44px;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 45px;
  margin: 15px 0;
  font-weight: 500;
  font-size: 14px;
  color: ${({ isDisabled }) => (isDisabled && 'rgba(54, 54, 54, 0.3)')};
  :focus {
    outline: none;
  }
  :invalid {
    color: rgba(54, 54, 54, 0.3);
  }

  -webkit-appearance: none;
  -moz-appearance: none;

  background: #F7E7FF url(${arrowDownImage}) no-repeat top right;
  background-position:
    calc(100% - 20px) calc(1em + 4px),
    calc(100% - 15px) calc(1em + 4px),
    100% 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 850px) {
    width: 335px;
  }
  @media (max-width: 508px) {
    width: 320px;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const Option = styled.option`
  color: #3E4177;
  font-size: 14px;
  visibility: ${({ hidden }) => (hidden)};
`;

export const Button = styled.input.attrs({ type: 'submit' })`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 181px;
  height: 43px;
  background: #663FD3;
  box-shadow: 3px 3px 2px rgba(102, 63, 211, 0.25);
  border-radius: 10px;
  border: 1px solid #663FD3;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.2s;
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid #4A294A;
    color: #4A294A;
    background: #F7E7FF;
  }
  :active {
    background: #e8b5ff;
  }
  :disabled {
    background: #a09fa3;
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  height: 100%;
  width: 60%;
  background: url(${layerImg}) center center / contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  };
`;

export const Image = styled.img`
  width: 80%;
`;

export const Message = styled.div`
  color: ${({ error }) => (error ? '#951111' : '#310A31')};
`;

export const ModalCard = styled(Card)`
  flex-direction: row;
  min-width: 40%;
  min-height: 510px;
  background: #F7E7FF;
  border: 4px solid #663FD3;
  box-sizing: border-box;
  border-radius: 44px;
  @media (max-width: 1000px) {
    min-height: 240px;
    min-width: 330px;
  }
  @media (max-width: 340px) {
    min-width: 300px;
  } 
`;

export const ModalImg = styled.img`
  height: 90%;
`;

export const ModalColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
`;

export const ModalHeader = styled.div`
  font-family: Montserrat !important;
  font-weight: bold;
  font-size: 46px;
  text-align: center;
  color: #000000;
  @media (max-width: 1100px) {
    font-size: 36px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  } 
`;

export const ModalText = styled.div`
  font-family: Montserrat !important;
  font-weight: 600;
  font-size: 36px;
  color: #000000;
  max-width: 340px;
  @media (max-width: 1100px) {
    font-size: 30px;
  }
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

export const TopImg = styled.img`
  position: absolute;
  top: -40%;
  left: -5%;
  @media (max-width: 1000px) {
    height: 40px;
    width: 40px;
  }
`;

export const BottomImg = styled.img`
  position: absolute;
  top: 100%;
  left: 100%;
  @media (max-width: 1530px) {
    left: 90%;
  }
  @media (max-width: 1280px) {
    left: 75%;
  }
  @media (max-width: 1000px) {
    height: 40px;
    width: 40px;
    left: 90%;
  }
`;
