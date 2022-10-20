import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { addFeedback } from '../../store/modules/feedback';
import { ROUTER_IDS } from '../../utils/routeConst';
import Map from './map';

import Text from '../styled/text';
import Spinner from '../styled/spinner';
import Modal from './modal';
import { FadeInDown } from '../styled/animation';
import {
  Container, Card, Input, Button, ButtonContainer, Message, Form,
  InputContainer, MoreIcon, LocationIcon, EmailIcon, PhoneIcon,
} from './styled.contact';

export default function Contact() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading, error, isAdded } = useSelector((state) => state.feedback);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({
    state: '', phone: '', email: '', message: '',
  });

  useEffect(() => {
    if (isAdded) {
      setForm({
        state: '', phone: '', email: '', message: '',
      });
      setOpenModal(true);
    }
  }, [isAdded]);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddFeedback = (e) => {
    e.preventDefault();
    dispatch(addFeedback(form));
  };

  const inputs = [
    {
      id: 1, placeholder: t('contact.state'), name: 'state', type: 'text', icon: <LocationIcon />,
    },
    {
      id: 2, placeholder: t('contact.phone'), name: 'phone', type: 'tel', icon: <PhoneIcon />,
    },
    {
      id: 3, placeholder: t('contact.email'), name: 'email', type: 'email', icon: <EmailIcon />,
    },
    {
      id: 4, placeholder: t('contact.message'), name: 'message', type: 'text', icon: <MoreIcon />,
    },
  ];

  return (
    <Element name={ROUTER_IDS.contact}>
      <FadeInDown>
        <Container>
          <Text type="header" bold="bold">{t('contact.header1')}</Text>
          <Text type="header" bold="bold">{t('contact.header2')}</Text>
          <Card>
            <Text type="title2" bold="bold" mb={10} shadow>{t('contact.title')}</Text>
            <Text mb={15}>{t('contact.description')}</Text>
            <Form onSubmit={handleAddFeedback}>
              {inputs.map((item) => (
                <InputContainer key={item.id}>
                  <Input
                    placeholder={item.placeholder}
                    value={form[item.name]}
                    onChange={handleChangeForm}
                    name={item.name}
                    type={item.type}
                    required
                  />
                  {item.icon}
                </InputContainer>
              ))}
              <ButtonContainer>
                {loading && <Spinner />}
                <Message error>{error}</Message>
                <Button value={t('contact.button')} disabled={loading} />
              </ButtonContainer>
            </Form>
          </Card>
          <Map />
        </Container>
        <Modal open={openModal} setOpen={setOpenModal} />
      </FadeInDown>
    </Element>
  );
}
