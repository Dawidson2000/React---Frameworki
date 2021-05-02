import { FC } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    display: flex;
`;

const PublicationImg = styled.div`
    min-width: 70px;
    min-height: 70px;
    background-color: grey;
    margin: 5px 10px;
    display: flex;
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
    
    & > p{
        margin-left: 10px;
        font-size: ${fontSize[14]};
    }
`;

export const Publication: FC = () => {  
    return (
        <Wrapper>
            <PublicationImg/>
            <InnerWrapper>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra orci non lacinia.</p>
                <InfoContainer>
                    <span> 7 jan. 2020</span>
                    <ProfilePhotoWrapper/>
                    <span>John Doe</span>
                </InfoContainer>
            </InnerWrapper> 
        </Wrapper>
    )}