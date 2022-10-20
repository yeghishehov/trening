import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 158px;
  background-color: #310A31;
  box-sizing: border-box;
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 35px;
    padding-top: 65px
  }
`;

export const Col = styled.div`
  @media (max-width: 950px) {
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;
export const Text = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: ${({ primary }) => (primary ? '20px' : '16px')};
  @media (max-width: 1090px) {
    font-size: ${({ primary }) => (primary ? '18px' : '14px')};
  }
  @media (max-width: 950px) {
    font-size: ${({ primary }) => (primary ? '20px' : '16px')};
  }
  @media (max-width: 850px) {
    font-size: ${({ primary }) => (primary ? '12px' : '16px')};
  }
`;

export const Button = styled.button``;
