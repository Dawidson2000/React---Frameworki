import { FC } from 'react';
import styled from 'styled-components';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

import {media} from '../../styledHelpers/Breakpoints';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${fontSize[12]};
`;

const TopCard = styled.div`
    width: 210px;
    height: 220px;
    background-color: ${Colors.white};
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BottonIcons = styled.div`
    width: 100%;
    height: 70px;
    border-top: solid 2px #e1e3e6;
`;

const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
`;

const CustomIconTop = styled.img`
    width: 20px;
    height: 20px;
    color: black;
    margin: 0 10px;
`;

const CustomIconBotton = styled.img`
    width: 25px;
    height: 25px;
    color: black;
    margin: 10px 15px;
`;

const RightButton = styled.button`
    height: 20px;
    width: 30px;
    margin-left: 5px;
    margin-right: 15px;
    background-color: ${Colors.white};
    border: solid 1px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;

    & > a{
        display: block;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
    }
    & > a:hover{
        color: ${Colors.blue};
    }
`;

const BottonCard = styled.div`
    margin: 0 20px 20px 20px;
    width: 210px;

    ${media.phone`
        display: none;
    `}
    ${media.tablet`
        display: block;
    `}
`;

const UserHolder = styled.div`
    & > a{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    }
`;

const CustomImg = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: grey;
    margin-top: 15px;
    margin-bottom: 15px;
`;
let UserName = styled.div`
    font-size: ${fontSize[14]};
    color: ${Colors.blue};
`;
const UserCompany = styled.div`
    color: lightgray;
    margin-top: 15px;
`;

export interface LeftMenuProps{
    user: any,
    companyName: string
}

export const LeftMenu: FC<LeftMenuProps> = (props) => {
    return(     
            <Wrapper>
                <TopCard>
                    <UserHolder>
                        <Link to="/TestPage">
                            <CustomImg/>
                            <UserName>{props.user.name}</UserName>
                            <UserCompany>{props.companyName}</UserCompany>
                        </Link>
                    </UserHolder>
                    
                    <BottonIcons>
                        <Panel>
                            <InnerWrapper>
                                <CustomIconTop src='../../media/icons/network.svg' />
                                <div>Your network</div>
                            </InnerWrapper>
                            <RightButton>
                                <img src='../../media/icons/user-plus.svg' alt="User plus icon"/>    
                            </RightButton>
                        </Panel>
                        <Panel>
                            <InnerWrapper>
                                <CustomIconTop src='../../media/icons/publications.svg' />
                                <div>Your Publications</div>
                            </InnerWrapper>
                            <RightButton>
                                <img src='../../media/icons/plus.svg' alt='Plus icon'/>    
                            </RightButton>
                        </Panel>
                    </BottonIcons>
                </TopCard>
                
                <BottonCard>
                    <InnerWrapper>
                        <Link to="/TestPage">
                            <CustomIconBotton src='../../media/icons/publications.svg' />
                            <div>Publications</div>
                        </Link> 
                    </InnerWrapper>
                    <InnerWrapper>
                        <Link to="/TestPage">
                            <CustomIconBotton src='../../media/icons/ecosystem.svg' />
                            <div>Ecosystem</div>
                        </Link>    
                    </InnerWrapper> 
                    <InnerWrapper>
                        <Link to="/Entities">
                            <CustomIconBotton src='../../media/icons/entities2.svg' />
                            <div>Entities</div>
                        </Link> 
                    </InnerWrapper>   
                </BottonCard>
            </Wrapper>       
    )
}   