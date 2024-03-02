import { actions } from '../actions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    // Data Fetching
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    // Data Fetched
    case actions.post.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        posts: action.data,
      };
    }
    // Data Fetch Error
    case actions.post.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

export { initialState, postReducer };
