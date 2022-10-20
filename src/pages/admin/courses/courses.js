/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useAuthContext } from '../../../hooks/auth/auth.provider';
import { getCourses, addCourse, deleteCourse, editCourse } from '../../../store/modules/courses';
import Model from '../../../components/styled/modal';
import Input from '../../../components/styled/input';
import { baseURL } from '../../../utils/axiosConfig';
import {
  Container, Button, Text, StyledCard, Row, DeleteIcon, customStyles,
} from './styled.courses';

const columnOptionData = ['name', 'description', 'icon'];

const inputs = ['name', 'description'];

export default function Courses() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.courses);
  const { logout } = useAuthContext();
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState('');
  const [deleteItems, setDeleteItems] = useState([]);
  const [icon, setIcon] = useState(null);
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeIcon = (e) => {
    const extension = e.target.files[0].name.split('.').pop();
    if (extension === 'svg') {
      setIcon(e.target.files[0]);
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
    formData.append('icon', icon);
    Object.keys(form).map((key) => formData.append(key, form[key]));
    dispatch(addCourse({ formData, logout }));
    setForm({ name: '', profession: '', description: '' });
    setIcon(null);
    setOpenAdd(false);
  };

  const handleDelete = () => {
    if (deleteItems.length > 0) {
      dispatch(deleteCourse({ deleteItems, logout }));
      setDeleteItems([]);
      setOpenDelete(false);
    }
  };

  const handleOpenEdit = ({ _id: id, name, profession, description }) => {
    setEditId(id);
    setForm({ name, profession, description });
    setOpenEdit(true);
  };

  const handleEdit = () => {
    const formData = new FormData();
    formData.append('icon', icon);
    formData.append('id', editId);
    Object.keys(form).map((key) => formData.append(key, form[key]));
    dispatch(editCourse({ formData, logout }));
    setForm({ name: '', profession: '', description: '' });
    setIcon(null);
    setOpenEdit(false);
  };

  const columns = useMemo(() => columnOptionData.map((columnOptionItem) => ({
    name: columnOptionItem,
    selector: columnOptionItem,
    sortable: columnOptionItem !== 'icon',
    wrap: true,
    cell: (dataItem) => (
      columnOptionItem === 'icon'
        ? <img src={`${baseURL}/../..${dataItem.icon}`} style={{ width: 25 }} alt="" />
        : dataItem[columnOptionItem]
    ),
  })));

  return (
    <Container>
      <Button long onClick={() => setOpenAdd(true)}>
        Add new Course
      </Button>
      <DataTable
        keyField="_id"
        title="Courses"
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
          <label htmlFor="icon">
            Icon
            {' '}
            <input
              type="file"
              accept=".svg"
              id="icon"
              onChange={handleChangeIcon}
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
        onClick={() => setOpenEdit(false)}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <StyledCard height={200} onClick={(event) => event.stopPropagation()}>
          <Text type="title2">Edit trainer</Text>
          <br />
          <label htmlFor="icon">
            Avatar
            {' '}
            <input
              type="file"
              id="icon"
              accept=".svg"
              onChange={handleChangeIcon}
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
            <Button onClick={() => setOpenEdit(false)}>
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
