import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';


const CustomIcon = styled.img`
margin-right: 70px;
`;

export const ExpandedMenu: FC = () => {
    return(
        <CustomIcon src ='../../media/icons/arrow-down.png'/>
    )
}