import { useState } from 'react';
import propTypes from 'prop-types';
import Spinner from '../../../components/styled/spinner';
import Input from '../../../components/styled/input';
import Model from '../../../components/styled/modal';
import { useAuthContext } from '../../../hooks/auth/auth.provider';
import { Button, Text, StyledCard } from './styled.panel';

export default function Settings({ open, setOpen }) {
  const { changePassword } = useAuthContext();
  const [form, setForm] = useState({ current: '', new: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkForm = () => !!(form.current && form.new && form.confirm);

  const handleChangePassword = async () => {
    if (checkForm()) {
      setLoading(true);
      const result = await changePassword(form);
      if (result === 'ok') {
        setForm({ current: '', new: '', confirm: '' });
        setError('');
        setOpen(false);
      } else {
        setError(result);
      }
      setLoading(false);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') {
      handleChangePassword();
    }
  };
  const buttonDisabled = form.current.length === 0
    || form.new.length === 0
    || form.confirm.length === 0;

  return (
    <Model
      show={open}
      onClick={() => setOpen(false)}
      onMouseOut={(event) => event.stopPropagation()}
    >
      <StyledCard onClick={(event) => event.stopPropagation()}>
        <Text type="title">Change Password</Text>
        <Input
          value={form.current}
          onChange={handleChangeForm}
          onKeyDown={handleEnter}
          name="current"
          type="password"
          placeholder="Current password"
          required
        />
        <Input
          value={form.new}
          onChange={handleChangeForm}
          onKeyDown={handleEnter}
          name="new"
          type="password"
          placeholder="New password"
          required
        />
        <Input
          value={form.confirm}
          onChange={handleChangeForm}
          onKeyDown={handleEnter}
          name="confirm"
          type="password"
          placeholder="Confirm password"
          required
        />
        {error}
        {loading && <Spinner />}
        <Button
          long
          type="submit"
          onClick={handleChangePassword}
          disabled={buttonDisabled}
        >
          Change password
        </Button>
      </StyledCard>
    </Model>
  );
}

Settings.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func.isRequired,
};
