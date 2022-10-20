import styled from 'styled-components';
import styledCard from '../styled/card';
import StyledInput from '../styled/input';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as More } from '../../assets/icons/more.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MapContainer = styled.div`
  margin-top: 170px;
  width: 100%;
  height: 600px;
  mix-blend-mode: multiply;
  box-shadow: 10px 0px 24px 10px rgba(102, 63, 211, 0.25);
  border-radius: 43px 43px 0px 0px;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 900px) {
    height: 830px;
    margin-top: 50px;
  }
`;

export const Card = styled(styledCard)`
  position: absolute;
  left: 144px;
  top: 150px;
  background: #FFFFFF;
  box-shadow: 0px 0px 18px #663FD3;
  border-radius: 44px;
  z-index: 10;
  width: 496px;
  height: 571px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 73px;
  @media (max-width: 1200px) {
    left: 90px;
  }
  @media (max-width: 1100px) {
    left: 30px;
  }
  @media (max-width: 900px) {
    left: 0;
    top: 400px;
    margin: 0;
  }
  @media (max-width: 508px) {
    width: 100%;
    min-width: 320px
  }
`;

export const Input = styled(StyledInput)`
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  width: 100%;
  @media (max-width: 508px) {
  }
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
  margin: 20px 0;
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
    background: #a69dbe;
    cursor: not-allowed;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const PhoneIcon = styled(Phone)`
  position: absolute;
  right: 75px;
`;

export const EmailIcon = styled(Email)`
  position: absolute;
  right: 75px;
`;

export const LocationIcon = styled(Location)`
  position: absolute;
  right: 75px;
`;

export const MoreIcon = styled(More)`
  position: absolute;
  right: 75px;
`;

export const Message = styled.div`
  color: ${({ error }) => (error ? '#951111' : '#310A31')};
`;

export const ModalCard = styled(styledCard)`
  position: relative;
  left: 12%;
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
    left: 0;
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

export const Form = styled.form`
  width: 100%;
`;
