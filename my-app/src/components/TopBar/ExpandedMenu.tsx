import { profile } from 'node:console';
import { FC } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    width: 270px;
    background-color: ${Colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: absolute;
    margin-top: 50px;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: left;
    border: 1px solid lightgray;

    & > p{
        margin: 6px 8px;
        font-size: ${fontSize[12]};
        color: ${Colors.grey};
    }
`;

const FilterInput = styled.input`
    width: 245px;
    height: 30px;
    border: 1px solid lightgray;
    margin-top: 5px;
    border-radius: 6px;
    padding-left: 5px;
    margin-left: 8px;
`;

const CustomIcon = styled.img`
`;

const List = styled.ul`
    & > li{
        margin-left: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 25px;
    }
    & > li > a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
    }
    & > li > a > p{
        margin-left: 15px;
    }

    & > li:hover p{
        color: ${Colors.blue}; 
    }
`;

const IconWrapper = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    border-top: 1px solid lightgray;
    margin: 4px 0px;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;

`;

const ProfileImage = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: grey;
    margin-left: 8px;
    margin-right: 15px;
`;

const ProfileData = styled.div`
    & > p{
        margin-bottom: 4px;
    }
    & > a{
        text-decoration: none;
        color: ${Colors.blue};
    }
    & > a:hover{
        text-decoration: underline;
    }
`;

const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Colors.grey};
    padding: 13px;
    height: 20px;
    cursor: pointer;
    transition-duration: 0.15s;

    & > p{
        margin-left: 20px;
    }
    &:hover{
        color: black;
    }
    &:hover{
        transform: scale(1.1);
    }

`;

export const ExpandedMenu: FC = () => {
    return(   
        <Wrapper>
            <FilterInput placeholder="Filter..."/>
            <p>Platform</p>
            <List>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/house2.png'/></IconWrapper><p>Home</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/publications.png'/></IconWrapper><p>Publications</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/people.png'/></IconWrapper><p>People</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/entities2.png'/></IconWrapper><p>Entities</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/administration.png'/></IconWrapper><p>Administration</p></a></li>
            </List>
            <p>Workspaces</p>
            <List>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/house2.png'/></IconWrapper><p>Client contract</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/publications.png'/></IconWrapper><p>Supplier contract</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/people.png'/></IconWrapper><p>Corporate</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/entities2.png'/></IconWrapper><p>Group Norms</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/administration.png'/></IconWrapper><p>Real estate contracts</p></a></li>
            </List>
            <Line/>
            <p>Account</p>
            <Profile>
                <ProfileImage/>
                <ProfileData>
                    <p>Elon Musk</p>
                    <a href="#">See profile</a>
                </ProfileData>    
            </Profile>
            <List>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/privacy.png'/></IconWrapper><p>Privacy</p></a></li>
                <li><a href='#'><IconWrapper><CustomIcon src='../../media/icons/settings.png'/></IconWrapper><p>Settings</p></a></li>
            </List>
            <Line/>
            <Logout>
                <CustomIcon src='../../media/icons/logout.png'/>
                <p>Logout</p>
            </Logout>
        </Wrapper>    
    )
}