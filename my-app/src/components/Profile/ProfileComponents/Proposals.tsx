import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'
import { JsxElement } from 'typescript';

const Wrapper = styled.div`
    width: 100%;
    overflow-x: scroll;

    & > table{
        width: 100%;
        border: 1px solid;
        text-align: center;

        & > th, td{
            border: 1px solid;
            padding: 10px;
            max-width: 100px;
        }
    }
`;
const tableRows = [['Operation', 'Renault', 'France', '#Tax', '20/01/2018', 'Racine'],
                  ['Op. Promet', 'Renault', 'USA', '#M&A', '25/03/2019', 'Cliford Chance'],
                  ['Op. Latandre', 'Renault', 'Italia', '#M&A', '25/03/2020', 'SVZ']]
const headers = ['Name', 'Entity', 'Location', "Expertise", 'Date', 'Firm'];   

export const Proposals: FC = () => {
    
    const [rows, setRows] = useState<string[][]>(tableRows);
    const [edited, setedited] = useState<boolean>(false);
 
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
    
    const handleEditMode = () => {
        setedited(!edited);
    }

    const createTable = () => {
        console.log(rows);
        return(
            <>
                <table>
                    <tbody>
                        <tr>
                            {headers.map((header: string) => {
                                return <th>{header}</th>
                            })}
                        </tr>
                        {rows.map((row: string[], rowIndex: number) => {
                            return(
                                 <tr>
                                    {row.map((data: string, dataIndex: number) => {
                                        return(
                                            edited ? <td><input type='input' placeholder={data} onBlurCapture={(event)=>editData(rowIndex, dataIndex, event)}/></td>
                                                   : <td>{data}</td>
                                        )
                                    })}
                                    {edited && <td><button type="button" onClick={() => removeRow(rowIndex)}>X</button></td>}
                                </tr>   
                            )
                        })}
                    </tbody>
                </table>
                {edited ? 
                        <>
                            <button type="button" onClick={addRow}>Add Row</button>
                            <button type="button" onClick={handleEditMode}>Edit</button>
                        </>
                        : <button type="button" onClick={handleEditMode}>Edit</button>} 
            </>
        )   
    }
   
    return (       
        <Wrapper>
            {createTable()}           
        </Wrapper>
    )
}

