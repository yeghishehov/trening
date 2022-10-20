import { coursesRequest } from '../../API';

const GET_ALL_COURSES = 'GET_ALL_COURSES';
const GET_ALL_COURSES_SUCCESS = 'GET_ALL_COURSES_SUCCESS';
const GET_ALL_COURSES_FAILURE = 'GET_ALL_COURSES_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return {
        data: [],
        loading: true,
        error: '',
      };
    case GET_ALL_COURSES_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case GET_ALL_COURSES_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

const loading = () => ({ type: GET_ALL_COURSES });
const success = (payload) => ({ type: GET_ALL_COURSES_SUCCESS, payload });
const failure = (error) => ({ type: GET_ALL_COURSES_FAILURE, error });

export const addCourse = ({ formData, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await coursesRequest.add(formData);
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

export const deleteCourse = ({ deleteItems, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await coursesRequest.delete(deleteItems);
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

export const editCourse = ({ formData, logout }) => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await coursesRequest.edit(formData);
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

export const getCourses = () => async (dispatch) => {
  dispatch(loading());
  try {
    const response = await coursesRequest.get();
    dispatch(success(response));
  } catch (error) {
    dispatch(failure(`${error}`));
  }
};
