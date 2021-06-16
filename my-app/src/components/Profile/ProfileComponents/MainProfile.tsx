import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'

import {useDispatch} from 'react-redux';
import {getUsers} from '../../../actions/usersActions';

import {useSelector} from 'react-redux';

import {IState} from '../../../reducers';
import {IUsersReducer} from '../../../reducers/usersReducer';

import {EditButton} from '../../Common/EditButton';
import {BiPencil, BiSave} from 'react-icons/bi';


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

    &>div>input{
        background-color: lightgray;
        border: none;
        outline: none;
        margin: 4px;
        font-size: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        padding: 3px;
    }
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

export interface IMainProfileProps{
    userID: number;
}

type GetUsers = ReturnType<typeof getUsers>

export const MainProfile: FC<IMainProfileProps> = (props) => { 
      
    const {usersList} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
  
    const [isEdited, setisEdited] = useState(false);
    
    const onEdited = () =>{
        setisEdited(!isEdited);
    }

    

    const onChangeValue = (event: any) =>{
        if(event.target.id === 'name') usersList[props.userID].name = event.target.value;
        else if(event.target.id === 'companyName') usersList[props.userID].company.name = event.target.value;
        else if(event.target.id === 'city') usersList[props.userID].address.city = event.target.value; 
        else if(event.target.id === 'username') usersList[props.userID].username = event.target.value;
        else if(event.target.id === 'phone') usersList[props.userID].phone = event.target.value;
        else if(event.target.id === 'email') usersList[props.userID].email = event.target.value;  
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
                    {isEdited ? <input type="input" id='name' defaultValue={usersList[props.userID]?.name} onInput={onChangeValue}/> : <p>{usersList[props.userID]?.name}</p>}
                    {isEdited ? <input type="input" id='companyName' defaultValue={usersList[props.userID]?.company.name} onInput={onChangeValue}/> : <p>{usersList[props.userID]?.company.name}</p>}
                    {isEdited ? <input type="input" id='city' defaultValue={usersList[props.userID]?.address.city} onInput={onChangeValue}/> : <span>{usersList[props.userID]?.address.city}</span>}
                    {isEdited ? <input type="input" id='username' defaultValue={usersList[props.userID]?.username} onInput={onChangeValue}/> : <span>{usersList[props.userID]?.username}</span>}
                </UserInfoWrapper>
                
                <UserContactWrapper>
                    {isEdited ? <input type="input" id='email' defaultValue={usersList[props.userID]?.email} onInput={onChangeValue}/> : <span>{usersList[props.userID]?.email}</span>}
                    {isEdited ? <input type="input" id='phone' defaultValue={usersList[props.userID]?.phone} onInput={onChangeValue}/> : <span>{usersList[props.userID]?.phone}</span>}
                </UserContactWrapper>
            </UserWrapper>
            { isEdited ? <EditButton type="button" onClick={onEdited}><BiSave/></EditButton>
                       : <EditButton type="button" onClick={onEdited}><BiPencil/></EditButton>}
        </Wrapper>
    )}