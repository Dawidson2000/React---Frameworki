import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'

import {EditButton} from '../../Common/EditButton';

import {Proposals} from '../ProfileComponents/Proposals';
import {InternalReviews} from "./InternalReviews";
import {PanelInformations} from './PanelInformations';
import {Services} from './Services'
import {Fees} from "./Fees";
import {Expertise} from './Expertise'
import {BiPencil, BiSave} from 'react-icons/bi';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 10px;
    border-top: solid 2px #e1e3e6;

    &>div>h2{
        color: ${Colors.grey};
        margin: 15px 0;
    }
`;
const Characteristics = styled.div`

`;

const CharacteristicWrapper = styled.div`
   display: flex;
`;

const Characteristic = styled.div`
    background-color: ${Colors.lightblue};
    color: ${Colors.see};
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px 0 0;
`;

export const UserCharacteristics: FC = () => {
    
    const [isEdited, setisEdited] = useState(false);

    const onEdited = () =>{
        setisEdited(!isEdited);
    }
    
    return (
        <Wrapper>
            <Expertise Edited = {isEdited}/>

            { isEdited ? <EditButton type="button" onClick={onEdited}><BiSave/></EditButton>
                       : <EditButton type="button" onClick={onEdited}><BiPencil/></EditButton>}
            
            <PanelInformations Edited = {isEdited}/>
            <Services Edited = {isEdited}/>
            <Proposals Edited = {isEdited}/>
            <InternalReviews Edited = {isEdited}/>
            <Fees Edited = {isEdited}/>            
        </Wrapper>
    )
}