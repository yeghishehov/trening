/* eslint-disable object-curly-newline */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { addLearner } from '../../store/modules/learner';
import { ROUTER_IDS } from '../../utils/routeConst';

import Spinner from '../styled/spinner';
import { FadeInDown } from '../styled/animation';
import Modal from './modal';
import {
  Container, Column, UpperCase, Title,
  Description, Input, Select, Option,
  Button, Header, Row, ButtonContainer,
  Bg, Message, Image, Form, TextContainer,
} from './styled.join';

import joinImg from '../../assets/images/join.png';

export default function Join() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const { loading, error, isAdded } = useSelector((state) => state.learner);
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', course: '' });
  const [openModal, setOpenModal] = useState(false);

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

  const handleAddLearner = async (e) => {
    e.preventDefault();
    dispatch(addLearner(form));
  };

  const inputs = [
    { id: 1, placeholder: t('join.name'), name: 'firstName', type: 'text' },
    { id: 2, placeholder: t('join.lastName'), name: 'lastName', type: 'text' },
    { id: 3, placeholder: t('join.phone'), name: 'phone', type: 'tel' },
    { id: 4, placeholder: t('join.email'), name: 'email', type: 'email' },
  ];

  return (
    <Element name={ROUTER_IDS.join}>
      <FadeInDown>
        <Container>
          <Header type="header" bold="bold">{t('join.header')}</Header>

          <Row>
            <Column>
              <TextContainer>
                <UpperCase>{t('join.title1')}</UpperCase>
                <Title>{t('join.title2')}</Title>
                <Description>{t('join.description')}</Description>
              </TextContainer>
              <Form onSubmit={handleAddLearner}>
                {inputs.map((item) => (
                  <Input
                    key={item.id}
                    placeholder={item.placeholder}
                    value={form[item.name]}
                    onChange={handleChangeForm}
                    name={item.name}
                    type={item.type}
                    maxLength={25}
                    required
                  />
                ))}

                <Select
                  value={form.course}
                  name="course"
                  onChange={handleChangeForm}
                  isDisabled={form.course === ''}
                >
                  <Option value="" hidden disabled>{t('join.select')}</Option>
                  {data.map((item) => (
                    <Option key={item.name} value={item.name}>{item.name}</Option>
                  ))}
                </Select>

                <ButtonContainer>
                  {loading && <Spinner />}
                  <Message error>{error}</Message>
                  <Button value={t('join.button')} disabled={loading} />
                </ButtonContainer>
              </Form>
            </Column>

            <Bg>
              <Image src={joinImg} />
            </Bg>
          </Row>
        </Container>
        <Modal open={openModal} setOpen={setOpenModal} />
      </FadeInDown>
    </Element>
  );
}
