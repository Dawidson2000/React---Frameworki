import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors'

export const SettingBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
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