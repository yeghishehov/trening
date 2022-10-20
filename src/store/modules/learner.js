import { learnerRequest } from '../../API';

const GET_ALL_LEARNERS = 'GET_ALL_LEARNERS';
const GET_ALL_LEARNERS_SUCCESS = 'GET_ALL_LEARNERS_SUCCESS';
const GET_ALL_LEARNERS_FAILURE = 'GET_ALL_LEARNERS_FAILURE';
const LEARNER_IS_ADDED = 'LEARNER_IS_ADDED';

const initialState = {
  data: [],
  loading: false,
  error: '',
  isAdded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEARNERS:
      return {
        data: [],
        loading: true,
        error: '',
        isAdded: false,
      };
    case GET_ALL_LEARNERS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
        isAdded: false,
      };
    case GET_ALL_LEARNERS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
        isAdded: false,
      };
    case LEARNER_IS_ADDED:
      return {
        data: [],
        loading: false,
        error: '',
        isAdded: action.payload,
      };
    default: return state;
  }
};

const loading = () => ({ type: GET_ALL_LEARNERS });
const success = (payload) => ({ type: GET_ALL_LEARNERS_SUCCESS, payload });
const failure = (error) => ({ type: GET_ALL_LEARNERS_FAILURE, error });
const isAdded = (payload) => ({ type: LEARNER_IS_ADDED, payload });

export const addLearner = (form) => async (dispatch) => {
  dispatch(loading());
  try {
    await learnerRequest.add(form);
    dispatch(isAdded(true));
    setTimeout(() => dispatch(isAdded(false)), 1000);
  } catch (error) {
    if (error.response) {
      dispatch(failure(error.response.data?.message));
    } else {
      dispatch(failure(`${error}`));
    }
  }
};

export const deleteLearner = ({ deleteItems, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await learnerRequest.delete(deleteItems);
    dispatch(success(response));
  } catch (error) {
    if (error?.response?.data === 'Unauthorized') {
      dispatch(failure(error.response.data));
      logout();
    } else {
      dispatch(failure(`${error}`));
    }
  }
};

export const viewedLearner = ({ id, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await learnerRequest.viewed(id);
    dispatch(success(response));
  } catch (error) {
    if (error?.response?.data === 'Unauthorized') {
      dispatch(failure(error.response.data));
      logout();
    } else {
      dispatch(failure(`${error}`));
    }
  }
};

export const getAllLearners = (logout) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await learnerRequest.getAll();
    dispatch(success(response));
  } catch (error) {
    if (error?.response?.data === 'Unauthorized') {
      dispatch(failure(error.response.data));
      logout();
    } else {
      dispatch(failure(`${error}`));
    }
  }
};
