import styled from 'styled-components';
import logoImg from '../../assets/images/logo.png';

export default styled.img.attrs({ src: logoImg })`
  @media (max-width: 768px) {
    width: 143px;
  }
`;
