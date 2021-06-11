import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import {FiMessageCircle, FiUser, FiX} from 'react-icons/fi';

import {Button} from '../../Common/Button';

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    
    &>h2{
        font-size: ${fontSize[20]};
        color: black !important;
        margin: 0 !important;
    }
    &>p{
        margin: 15px 0;
        font-weight: 300;
    }
    &>h3{
        margin: 30px 0;
    }
    &>div{
        display: flex;
        align-items: center;
        background-color: ${Colors.lightBackgroundBlue};
        padding: 6px;
        margin: 5px 0;
        overflow: hidden;

        &>button{
            margin-left: 30px;
        }

        &>span{
            min-width: 200px;
            margin-left: 5px;
        }

        & > input{
        min-width: 200px;
        font-size: ${fontSize[16]};
        font-family: inherit;
        border: none;
        background-color: lightgray;
        border-radius: 5px;
        padding: 2px 5px;
        outline: none;
        }

        &>img{
            width: 35px;
        }
    }

    &>button{
        background: none;
        outline: none;
        border: none;
        color: ${Colors.see};
        font-size: ${fontSize[16]};
        cursor: pointer;
        padding: 5px 10px;

        &:hover{
            background-color: ${Colors.lightblue};
            border-radius: 5px;
        }
    }
`;
export interface IServices{
    Edited: boolean;
}

const defaultCorrespondants = ['Alan Shepard', 'John Glenn'];

export const Services: FC<IServices> = (props) => {
    
    const [correspondants, setCorrespondants] = useState<string[]>([]);

    useEffect(() => {
        setCorrespondants(defaultCorrespondants);
      }, []);

    const editCorrespondant = (index: number, event: any) => {
        let tempTab = [...correspondants];
        let value: string;
        
        if(!event.target.value) value="empty";
        else value = event.target.value;
        
        tempTab[index] = value;
        setCorrespondants(tempTab);
    }

    const addCorrespondant = () => {
        setCorrespondants(correspondants => [...correspondants, 'Correspondant']);
    }

    const removeCorrespondant = (index: number) => {
        let tempTab = [...correspondants];
        tempTab.splice(index, 1);
        setCorrespondants(tempTab);
    }

    const createCorrespondants = () => {
        return(
            correspondants.map((correspondant: string, index: number) => {
                return(
                    <div key={index}>
                        <img src='../../media/photo/redLego.png' alt='Correspondant photo'/>
                        {props.Edited ? <input type="text" value={correspondant} placeholder="Firstname nad Lastname" onChange={(event)=>editCorrespondant(index, event)}/>
                                      : <span>{correspondant}</span>}
                        <Button type="button"><FiMessageCircle />Message</Button>
                        <Button type="button"><FiUser />Profile</Button>
                        {props.Edited && <Button type="button" onClick={() => removeCorrespondant(index)}><FiX style={{color: 'red'}}/>Remove</Button>}
                    </div>
                )
            })
        )
    }
 
    return (       
        <Wrapper>
            <h2>Services & projects</h2>
            <p>Corporate M&A and international acquisitions</p>
            <h3>Internal correspondants</h3>
            {createCorrespondants()}
            {correspondants.length===0 && <p>No Correspondants!</p>}
            {props.Edited && <button type="button" onClick={addCorrespondant}>+ Add Correspondant</button>} 
        </Wrapper>
    )
}

