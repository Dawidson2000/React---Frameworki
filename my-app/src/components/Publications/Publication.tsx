import { FC } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'

const Wrapper = styled.div`
    display: flex;
`;

const PublicationImgWrapper = styled.div`
    min-width: 70px;
    min-height: 70px;
    background-color: grey;
    margin: 5px 10px;
    display: flex;
    overflow: hidden;
`;

const PublicationImg = styled.img`
    max-width: 70px;
    max-height: 70px;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize[12]};
    font-weight: 200;

    & > span{
        margin: 10px;
    }
`;

const ProfilePhotoWrapper = styled.div`
    background-color: grey;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;
const InnerWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & > a{
        margin-left: 10px;
        font-size: ${fontSize[14]};
        text-decoration: none;
        color: black;
        padding-right: 5px;

        &:hover{
            color: ${Colors.blue};
        }
    }
`;

export interface PublicationProps{
    title: string,
    name: string
}

export const Publication: FC<PublicationProps> = (props) => {  
    return (
        <Wrapper>
            <PublicationImgWrapper>
                <PublicationImg src='../../media/photo/skyscrapers.jpg' alt='skyscrapers'/>
            </PublicationImgWrapper>
            <InnerWrapper>
                <Link to="/TestPage"><p>{props.title}</p></Link>
                <InfoContainer>
                    <span> 7 jan. 2020</span>
                    <ProfilePhotoWrapper/>
                    <span>{props.name}</span>
                </InfoContainer>
            </InnerWrapper> 
        </Wrapper>
    )}