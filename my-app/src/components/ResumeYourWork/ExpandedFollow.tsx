import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors'

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${Colors.blue};
    position: absolute;
    top: 25px;
`;

export const ExpandedFollow: FC = () => {  
    return (
        <Wrapper>
        </Wrapper>
    )}