import { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {media} from '../../styledHelpers/Breakpoints';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

const TopContainer = styled.div`
    width: 95%;
    background-color: white;
    padding-bottom: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 25px;
`;

const PhotoWrapper = styled.div`
    height: 170px;
    width: 100%;
    overflow: hidden;
`;

const CustomPhoto = styled.img`
    width: 100%;
    height: auto;
`;

const CustomIcon = styled.img`
    min-width: 60px;
    padding: 20px;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    & > div > h2{
        font-size: ${fontSize[18]};
        padding: 10px;
    }
    & > div > p{
        padding: 10px;
        color: lightgray;
    }
`;

const SettingBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    outline: none;
    background: none;
    border: none;
    transition: 0.1s;

    &:hover{
        transform: scale(1.1);
    }
    &:active{
        transform: scale(1);
    }

    &>img{
        width: 18px;
    }
`;

const MiddleWrapper = styled.div`
    height: 250px;
    width: 100%;
    background-color: lightgrey;
    margin-bottom: 25px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    ${media.desktop`
        flex-direction: row;
    `}   
`;

const Card = styled.div`
    width: 32%;
    height: 200px;
    margin: 5px;
    background-color: white;
`;

export const Workspace: FC = () => {
    const location: any = useLocation()

    return (
        <Wrapper>
            <TopContainer>
                <PhotoWrapper>
                    <CustomPhoto src={location.state?.photoLink}/>
                </PhotoWrapper>
                <InnerWrapper>
                    <SettingBtn><img src='../../media/icons/cog.svg' alt='settings'/></SettingBtn>
                    <CustomIcon src={location.state?.iconLink} />
                    <div>
                        <h2>{location.state?.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ex sit amet ex suscipit feugiat. Sed quis consectetur dolor.</p>
                    </div>
                </InnerWrapper>
            </TopContainer>
            <MiddleWrapper>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </MiddleWrapper>
            <ResumeYourWork/>
        </Wrapper>
    )
}