import { feedbackRequest } from '../../API';

const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS';
const GET_ALL_FEEDBACKS_SUCCESS = 'GET_ALL_FEEDBACKS_SUCCESS';
const GET_ALL_FEEDBACKS_FAILURE = 'GET_ALL_FEEDBACKS_FAILURE';
const FEEDBACK_IS_ADDED = 'FEEDBACK_IS_ADDED';

const initialState = {
  data: [],
  loading: false,
  error: '',
  isAdded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FEEDBACKS:
      return {
        data: [],
        loading: true,
        error: '',
        isAdded: false,
      };
    case GET_ALL_FEEDBACKS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
        isAdded: false,
      };
    case GET_ALL_FEEDBACKS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
        isAdded: false,
      };
    case FEEDBACK_IS_ADDED:
      return {
        data: [],
        loading: false,
        error: '',
        isAdded: action.payload,
      };
    default: return state;
  }
};

const loading = () => ({ type: GET_ALL_FEEDBACKS });
const success = (payload) => ({ type: GET_ALL_FEEDBACKS_SUCCESS, payload });
const failure = (error) => ({ type: GET_ALL_FEEDBACKS_FAILURE, error });
const isAdded = (payload) => ({ type: FEEDBACK_IS_ADDED, payload });

export const addFeedback = (form) => async (dispatch) => {
  dispatch(loading());
  try {
    await feedbackRequest.add(form);
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

export const deleteFeedback = ({ deleteItems, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await feedbackRequest.delete(deleteItems);
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

export const viewedFeedback = ({ id, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await feedbackRequest.viewed(id);
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

export const getAllFeedbacks = (logout) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await feedbackRequest.getAll();
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
