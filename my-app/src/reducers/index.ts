import { combineReducers } from 'redux';

import users, {IUsersReducer } from './usersReducer';

export default combineReducers({
    users
})

export interface IState{
    users: IUsersReducer;
}