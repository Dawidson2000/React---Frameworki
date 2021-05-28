import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors'

export interface IWrapperProps{
    toggle: boolean
}

export const MosaicButton = styled.button<IWrapperProps>`
        height: 30px;
        padding: 0 10px;
        font-weight: 600;
        background-color: #eaecf5;
        border-radius: 5px;
        border: none;
        transition: linear 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        & > span{
            margin: 0 5px;
        }

        & > label{
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        ${props => {
        if (props.toggle) {
        return `
            color: ${Colors.blue};
        `;
        } else {
        return `
            color: gray;
            transform: scale(0.9);
            width: 30px;
            overflow: hidden;
            
            & > span{
            display: none;
      `;
    }
  }}
`;

export const ListButton = styled.button<IWrapperProps>`
        height: 30px;
        padding: 0 10px;
        font-weight: 600;
        background-color: #eaecf5;
        border-radius: 5px;
        border: none;
        transition: linear 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        & > span{
            margin: 0 5px;
        }

        & > label{
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        ${props => {
        if (props.toggle) {
        return `
            color: ${Colors.blue};
        `;
        } else {
        return `
            color: gray;
            transform: scale(0.9);
            width: 30px;
            overflow: hidden;
            
            & > span{
            display: none;
      `;
    }
  }}
`;
