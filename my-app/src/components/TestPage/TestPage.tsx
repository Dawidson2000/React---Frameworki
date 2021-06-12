import { FC, useEffect } from 'react';
import styled from 'styled-components';

import {useDispatch} from 'react-redux';
import {getUsers} from '../../actions/usersActions';

import {useSelector} from 'react-redux';

import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/usersReducer';

const Wrapper = styled.div`
    background-color: lightgrey;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 100%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

type GetUsers = ReturnType<typeof getUsers>

export const TestPage: FC = () => {
    return (
        <Wrapper>
            <span>¯\_( ͡ㆆ ͜ʖ ͡ㆆ)_/¯</span>
        </Wrapper>
    
    )
}