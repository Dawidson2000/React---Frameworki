import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors'

export const Button = styled.button`
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-width: 45px;
    color: ${Colors.grey};
    font-weight: 600;
    box-sizing: border-box;
    border: 2px solid transparent;

    &>svg{
        font-size: 25px;
        color: ${Colors.grey};
    }

    &:hover{    
        border: 2px solid ${Colors.grey};
        border-radius: 5px;
    }
`;