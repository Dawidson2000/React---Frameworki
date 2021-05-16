import {ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/actionType/userTypes';

export interface IUsersReducer{
    usersList: ISingleUser[];
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    someData: "SpaceX"
})

export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return{
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.PUSH_DATA:{
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return{
                ...state,
                someData: data.someData
            }
        }

        default:{
            return state;
        }
    }
}