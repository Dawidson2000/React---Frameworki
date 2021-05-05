import React, {Component} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {Workspaces} from '../Workspaces/Workspaces';
import {Entities} from '../Entities/Entities';
import {TestPage} from '../TestPage/TestPage';

import {media} from '../../styledHelpers/Breakpoints';
import {user} from '../../media/Api';

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
`;

const Content = styled.div`
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
        user: {},
        companyName: ""
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {        
            this.setState({
                user: data,
                companyName: data.company.name
            })
        });
    }
    
    render(){      
        return(
            <Router>
                <Wrapper>
                    <TopBar/>
                    <Content>
                        <LeftMenu companyName ={this.state.companyName} user={this.state.user as {}}/>
                        <Switch>
                            <Route path="/TestPage" exact>
                                <InnerWrapper>
                                    <TestPage/>
                                </InnerWrapper>
                            </Route>
                            <Route path="/Entities" exact>
                                <InnerWrapper>
                                    <Entities/>
                                </InnerWrapper>
                            </Route>
                            <Route path="/" exact>
                                <InnerWrapper>
                                    <Publications/>
                                    <Workspaces/>
                                    <ResumeYourWork/>
                                </InnerWrapper>
                            </Route>
                        </Switch>
                    </Content>
                </Wrapper>
            </Router>
        )
    }    
}
export default MainPage;
