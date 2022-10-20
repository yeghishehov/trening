import styled from 'styled-components';

export default styled.div`
  margin-top: 85px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 810px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory; 
    -webkit-overflow-scrolling: touch;
    margin-right: 10px;
    margin-top: 25px;
  }
`;
