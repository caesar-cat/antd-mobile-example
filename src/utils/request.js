import fetch from 'dva/fetch';
import { Toast } from 'antd-mobile';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  Toast.fail(`请求错误 ${response.status}: ${response.url}`, 2);
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        Toast.fail(error.message, 2);
      }
      if ('stack' in error && 'message' in error) {
        Toast.fail(`请求错误: ${url}`, 2);
      }
      return error;
    });
}

