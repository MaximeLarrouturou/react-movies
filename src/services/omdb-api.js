
// export function searchVideo (searchValue) {
//   return fetch(`https://www.omdbapi.com/?apikey=e35c6151&s=${searchValue}`)
//     .then(Response => Response.json());
// }

import {callApi} from '../api-wrapper';

import {IMDB} from '../constants/api-names';

export function searchVideo (searchValue) {
  const path = `https://www.omdbapi.com/?apikey=e35c6151&s=${searchValue}`;

  console.log(path, searchValue);
  return callApi(IMDB, 'get', path);
}
