import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import { ButtonPanel } from '../../ResumeYourWork/ButtonPanel';

import {useDispatch} from 'react-redux';
import {getUsers} from '../../../actions/usersActions';

import {useSelector} from 'react-redux';

import {IState} from '../../../reducers';
import {IUsersReducer} from '../../../reducers/usersReducer';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const ButtonsPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 20px;

    &>span
    {
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        
        &:hover{
        background-color: lightgray;
    }
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s;

    & > button{
        background: none;
        outline: none;
        border: none;
        font-weight: 500;
        cursor: pointer;
    }

    &:hover{
        background-color: lightgray;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 10px;
    width: 100%;
    height: 100%;
`;

const LeftPhotoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    
    &>a{
        text-decoration: none;
        color: ${Colors.see};
    }

`;
const UserImgWrapper = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: grey;
    margin-bottom: 15px;
    overflow: hidden;

    &>img{
        width: 100%;
    }
`;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;

    &>span{
        margin: 4px;
        font-weight: 300;
    }
    &>p{
        margin: 4px;
    }
`;

const UserContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 50px;
    height: 100%;

    &>span{
        margin: 4px;
        font-weight: 300;
    }
`;

const EditButton = styled.button`
    position: absolute;
    top: 40px;
    right: 10px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 35px;
    height: 35px;

    &>img{
        width: 20px;
    }

    &:hover{
        background-color: lightgray;
        border-radius: 50%;
    }

    &:active{
        transform: scale(0.9);
    }
`;

export interface IMainProfileProps{
    userID: number;
}

type GetUsers = ReturnType<typeof getUsers>

export const MainProfile: FC<IMainProfileProps> = (props) => { 
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
    },[]);

    const {usersList} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [name, setName] = useState("XD");

    const onChangeValue = () =>{
        setName("XDD");
        usersList[props.userID].name = "XD";
    }

    return (
        <Wrapper>
            <ButtonsPanel>
                <ButtonWrapper>
                    <img src='../../../media/icons/comments.svg'/>
                    <button type='button'>Message
                    </button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <img src='../../../media/icons/ecosystem.svg'/>
                    <button type='button'>Create a request</button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <img src='../../../media/icons/network.svg'/>
                    <button type='button'>Add to a cluster</button>
                </ButtonWrapper>
                <span>X</span>
            </ButtonsPanel>

            <UserWrapper>
                <LeftPhotoWrapper>
                    <UserImgWrapper><img src='../../media/photo/lego.jpg' alt='lego'/></UserImgWrapper>
                    <Link to="/TestPage">See profile</Link>
                </LeftPhotoWrapper>
                
                <UserInfoWrapper>
                    <p>{usersList[props.userID]?.name}</p>
                    <p>{usersList[props.userID]?.company.name}</p>
                    <span>{usersList[props.userID]?.address.city}</span>
                    <span>{usersList[props.userID]?.username}</span>
                </UserInfoWrapper>
                
                <UserContactWrapper>
                    <span>{usersList[props.userID]?.email}</span>
                    <span>{usersList[props.userID]?.phone}</span>
                </UserContactWrapper>
            </UserWrapper>
            <EditButton type="button" onClick={onChangeValue}><img src='../../media/icons/pencil.svg' alt='pencil'/></EditButton>
        </Wrapper>
    )}