import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';
import {media} from '../../styledHelpers/Breakpoints';

import {ExpandedMenu} from './ExpandedMenu';

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
    
    ${media.phone`
        width: 120px;
    `}
    ${media.phoneM`
        width: 180px;
    `}
    ${media.phoneXL`
        width: 220px;
    `}
    ${media.tablet`
        width: 400px;
    `}
    ${media.desktop`
        width: 500px;
    `}

`;

const CustomInput = styled.input`
    border: none;
    width: 450px;
    outline: none;
    text-align: center;
    color: black;

    ${media.phone`
        width: 60px;
    `}
    ${media.phoneM`
        width: 150px;
    `}
    ${media.phoneXL`
        width: 180px;
    `}
    ${media.tablet`
        width: 500px;
    `}
`;

const RightIcons = styled.div`
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    ${media.phone`
        width: 200px;
        padding-right: 5px;
    `}
    ${media.tablet`
        width: 200px;
    `}
    ${media.desktop`
        width: 410px;
    `}
`;

const MiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuArrow = styled.img`
  margin-left: 140px;
  padding: 20px;
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
    };

    return(
        <TopWrapper>
            <LeftWrapper>    
                <CustomImg src='../../media/logo.png'/>
                <LeftHomeIcon ref={wrapperRef} onClick={menuHandler}>
                        <CustomIcon src='../../media/icons/house.png'/>
                        <div>Home</div>
                        <MenuArrow src ='../../media/icons/arrow-down.png'/>
                    {dropdownOpen && <ExpandedMenu/>}
                </LeftHomeIcon> 
            </LeftWrapper>
            <MiddleWrapper>
                <InputWrapper> 
                    <CustomInput type='text' placeholder="Search LegalCluster"/>
                    <CustomIcon src='../../media/icons/search.png'/>
                </InputWrapper>
            </MiddleWrapper>    
            <RightIcons>
                <CustomIcon src='../../media/icons/house.png'/>
                <CustomIcon src='../../media/icons/comments.png'/>
                <CustomIcon src='../../media/icons/bell.png'/>
                <MenuIcon src='../../media/icons/menu.png'/>
            </RightIcons>
           
        </TopWrapper>
    );
};   