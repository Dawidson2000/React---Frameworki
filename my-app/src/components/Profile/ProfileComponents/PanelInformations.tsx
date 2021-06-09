import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import {GrFormClose} from 'react-icons/gr';

const Wrapper = styled.div`
    width: 100%;
    border-top: solid 2px #e1e3e6;
    margin-top: 30px;
    padding: 10px;
    
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
`;
export interface IPanelInformations{
    Edited: boolean;
}

export const PanelInformations: FC<IPanelInformations> = (props) => {
    
    const [hourlyFe, setHourlyFee] = useState<number>(610);
 
    const handleFeeChange = (event: any) => {
        setHourlyFee(event.target.value)
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
        </Wrapper>
    )
}

