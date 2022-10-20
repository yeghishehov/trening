import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ModalContainer from '../styled/modal';
import {
  ModalCard, ModalImg, ModalColumn, ModalHeader,
  ModalText, CloseContainer, CloseImg, BottomImg, TopImg,
} from './styled.join';
import modalImg from '../../assets/images/modal.png';
import closeImg from '../../assets/images/x.png';
import topImg from '../../assets/images/modal-top.png';
import bottomImg from '../../assets/images/modal-bottom.png';

export default function Modal({ open, setOpen }) {
  const { t } = useTranslation();
  return (
    <ModalContainer
      show={open}
      onClick={() => setOpen(false)}
      onMouseOut={(event) => event.stopPropagation()}
    >
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <ModalImg src={modalImg} alt="" />
        <ModalColumn>
          <TopImg src={topImg} alt="" />
          <ModalHeader>{t('join.modalHeader')}</ModalHeader>
          <ModalText>{t('join.modalText')}</ModalText>
          <BottomImg src={bottomImg} alt="" />
        </ModalColumn>
        <CloseContainer>
          <CloseImg
            src={closeImg}
            alt=""
            onClick={() => setOpen(false)}
          />
        </CloseContainer>
      </ModalCard>
    </ModalContainer>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
