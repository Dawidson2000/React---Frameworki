import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import {GrFormClose} from 'react-icons/gr';

const Wrapper = styled.div`
    width: 100%;
    overflow-x: scroll;
    margin: 30px 0px;
    padding: 10px;
    border-top: solid 2px #e1e3e6;

    & > button{
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
    
    &>h2{
        font-size: ${fontSize[20]};
        color: black !important;
        margin-bottom: 40px !important;
    }

    & > table{
        width: 100%;
        text-align: center; 
    }
    
    & > tr, th{
        border-bottom: 1px solid #e1e3e6;
        padding: 10px;
        max-width: 100px;
    }
  
    & > tr, td{
        padding: 10px;
        max-width: 100px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
    
        & > input{
            width: 100%;
        }

        & > button{
            background: none;
            outline: none;
            border: none;
            box-sizing: border-box;
            & > span{
                display: block;
                transform: rotate(45deg) !important;
                font-size: 20px;
            }
  
           &:hover{
               background-color: lightgray;
               border-radius: 50%;
               cursor: pointer;
           }
       }  
    }
`;
const tableRows = [['Operation', 'Renault', 'France', '#Tax', '20/01/2018', 'Racine'],
                  ['Op. Promet', 'Renault', 'USA', '#M&A', '25/03/2019', 'Cliford Chance'],
                  ['Op. Latandre', 'Renault', 'Italia', '#M&A', '25/03/2020', 'SVZ']]
const headers = ['Name', 'Entity', 'Location', "Expertise", 'Date', 'Firm'];

export interface IProposalsProps{
    Edited: boolean;
}

export const Proposals: FC<IProposalsProps> = (props) => {
    
    const [rows, setRows] = useState<string[][]>(tableRows);
    const [hiddenRows, setHiddenRows] = useState<boolean>(true);
 
    const addRow = () => {
        setRows(rows => [...rows, [...headers]]);
    }

    const removeRow = (index: number) => {
        let tempTab = [...rows];
        tempTab.splice(index, 1);
        setRows(tempTab);
    }
    
    const editData = (rowIndex: number, dataIndex: number, event: any) => {
        let tempTab = [...rows];
        tempTab[rowIndex][dataIndex] = event.target.value;
        setRows(tempTab);
    }
    
    const handleHiddenRows = () => {
        setHiddenRows(!hiddenRows);
    }

    useEffect(() => {
        if(props.Edited)
            setHiddenRows(false);
      }, [props.Edited]);

    
    const createTable = (numberOfDisplayRows: number) => {   
        return(
            <>
                <table>
                    <tbody>
                        <tr>
                            {headers.map((header: string, headerIndex: number) => {
                                return <th key={headerIndex}>{header}</th>
                            })}
                        </tr>
                        {rows.map((row: string[], rowIndex: number) => {
                            if(rowIndex<numberOfDisplayRows){
                                return(
                                    <tr key={rowIndex}>
                                        {row.map((data: string, dataIndex: number) => {
                                            return(
                                                props.Edited ? <td key={dataIndex}><input type='text' placeholder={data} onBlurCapture={(event)=>editData(rowIndex, dataIndex, event)}/></td>
                                                    : <td key={dataIndex}>{data}</td>
                                            )
                                        })}
                                        {props.Edited && <td><button type="button" onClick={() => removeRow(rowIndex)}><span>+</span></button></td>}
                                    </tr>   
                                )
                            }
                        })}
                    </tbody>
                </table>
                {props.Edited && <button type="button" onClick={addRow}>+ Add Row</button>}            
            </>
        )   
    }
   
    return (       
        <Wrapper>
            <h2>Proposals</h2>
            {hiddenRows ? createTable(3) : createTable(rows.length)}
            {props.Edited || (hiddenRows ? <button type="button" onClick={handleHiddenRows}>See more proposals</button>
                                        : <button type="button" onClick={handleHiddenRows}>See less proposals</button>)}         
        </Wrapper>
    )
}

