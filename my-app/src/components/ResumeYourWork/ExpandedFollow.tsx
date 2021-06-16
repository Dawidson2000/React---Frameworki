import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors'

const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: 2px solid ${Colors.blue};
    background-color: white;
    position: absolute;
    top: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
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
    transition: linear 0.05s;
    color: ${Colors.blue};

    &>svg{
        font-size: 25px;
        color: ${Colors.grey};
    }

    &:hover{    
        background-color: ${Colors.lightBackgroundBlue};
        border-radius: 5px;
    }

    &:active{    
        transform: scale(0.9);
    }
`;
export interface IExpandedFollowProps{
    passfollowedItem: any;
}

export const ExpandedFollow: FC<IExpandedFollowProps> = (props) => {

    const items = ['My items', 'All items'];

    
   const functionHandler = (index: number) => {
        props.passfollowedItem(items[index]);
        }

    return (
        <Wrapper>
            <Button style={{margin: '5px', color: '${Colors.blue}'}} type="button" onClick={()=>{functionHandler(0)}}>{items[0]}</Button>
            <Button style={{margin: '5px'}} type="button" onClick={()=>{functionHandler(1)}}>{items[1]}</Button>
        </Wrapper>
    )}