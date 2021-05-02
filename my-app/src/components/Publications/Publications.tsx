import { FC } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'
import {media} from '../../styledHelpers/Breakpoints';

import {Publication} from './Publication';

const Wrapper = styled.div`
    background-color: white;
    min-height: 300px;
    margin-bottom: 10px;
    margin-right: 15px;
    width: 100%; 
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    ${media.desktop`
        flex-direction: row;
    `}
`;

const LeftPhoto = styled.div`
    min-width: 300px;
    min-height: 300px;
    color: white;
    position: relative;
    background-image:
    linear-gradient(to bottom, rgba(17, 33, 39, 0.1), rgba(13, 23, 26, 0.85)),
    url('../../media/photo/skyscrapers.jpg');
    background-size: cover;
    border-radius: 5px;
`;

const TextContainer = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 20px;
    
    & > p{
        margin: 0 10px;
    }
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

const PublicationsContainer = styled.div`
    & > h1{
        margin: 10px;
    }
    & > a{
        margin: 10px;
        font-size: ${fontSize[14]};
        text-decoration: none;
        color: ${Colors.blue};
    }
`;

export const Publications: FC = () => {  
    return (
        <Wrapper>
            <LeftPhoto>
                <TextContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra orci non lacinia.</p>
                    <InfoContainer>
                        <span> 7 jan. 2020</span>
                        <ProfilePhotoWrapper/>
                        <span>John Doe</span>
                    </InfoContainer>    
                </TextContainer>
            </LeftPhoto>           
            <PublicationsContainer>
                <h1>Latest publications</h1>
                <Publication/>
                <Publication/>
                <Publication/>
                <Link to="/TestPage">See more publications</Link>
            </PublicationsContainer>
        </Wrapper>
    )
}