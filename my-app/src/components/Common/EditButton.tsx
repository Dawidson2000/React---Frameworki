import styled from 'styled-components';

export const EditButton = styled.button`
    position: absolute;
    top: 40px;
    right: 10px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 35px;
    height: 35px;
    box-sizing: border-box;

    &>svg{
        font-size: 25px;
    }

    &:hover{
        background-color: lightgray;
        border-radius: 50%;
    }

    &:active{
        transform: scale(0.9);
    }
`;

