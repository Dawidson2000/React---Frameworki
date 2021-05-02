import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import {media} from '../../styledHelpers/Breakpoints';

import {ExpandedMenu} from './ExpandedMenu';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const TopWrapper = styled(Wrapper)`
    height: 50px;
    background-color: ${Colors.white};
    font-size: ${fontSize[14]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing: border-box;
`;

const CustomImg = styled.img`
    width: 35px;
    height: auto;
    
    ${media.phone`
        margin-right: 5px;
        margin-left: 5px;
    `}
    ${media.tablet`
        margin-right: 5px;
        margin-left: 5px;
    `}
    ${media.desktop`
        margin-right: 20px;
        margin-left: 20px;
        `}
`;

const CustomIcon = styled.img`
    width: 23px;
    height: 23px;
    color: black;
    
    ${media.phone`
        margin: 0 5px;
    `}
    ${media.tablet`
        margin: 0 5px;
    `}
    ${media.desktop`
        margin: 0 10px;
    `}
`;

const LeftWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftHomeIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-right: 20px;
    border-radius: 5px;
    
    &:hover{
        background-color: lightgrey;
    }


    ${media.phone`
        display: none;
    `}
    ${media.tablet`
        display: none;
    `}
    ${media.desktop`
        display: flex;
    `}
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    padding: 3px; 

    width: 80%;
    
    ${media.tablet`
        width: 70%;
    `}
    ${media.desktop`
        width: 65%;
    `}    
    ${media.desktopLegacy`
        width: 55%;
    `}
    ${media.giant`
        width: 50%;
    `} 

`;

const CustomInput = styled.input`
    border: none;
    width: 450px;
    outline: none;
    text-align: center;
    color: black;

    width: 95%;
`;

const RightIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    ${media.phone`
        width: 200px;
        padding-right: 0px;
    `}
    ${media.tablet`
        width: 200px;
    `}
    ${media.desktop`
        width: 410px;
        padding-right: 20px;
    `}
`;

const MiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`;

const MenuArrow = styled.img`
  margin-left: 140px;
  padding: 20px;
  transition: 0.1s;

  &:hover{
      transform: scale(1.3);
  }
`;

const MenuIcon = styled.img`
    width: 23px;
    height: 23px;
    margin: 6px;
    color: black;
    

    ${media.phone`
        display: block;
    `}
    ${media.tablet`
        display: block;
    `}

    ${media.desktop`
        display: none;
    `}
`;


export const TopBar: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () =>{
        toggleDropdown();
        isTabletViewActive();
    };

    const isTabletViewActive = () =>{
        console.log(window.innerWidth);
        if(window.innerWidth >= 1024) {console.log("f"); return false}
        {console.log("t"); return true}
    }

    return(
        <TopWrapper ref={wrapperRef}>
            <LeftWrapper>    
                <CustomImg src='../../media/logo.png'/>
                <LeftHomeIcon>
                    <CustomIcon src='../../media/icons/house.svg'/>
                    <div>Home</div>
                    <MenuArrow onClick={menuHandler} src ='../../media/icons/arrow-down.svg'/>
                    {dropdownOpen && <ExpandedMenu/>}
                </LeftHomeIcon>        
            </LeftWrapper>
            <MiddleWrapper>
                <InputWrapper> 
                    <CustomInput type='text' placeholder="Search LegalCluster"/>
                    <CustomIcon src='../../media/icons/search.svg'/>
                </InputWrapper>
            </MiddleWrapper>    
            <RightIcons>
                <Link to="/"><CustomIcon src='../../media/icons/house.svg'/></Link>
                <Link to="/TestPage"><CustomIcon src='../../media/icons/comments.svg'/></Link>
                <Link to="/TestPage"><CustomIcon src='../../media/icons/bell.svg'/></Link>
                <MenuIcon onClick={menuHandler} src='../../media/icons/menu.png' />
                {dropdownOpen && isTabletViewActive() && <ExpandedMenu/>}
            </RightIcons>          
        </TopWrapper>
    );
};   