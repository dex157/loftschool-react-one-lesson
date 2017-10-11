import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {addToken} from 'actions/authActions';

const token = handleActions(
  {
    [addToken]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  token: token
});

export const getHasToken = state => state.auth.token != null;
export const getToken = state => state.auth.token;
