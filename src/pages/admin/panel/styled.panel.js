import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../../../components/styled/card';
import StyledText from '../../../components/styled/text';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #3E4177;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Text = styled(StyledText)`
  color: #4b51c3;
`;

export const LearnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 50px;
`;

export const Button = styled.option`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ long }) => (long ? '200px' : '100px')};
  height: 43px;
  background: ${({ disabled }) => (disabled ? '#A3B3CE' : '#5277F7')};
  box-shadow: 0px 14px 10px rgba(82, 119, 247, 0.06);
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :active {
    background: #0931c3;
  }
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
`;

export const StyledSettingsIcon = styled(SettingsIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 30px;
  :active {
    fill: #494949;
  }
`;

export const DeleteIcon = styled(Delete)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  left: 35%;
  :active {
    fill: #494949;
  }
`;

export const StyledCard = styled(Card)`
  min-width: ${({ width }) => (width ? `${width}px` : '600px')};
  min-height: ${({ height }) => (height ? `${height}px` : '400px')};
  background: #fff;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  /* font-weight: bold; */
  color: #3E4177;
  margin: 0 20px;
  border: 1px solid #3E4177;
  border-radius: 15px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  :hover {
    background-color: #3e417720;
  }
  :active {
    transform: scale(0.95);
    background-color: #3e417750;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;
