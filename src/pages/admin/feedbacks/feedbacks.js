/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line object-curly-newline
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { useAuthContext } from '../../../hooks/auth/auth.provider';
import { getAllFeedbacks, deleteFeedback, viewedFeedback } from '../../../store/modules/feedback';
import Model from '../../../components/styled/modal';
import {
  Container, Button, Text, StyledCard, Row, DeleteIcon, customStyles,
} from './styled.feedbacks';

const columnOptionData = [
  { name: 'State', selector: 'state' },
  { name: 'Phone', selector: 'phone' },
  { name: 'Email', selector: 'email' },
  { name: 'Created', selector: 'created' },
];

export default function Feedbacks() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.feedback);
  const { logout } = useAuthContext();
  const [openDelete, setOpenDelete] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [deleteItems, setDeleteItems] = useState([]);

  const currentData = data.map((item) => {
    const date = new Date(item.created);
    const created = date.toLocaleString();
    return { ...item, created };
  });

  useEffect(() => {
    dispatch(getAllFeedbacks(logout));
  }, []);

  const updateState = useCallback(({ selectedRows }) => {
    const ids = selectedRows.map((el) => el._id);
    setDeleteItems(ids);
  });

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleDelete = () => {
    if (deleteItems.length > 0) {
      dispatch(deleteFeedback({ deleteItems, logout }));
      setOpenDelete(false);
      setDeleteItems([]);
    }
  };

  const handleViewed = ({ _id: id, message: msg, viewed }) => {
    if (!viewed) {
      dispatch(viewedFeedback({ id, logout }));
    }
    setOpenMessage(true);
    setMessage(msg);
  };

  const columns = useMemo(() => ([
    ...columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem.name,
      selector: columnOptionItem.selector,
      sortable: true,
      wrap: true,
      cell: (dataItem) => (dataItem.viewed
        ? dataItem[columnOptionItem.selector]
        : (
          <div style={{ fontWeight: 'bold', color: '#303481' }}>
            {dataItem[columnOptionItem.selector]}
          </div>
        )
      ),
    })),
    {
      selector: 'viewed',
      sortable: true,
      cell: (row) => (
        <p style={{ fontWeight: 'bold', color: '#c72a2a' }}>
          {row.viewed ? '' : 'New'}
        </p>
      ),
    },
  ]));

  return (
    <Container>
      <DataTable
        keyField="_id"
        title="Feedbacks"
        columns={columns}
        data={currentData}
        onSelectedRowsChange={updateState}
        selectableRows
        highlightOnHover
        subHeader={deleteItems.length > 0}
        subHeaderComponent={<DeleteIcon onClick={handleOpenDelete} />}
        subHeaderAlign="left"
        customStyles={customStyles}
        onRowClicked={handleViewed}
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
          <Text type="title2">Are you sure you want to delete?</Text>
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
        show={openMessage}
        onClick={() => {
          setOpenMessage(false);
          setMessage('');
        }}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <StyledCard height={200} onClick={(event) => event.stopPropagation()}>
          <Text type="title">Feedback</Text>
          <br />
          <Text type="title2">{message}</Text>
          <br />
        </StyledCard>
      </Model>
    </Container>
  );
}
