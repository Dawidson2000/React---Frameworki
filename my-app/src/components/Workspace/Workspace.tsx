import { FC, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {media} from '../../styledHelpers/Breakpoints';
import { reduceEachLeadingCommentRange } from 'typescript'
import {SettingBtn} from '../Common/SettingButton';


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

const MiddleWrapper = styled.div`
    width: 100%;
    background-color: #f1f0f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 5px;
`;

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f1f0f0;
    padding: 10px;
    box-sizing: border-box;
`;

const Card = styled.div`
    height: 200px;
    width: 300px;
    margin: 10px;
    background-color: white;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

    &>p{
        font-size: ${fontSize[14]};
        line-height: 20px;
        padding: 10px;
    }
    &>h4{
        padding: 0 0 0 10px;
    }
    &>h4>b{
        font-weight: 800;
    }
`;

const HideButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin: 0px 10px;
    width: 50px;
    height: 30px;
    font-size: ${fontSize[14]};
    border-radius: 5px;
    transition: 0.1s;
    font-weight: 500;
    color: grey;

    &:hover{
        background-color: lightgray;
    }
`;

const BackgroundIcon = styled.img`
    min-width: 140px;
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.1;
`;

export interface IWorkspaceProps{
    userId: number;
}


export const Workspace: FC<IWorkspaceProps> = (props) => {
    const location: any = useLocation()
    
    const [hidden, setHidden] = useState(true);
  
    const hiddenHandler = () =>{
        setHidden(!hidden)
    }

    const hiddenAction =(): string =>{
        if(hidden) return "Hide"
        return "Show"
    }

    const renderCard = (iconLink: string, title: string, text: string) =>{
        return(
            <>
                <CustomIcon src={iconLink}/> 
                <BackgroundIcon src={iconLink}/>
                <h4>{title}</h4>
                <p>{text}</p>
            </>
        )
    }


    return (
        <Wrapper>
            <TopContainer>
                <PhotoWrapper>
                    <CustomPhoto src={location.state?.photoLink}/>
                </PhotoWrapper>
                <InnerWrapper>
                    <SettingBtn style={{margin: '15px'}}><img src='../../media/icons/cog.svg' alt='settings'/></SettingBtn>
                    <CustomIcon src={location.state?.iconLink} />
                    <div>
                        <h2>{location.state?.title}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ex sit amet ex suscipit feugiat. Sed quis consectetur dolor.</p>
                    </div>
                </InnerWrapper>
            </TopContainer>
            <HeaderWrapper>
                <h5>Start working on corporate matters</h5>
                <HideButton onClick={hiddenHandler}>{hiddenAction()}</HideButton>
            </HeaderWrapper>
            {hidden &&
                <MiddleWrapper>
                    <Card>
                        {renderCard('../../media/icons/search.svg', 'Explore your Entities', 'Take a few minutes to look at the most important elements and specificies of your entities')}
                    </Card>
                    <Card>
                        {renderCard('../../media/icons/house.svg', 'Structure the ownership', 'Get a clear view of the ownership by looking at the relations between individuals and entities')}
                    </Card>
                    <Card>
                        {renderCard('../../media/icons/people.svg', 'Define the calendar', 'Prepare future events by creating detailed plans around the life of your entity.')}
                    </Card>
                </MiddleWrapper>
            }
            <div style={{margin: '0 0 25px 0'}}></div>
            <ResumeYourWork title='Latest Update' buttonPanel={true} userId={props.userId}/>
        </Wrapper>
    )
}