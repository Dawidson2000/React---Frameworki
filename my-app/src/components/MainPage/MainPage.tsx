import React, {FC, useEffect } from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import Publications from '../Publications/Publications';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {Workspaces} from '../Workspaces/Workspaces';
import {Workspace} from '../Workspace/Workspace';
import {TestPage} from '../TestPage/TestPage';
import {Profile} from '../Profile/Profile';
import {Entities} from '../Entities/Entities';

import {media} from '../../styledHelpers/Breakpoints';

import store from '../../tools/store'
import { Provider } from 'react-redux'

import {useDispatch} from 'react-redux';
import {getUsers} from '../../actions/usersActions';

import {useSelector} from 'react-redux';

import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/usersReducer';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #f5f7f9;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    width: 100%;
    background-color: #f5f7f9;
    position: relative;
`;

const Content = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    display: flex;
    ${media.phone`
        flex-direction: column;
        align-items: center;
    `}
    ${media.phoneM`
        flex-direction: column;
        align-items: center;
    `}
    ${media.tablet`
        flex-direction: row;
        align-items: flex-start;
    `}
`;

const InnerWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

type GetUsers = ReturnType<typeof getUsers>

export const MainPage: FC = () => {
    
    const USER_ID = 3;
  
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
    },[]);

    const {usersList, someData} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

        return(         
                <Router>
                    <Wrapper>               
                            <TopBar username={usersList[USER_ID]?.name}/>
                            <Content>
                                <LeftMenu companyName ={usersList[USER_ID]?.company.name} username={usersList[USER_ID]?.name}/>
                                <Switch>
                                    <Route path="/TestPage" exact>
                                        <InnerWrapper>
                                            <TestPage/>
                                        </InnerWrapper>
                                    </Route>
                                    <Route path="/Workspace" exact>
                                        <InnerWrapper>
                                            <Workspace userId={USER_ID}/>
                                        </InnerWrapper>
                                    </Route>
                                    <Route path="/Entities" exact>
                                       <Entities users={usersList}/>                                      
                                    </Route>
                                    <Route path="/Profile" exact>
                                        <InnerWrapper>
                                            <Profile userID={USER_ID}/>
                                        </InnerWrapper>
                                    </Route>
                                    <Route path="/" exact>
                                        <InnerWrapper>
                                            <Publications username={usersList[USER_ID]?.name} userID={USER_ID}/>
                                            <Workspaces/>
                                            <ResumeYourWork title='Resume Your Work' buttonPanel={false} userId={USER_ID}/>
                                        </InnerWrapper>
                                    </Route>
                                </Switch>
                            </Content>
                    </Wrapper>
                </Router>
         
        )
    }    

