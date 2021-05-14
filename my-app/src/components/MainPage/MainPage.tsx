import React, {Component} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import Publications from '../Publications/Publications';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {Workspaces} from '../Workspaces/Workspaces';
import {Workspace} from '../Workspace/Workspace';
import {TestPage} from '../TestPage/TestPage';

import {media} from '../../styledHelpers/Breakpoints';

import store from '../../store'
import { Provider } from 'react-redux'

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #f5f7f9;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:wght@500&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    width: 100%;
    background-color: #f5f7f9;
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

class MainPage extends Component { 
    
    state = {
        username: '',
        companyName: ""
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {        
            this.setState({
                username: data.name,
                companyName: data.company.name
            })
        });
    }
    
    render(){      
        return(
            <Provider store={store}>
                <Router>
                    <Wrapper>               
                            <TopBar/>
                            <Content>
                                <LeftMenu companyName ={this.state.companyName} username={this.state.username}/>
                                <Switch>
                                    <Route path="/TestPage" exact>
                                        <InnerWrapper>
                                            <TestPage/>
                                        </InnerWrapper>
                                    </Route>
                                    <Route path="/Workspace" exact>
                                        <InnerWrapper>
                                            <Workspace/>
                                        </InnerWrapper>
                                    </Route>
                                    <Route path="/" exact>
                                        <InnerWrapper>
                                            <Publications username={this.state.username}/>
                                            <Workspaces/>
                                            <ResumeYourWork title='Resume Your Work' buttonPanel={false}/>
                                        </InnerWrapper>
                                    </Route>
                                </Switch>
                            </Content>
                    </Wrapper>
                </Router>
            </Provider>
        )
    }    
}
export default MainPage;