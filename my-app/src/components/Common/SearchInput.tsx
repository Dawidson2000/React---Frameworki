import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Colors} from '../../styledHelpers/Colors'

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-right: 10px;
`;

export const FilterInput = styled.input`
    width: 120px;
    height: 20px;
    border: none;
    border-radius: 6px;
    padding-left: 5px;
    outline: none;
`;

export const CustomIcon = styled.img`
    width: 15px;
    margin: 5px;
    height: auto;
`;