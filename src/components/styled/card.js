import styled from 'styled-components';

export default styled.div`
  width: ${({ width }) => (width || '382px')};
  height: ${({ height }) => (height || '298px')};
  box-shadow: ${({ shadow }) => (shadow && '10px 10px 10px rgba(102, 63, 211, 0.25)')};
  background: none;
  border: ${({ border }) => (border && '4px solid #4A294A')};
  box-sizing: border-box;
  border-radius: 44px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 10px;
  margin-bottom: 50px;
  padding: 0 40px;
  fill: #4A294A;
`;
