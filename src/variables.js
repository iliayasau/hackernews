export const allowCors = 'https://cors-anywhere.herokuapp.com/';
export const appId = "dc34866d14424b2c27acb19df40f44f9";
export const myInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Credentials': 'true'
  },
  mode: 'cors',
  cache: 'default'
};