import * as types from '../constants/action-types';
import * as api from '../services/omdb-api';

export const searchVideo = searchValue => dispatch => {
  dispatch({
    'type': types.SEARCH_VIDEOS_REQUEST
  });
  return api
    .searchVideo(searchValue)
    .then(result => {
      dispatch({
        'type': types.SEARCH_VIDEOS_SUCCESS,
        'videos': result.Search
      });
    })
    .catch(error => {
      dispatch({
        'type': types.SEARCH_VIDEOS_FAILURE,
        error
      });
    });
};
