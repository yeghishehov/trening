import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ModalContainer from '../styled/modal';
import {
  ModalCard, ModalImg, ModalColumn, ModalHeader, ModalText, Bold, CloseContainer, CloseImg,
} from './styled.courses';
import modalImg from '../../assets/images/modal.png';
import closeImg from '../../assets/images/x.png';

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
          <ModalHeader>{t('courses.modalHeader')}</ModalHeader>
          <ModalText>
            <Bold>{t('courses.modalBoldText')}</Bold>
            {t('courses.modalText')}
          </ModalText>
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
