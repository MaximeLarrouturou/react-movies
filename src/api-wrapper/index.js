// Scope will contain the result of zorg-sesame, with the api client, topics and user, report, dashboard ids.
let scope = {};

/**
 * Side effect helper function to register the scope
 *
 * @param  {Object} appScope result of zorg-sesame
 */
export function configureApiMethods (appScope) {
  scope = appScope;

  return scope;
}

/**
 * Side effect helper function to get the scope
 *
 * @return  {Object} appScope result of zorg-sesame
 */
export function getScope () {
  return scope;
}

/**
 * Base API call method
 *
 * @param  {String} method    POST | GET | PUT | DELETE
 * @param  {String} url       endpoint to call
 * @param  {Object} body      payload of the request (default {})
 * @return {Promise} promise  promise with the API call
 */
export function callApi (api, method, url, body = {}) {
  return new Promise((resolve, reject) => {
    scope.api.services[api][method](url, null, body).end((err, res) => {
      if (err) {
        return reject(err);
      }
      if (res.body && res.body.acknowledged === false) {
        return reject(res.body.data.error);
      }
      return resolve(res);
    });
  });
}
