import { trainersRequest } from '../../API';

const GET_TRAINERS = 'GET_TRAINERS';
const GET_TRAINERS_SUCCESS = 'GET_TRAINERS_SUCCESS';
const GET_TRAINERS_FAILURE = 'GET_TRAINERS_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRAINERS:
      return {
        data: [],
        loading: true,
        error: '',
      };
    case GET_TRAINERS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case GET_TRAINERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

const loading = () => ({ type: GET_TRAINERS });
const success = (payload) => ({ type: GET_TRAINERS_SUCCESS, payload });
const failure = (error) => ({ type: GET_TRAINERS_FAILURE, error });

export const addTrainer = ({ formData, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await trainersRequest.add(formData);
    dispatch(success(response));
  } catch (error) {
    if (error.response) {
      if (error.response.data === 'Unauthorized') {
        dispatch(failure(error.response.data));
        logout();
      } else {
        dispatch(failure(error.response.data?.message));
      }
    } else {
      dispatch(failure(`${error}`));
    }
  }
};

export const deleteTrainer = ({ deleteItems, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await trainersRequest.delete(deleteItems);
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

export const editTrainer = ({ formData, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await trainersRequest.edit(formData);
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

export const getTrainers = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await trainersRequest.get();
    dispatch(success(response));
  } catch (error) {
    dispatch(failure(`${error}`));
  }
};
