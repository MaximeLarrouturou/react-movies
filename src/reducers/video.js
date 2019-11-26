import * as types from '../constants/action-types';

const initialState = {
  'error': null,
  'isLoaded': false,
  'loading': true,
  'items': []
};

export default function videos (state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_VIDEOS_REQUEST:
    return {
      ...state,
      'loading': true,
      'isLoaded': false
    };

  case types.SEARCH_VIDEOS_SUCCESS:
    return {
      'loading': false,
      'isLoaded': true,
      'items': action.videos
    };

  case types.SEARCH_VIDEOS_FAILURE:
    return {
      'error': action.error
    };

  default:
    return state;
  }
}
