import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors';
import {FiX, FiPlus} from 'react-icons/fi';
import {GoPlus} from 'react-icons/go';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 10px;

    &>div>h2{
        color: ${Colors.grey};
        margin: 15px 0;
    }
`;
const Characteristics = styled.div`

`;

const CharacteristicWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   
   &>button{
       background: none;
       height: 25px;
       border: none;
       outline: none;
       display: flex;
       align-items: center;
       color: ${Colors.see};
       font-size: 20px;
       font-weight: 500;
       border: 2px solid transparent;
       border-radius: 5px;
       cursor: pointer;
       transition: 0.05s linear;

       &:hover{
           border: 2px solid;
       }

       &:active{
           transform: scale(0.9);
       }
   }
`;

const Characteristic = styled.div`
    background-color: ${Colors.lightblue};
    color: ${Colors.see};
    border-radius: 5px;
    margin: 0 10px 10px 0px;
    display: flex;
    align-items: center;

    &>input{
       background: none;
       width: 100%;
       height: 20px;
       border: none;
       outline: none;
       background-color: lightgray;
       border-radius: 5px;
        font-family: inherit;
        font-size: inherit;
        padding: 2px 5px;
   }
   &>button{
       background: none;
       height: 100%;
       border: none;
       outline: none;
       display: flex;
       align-items: center;
       color: white;
       font-size: 17px;
       font-weight: 800;
       background-color: red;
       border-radius: 5px;
       cursor: pointer;
   }
   &>span{
       margin: 5px;
   }
`;

export interface IExpertiseProps{
    Edited: boolean;
}

enum dataType {
    Expertise,
    Specialties,
    Admission,
    Counties
}

/*const DefaultData: {Expertise: string[], Specialties: string[], Admission: string[], Counties: string[]} = 
                   {Expertise: ['Mergers and acquisition'],
                    Specialties: ['Cross border operation', 'Transaction over 500M'],
                    Admission: ['Paris bar association', 'Tunisia bar association'],
                    Counties: ['Tunisia']}*/

const DefaultData: { [name: string]: string[] } = 
                   {Expertise: ['Mergers and acquisition'],
                    Specialties: ['Cross border operation', 'Transaction over 500M'],
                    Admission: ['Paris bar association', 'Tunisia bar association'],
                    Counties: ['Tunisia']}
                    
export const Expertise: FC<IExpertiseProps> = (props) => {

    const [data, setData] = useState(DefaultData);

    const createCharacteristics = (data: any, dataType: string) =>{
        return(                
            <Characteristics>
                <h2>{dataType}</h2>
                <CharacteristicWrapper>
                    {data[dataType].length === 0 && <span>No {dataType}</span>}
                    {data[dataType].map((characteristic: string, index: number)=>{
                        return(
                            <Characteristic key={index}>
                                {props.Edited ? 
                                <>
                                    <input type="text" value={characteristic} onChange={(event)=>editData(dataType, index, event)}/>
                                    <button type='button' onClick={() => removeData(dataType, index)}><FiX/></button>
                                </> 
                                : 
                                <span>{characteristic}</span>}
                            </Characteristic>
                        )
                    })}
                    {props.Edited &&  <button type='button' onClick={() => addData(dataType)}><GoPlus/></button>}
                </CharacteristicWrapper>    
            </Characteristics>
        )
    }

    const editData = (dataType: string, dataIndex: number, event: any) => {
        let tempData = {...data};
        event.target.value ? tempData[dataType][dataIndex] = event.target.value : tempData[dataType][dataIndex] = 'empty';
        setData(tempData);
    }

    const removeData = (dataType: string, dataIndex: number) =>{
        let tempData = {...data};
        console.log(data);
        tempData[dataType].splice(dataIndex, 1);
        setData(tempData);
    }

    const addData = (dataType: string) => {
        let tempData = {...data};
        tempData[dataType].push(dataType);
        console.log(tempData);       
        setData(tempData);
    }

    return (
        <Wrapper>  
            {createCharacteristics(data, 'Expertise')}
            {createCharacteristics(data, 'Specialties')}
            {createCharacteristics(data, 'Admission')}
            {createCharacteristics(data, 'Counties')}   
        </Wrapper>
    )
}