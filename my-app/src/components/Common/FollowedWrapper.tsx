import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors'

export const FollowedWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.05s;
    border-radius: 5px;
    & > span{
        color: ${Colors.blue};
        font-size: ${fontSize[12]};
        margin: 0 5px;
    }
    &:hover{
        border-radius: 5px;
        cursor: pointer;
        background-color: white;
    }
`;