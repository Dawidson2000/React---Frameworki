import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

import {WorkspacesTab} from '../Workspaces/WorkspacesTab';
import {media} from '../../styledHelpers/Breakpoints';

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
    z-index: 1;
    transform: translateX(5px);

    & > p{
        margin: 6px 8px;
        font-size: ${fontSize[12]};
        color: ${Colors.grey};
    }

    ${media.desktop`
    transform: translateX(0px);
    `}
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
const Workspace = styled.div`
    & > a{
        margin-left: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 25px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
    }
    & > a > p{
        margin-left: 15px;
    }

    & > a:hover p{
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

const ProfileImageWrapper = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: grey;
    margin-left: 8px;
    margin-right: 15px;
    overflow: hidden;

    &>img{
        width: 100%;
    }
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

    & > a{
        margin-left: 20px;
        text-decoration: none;
        color: ${Colors.grey};
    }
    &:hover{
        color: black;
    }
    &:hover{
        transform: scale(1.1);
    }

`;

export interface IExpandedMenuProps{
    username: string,
}


export const ExpandedMenu: FC<IExpandedMenuProps> = (props) => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const setPhoto = (title: string) =>{
        if(title.toLocaleLowerCase().includes('contract')) return '../../media/photo/contract.jpg';
        else if(title.toLocaleLowerCase().includes('corporate')) return '../../media/photo/corporate.jpg';
        else return '../../media/photo/norms.jpg'
    }
    
    const workspaces = WorkspacesTab.map((workspace: any, index: number) => {
        let title = workspace[0].toString();
        let link = workspace[1].toString();
        return(    
        <Workspace key={index}>
            {title.toLowerCase().includes(inputText.toLowerCase()) &&
            <Link to={{
                pathname: "/Workspace",
                state: {title: title,
                        iconLink: link,
                        photoLink: setPhoto(title)},
                }}><IconWrapper><CustomIcon src={link}/></IconWrapper><p>{title}</p>
            </Link>} 
        </Workspace>
      )})

    return(   
        <Wrapper>
            <FilterInput placeholder="Filter..." type="text" value={inputText} onChange={inputHandler}/>
            <p>Platform</p>
            <List>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><Link to="/"><IconWrapper><CustomIcon src='../../media/icons/house2.svg'/></IconWrapper><p>Home</p></Link></li>}
                
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><Link to="/TestPage"><IconWrapper><CustomIcon src='../../media/icons/publications.svg'/></IconWrapper><p>Publications</p></Link></li>}
                
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><Link to="/TestPage"><IconWrapper><CustomIcon src='../../media/icons/people.svg'/></IconWrapper><p>People</p></Link></li>}
                
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><Link to="/Entities"><IconWrapper><CustomIcon src='../../media/icons/entities2.svg'/></IconWrapper><p>Entities</p></Link></li>}
                
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                <li><Link to="/TestPage"><IconWrapper><CustomIcon src='../../media/icons/administration.svg'/></IconWrapper><p>Administration</p></Link></li>}
            </List>
            
            <p>Workspaces</p>
            <List>
                {workspaces}
            </List>
            <Line/>
            
            <p>Account</p>
            <Profile>
                <ProfileImageWrapper><img src='../../media/photo/lego.jpg' alt='lego'/></ProfileImageWrapper>
                <ProfileData>
                    <p>{props.username}</p>
                    <Link to="/Profile">See profile</Link>
                </ProfileData>    
            </Profile>
            <List>
                <li><Link to="/TestPage"><IconWrapper><CustomIcon src='../../media/icons/privacy.png'/></IconWrapper><p>Privacy</p></Link></li>
                <li><Link to="/TestPage"><IconWrapper><CustomIcon src='../../media/icons/settings.png'/></IconWrapper><p>Settings</p></Link></li>
            </List>
            <Line/>
            <Logout>
                <CustomIcon src='../../media/icons/logout.png'/>
                <Link to="/TestPage"><p>Logout</p></Link>
            </Logout>
        </Wrapper>    
    )
}