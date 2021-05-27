import { FC } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'

import {MainProfile} from './ProfileComponents/MainProfile';
import {UserCharacteristics} from './ProfileComponents/UserCharacteristics';

const ProfileWrapper = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
`;

export interface IProfileProps{
    userID: number;
}

export const Profile: FC<IProfileProps> = (props) => {  
    return (
        <ProfileWrapper>
            <MainProfile userID={props.userID}/>
            <UserCharacteristics/>
        </ProfileWrapper>
    )}