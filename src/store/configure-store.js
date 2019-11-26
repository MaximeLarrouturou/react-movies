import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware];

/*eslint no-process-env:[0]*/
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

/**
 * Configure store middlewares
 *
 * @return {Object} store redux store
 */
export default function configureStore () {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  );

  return store;
}
