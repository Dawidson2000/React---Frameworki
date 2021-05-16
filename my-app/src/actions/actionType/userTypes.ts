import {ISingleUser} from '../../entities/users';

export const GET_USERS = 'GET_USERS';
export const PUSH_DATA = 'PUSH_DATA';

export interface IUserTypes {
    GET_USERS:{
        usersList: ISingleUser[];
    };
    PUSH_DATA:{
        someData: string;
    }
}