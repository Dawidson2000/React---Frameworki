import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import {FaRegFile} from 'react-icons/fa';

const Wrapper = styled.div`
    width: 100%;
    border-top: solid 2px #e1e3e6;
    margin-top: 30px;
    padding: 10px;
    box-sizing: border-box;
    
    &>h2{
        font-size: ${fontSize[20]};
        color: black !important;
        margin-bottom: 40px !important;
    }
    &>h4{
        color: ${Colors.grey};
        font-size: ${fontSize[16]};
        margin-top: 25px;
        margin-bottom: 15px;
    }

    & > input{
        width: 100px;
        font-size: ${fontSize[16]};
        font-family: inherit;
        border: none;
        background-color: lightgray;
        border-radius: 5px;
        padding: 2px 5px;
        outline: none;
    }

    & > div{
        width: 100%;
        background-color: ${Colors.lightBackgroundBlue};
        height: 45px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        margin: 10px 0;
        box-sizing: border-box;

        & > input{
            font-family: inherit;
        }
    }

    & > div > span{
        display: flex;
        align-items: center;
   
        & > svg{
            font-size: 20px;
            margin-right: 10px;
        }
    }
`;
export interface IPanelInformations{
    Edited: boolean;
}

export const PanelInformations: FC<IPanelInformations> = (props) => {
    
    const [hourlyFe, setHourlyFee] = useState<number>(610);
    const [selectedFile, setSelectedFile] = useState<any>(null);
 
    const handleFeeChange = (event: any) => {
        setHourlyFee(event.target.value)
    }

    const onFileChange = (event: any) => {
        setSelectedFile(event.target.files[0])
    }

    const fileData = () => {
        if(selectedFile)
            return( <span><FaRegFile/>File Name: {selectedFile?.name}</span> )     
        else 
            return( <span><FaRegFile/>No file Chosen</span> )       
    }
   
    return (       
        <Wrapper>
            <h2>Panel Informations</h2>
            <h4>Hourly fee</h4>
            {props.Edited ? 
            <>
                <input type="number" onInput={(event) => handleFeeChange(event)} defaultValue={hourlyFe} placeholder='fee'/>
                <span>€/hour (Negociated)</span>
            </>
            :
            <>
                <span>{hourlyFe}</span>
                <span>€/hour (Negociated)</span>
            </>}
            <h4>Terms & conditions</h4>
            <span>Monthly 10k€ retainer - see with Jeanny Smith</span>
            <div>
                {props.Edited ? <input type="file" onChange={onFileChange}/>
                              : fileData()}
            </div>
        </Wrapper>
    )
}

