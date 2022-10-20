/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useAuthContext } from '../../../hooks/auth/auth.provider';
import { getTrainers, addTrainer, deleteTrainer, editTrainer } from '../../../store/modules/trainers';
import Model from '../../../components/styled/modal';
import Input from '../../../components/styled/input';
import { baseURL } from '../../../utils/axiosConfig';
import {
  Container, Button, Text, StyledCard, Row, DeleteIcon, customStyles,
} from './styled.trainers';

const columnOptionData = ['name', 'profession', 'description', 'avatar'];

const inputs = ['name', 'profession', 'description'];

export default function Trainers() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.trainers);
  const { logout } = useAuthContext();
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState('');
  const [deleteItems, setDeleteItems] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    name: '', profession: '', description: '',
  });

  useEffect(() => {
    dispatch(getTrainers(logout));
  }, []);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeAvatar = (e) => {
    const types = ['png', 'jpg', 'jpeg', 'webp'];
    const extension = e.target.files[0].name.split('.').pop();
    if (types.some((type) => extension === type)) {
      setAvatar(e.target.files[0]);
    } else {
      e.target.value = '';
    }
  };

  const updateState = useCallback(({ selectedRows }) => {
    const ids = selectedRows.map((el) => el._id);
    setDeleteItems(ids);
  });

  const handleAdd = () => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    Object.keys(form).map((key) => formData.append(key, form[key]));
    dispatch(addTrainer({ formData, logout }));
    setForm({ name: '', profession: '', description: '' });
    setAvatar(null);
    setOpenAdd(false);
  };

  const handleDelete = () => {
    if (deleteItems.length > 0) {
      dispatch(deleteTrainer({ deleteItems, logout }));
      setDeleteItems([]);
      setOpenDelete(false);
    }
  };

  const handleOpenEdit = ({ _id: id, name, profession, description }) => {
    setEditId(id);
    setForm({ name, profession, description });
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setForm({ name: '', profession: '', description: '' });
    setOpenEdit(false);
  };

  const handleEdit = () => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('id', editId);
    Object.keys(form).map((key) => formData.append(key, form[key]));
    dispatch(editTrainer({ formData, logout }));
    setForm({ name: '', profession: '', description: '' });
    setAvatar(null);
    setOpenEdit(false);
  };

  const columns = useMemo(() => columnOptionData.map((columnOptionItem) => ({
    name: columnOptionItem,
    selector: columnOptionItem,
    sortable: columnOptionItem !== 'avatar',
    wrap: true,
    cell: (dataItem) => (
      columnOptionItem === 'avatar'
        ? <img src={`${baseURL}/../..${dataItem.avatar}`} style={{ width: 50 }} alt="" />
        : dataItem[columnOptionItem]
    ),
  })));

  return (
    <Container>
      <Button long onClick={() => setOpenAdd(true)}>
        Add new tranier
      </Button>
      <DataTable
        keyField="_id"
        title="Trainers"
        columns={columns}
        data={data}
        onSelectedRowsChange={updateState}
        selectableRows
        highlightOnHover
        subHeader={deleteItems.length > 0}
        subHeaderComponent={
          <DeleteIcon onClick={() => setOpenDelete(true)} />
        }
        subHeaderAlign="left"
        customStyles={customStyles}
        onRowClicked={handleOpenEdit}
        pagination
        progressPending={loading}
        noDataComponent={<Text type="title">{error || 'There are no records to display'}</Text>}
      />

      <Model
        show={openDelete}
        onClick={() => setOpenDelete(false)}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <StyledCard height={200} onClick={(event) => event.stopPropagation()}>
          <Text type="title2">{`Are you sure you want to delete ${deleteItems.length} items?`}</Text>
          <Row>
            <Button onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <Button onClick={handleDelete}>
              Yes
            </Button>
          </Row>
        </StyledCard>
      </Model>

      <Model
        show={openAdd}
        onClick={() => setOpenAdd(false)}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <StyledCard height={200} onClick={(event) => event.stopPropagation()}>
          <Text type="title2">Add new trainer</Text>
          <br />
          <label htmlFor="avatar">
            Avatar
            {' '}
            <input
              type="file"
              id="avatar"
              accept="image/png,image/jpg,image/jpeg,image/WebP"
              onChange={handleChangeAvatar}
            />
          </label>
          {inputs.map((inputName) => (
            <Input
              key={inputName}
              name={inputName}
              type="text"
              value={form[inputName]}
              onChange={handleChangeForm}
              placeholder={inputName}
            />
          ))}
          <Row>
            <Button onClick={() => setOpenAdd(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>
              Send
            </Button>
          </Row>
        </StyledCard>
      </Model>

      <Model
        show={openEdit}
        onClick={handleCloseEdit}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <StyledCard height={200} onClick={(event) => event.stopPropagation()}>
          <Text type="title2">Edit trainer</Text>
          <br />
          <label htmlFor="avatar">
            Avatar
            {' '}
            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
              accept="image/png,image/jpg,image/jpeg,image/WebP"
            />
          </label>
          {inputs.map((inputName) => (
            <Input
              key={inputName}
              name={inputName}
              type="text"
              value={form[inputName]}
              onChange={handleChangeForm}
              placeholder={inputName}
            />
          ))}
          <Row>
            <Button onClick={handleCloseEdit}>
              Cancel
            </Button>
            <Button onClick={handleEdit}>
              Send
            </Button>
          </Row>
        </StyledCard>
      </Model>

    </Container>
  );
}
