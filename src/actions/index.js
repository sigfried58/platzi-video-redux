import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_ENTITIES,
  SEARCH_ASYNC_ENTITIES
} from '../action-types/index';

export const openModal = mediaId => {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId
    }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const searchEntities = query => {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query
    }
  };
};

export const searchAsyncEntities = query => {
  return dispatch => {
    setTimeout(() => {
      dispatch(searchEntities(query));
    }, 5000);
  };
};
