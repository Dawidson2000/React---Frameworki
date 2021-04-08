import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

import {ExpandedMenu} from './ExpandedMenu';

const TopWrapper = styled(Wrapper)`
    width: 100%;
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
    margin-right: 30px;
    margin-left: 20px;
`;

const CustomIcon = styled.img`
    width: 23px;
    height: 23px;
    color: black;
    margin: 0 10px;
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
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    padding: 3px; 
    width: 500px;
`;

const CustomInput = styled.input`
    border: none;
    width: 450px;
    outline: none;
    text-align: center;
    color: lightgray;
`;

const RightIcons = styled.div`
    margin-right: 20px;
`;

const MiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TopBar: FC = () => {
    return(
        <TopWrapper>
            <LeftWrapper>    
                <CustomImg src='../../media/logo.png'/>
                <LeftHomeIcon>
                    <CustomIcon src='../../media/icons/house.png'/>
                    <div>Home</div>
                </LeftHomeIcon>
            </LeftWrapper>
            <MiddleWrapper>
                <ExpandedMenu></ExpandedMenu>
                <InputWrapper> 
                    <CustomInput type='text' defaultValue="Search LegalCluster"/>
                    <CustomIcon src='../../media/icons/search.png'/>
                </InputWrapper>
            </MiddleWrapper>    
            <RightIcons>
                <CustomIcon src='../../media/icons/house.png'/>
                <CustomIcon src='../../media/icons/comments.png'/>
                <CustomIcon src='../../media/icons/bell.png'/>
            </RightIcons>
        </TopWrapper>
    );
};   