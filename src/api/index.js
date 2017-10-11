import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export const getSelf = access_token =>
  axios.get(`https://api.instagram.com/v1/users/self/`, {
    withCredentials: true,
    adapter: jsonpAdapter,
    dataType: 'jsonp',
    params: {access_token}
  });

export const getSelfMedia = access_token =>
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/`, {
    withCredentials: true,
    adapter: jsonpAdapter,
    dataType: 'jsonp',
    params: {access_token}
  });
