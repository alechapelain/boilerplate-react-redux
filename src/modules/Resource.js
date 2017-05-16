require('es6-promise').polyfill();
require('isomorphic-fetch');

const setUrlParameters = (url, parameters) => {
  let paramStr = '?';

  for (let key in parameters) {
    if (new RegExp(':' + key + '(\\W|$)').test(url)) {
      url = url.replace(new RegExp(':' + key + '(\\W|$)', 'g'), function(match, p1) {
        return encodeURIComponent(parameters[key]) + p1;
      });
    } else {
      if (paramStr !== '?') {
        paramStr += '&';
      }
      paramStr += key + '=' + encodeURIComponent(parameters[key]);
    }
  }

  url += paramStr;

  return url;
};

const Resource = {
  get: (url, parameters, options) => {
    url = setUrlParameters(url, parameters);
    return fetch(url, options)
      .then((response) => {
        return response.json();
      });
  }
};

export default Resource;
