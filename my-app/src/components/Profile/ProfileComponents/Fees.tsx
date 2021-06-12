import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../../styledHelpers/Colors'

const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 30px;
    padding: 10px;
    border-top: solid 2px #e1e3e6;
    box-sizing: border-box;

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
    }
    
    & > tr, th{
        border-bottom: 1px solid #e1e3e6;
        padding: 10px;
        max-width: 100px;
        text-align: left;
    }
  
    & > tr, td{
        padding: 10px;
        max-width: 100px;
        height: 20px;
        overflow: hidden;
        font-weight: 200;
    
        & > input{
            width: 100%;
            font-family: inherit;
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
const tableRows = [[2019, 'CS 153', 3500, 'Clifford Chance'],
                  [2018, 'CS 173', 9500, 'LinkLaters'],
                  [2017, 'CS 153', 35000, 'LinkLaters']]
const headers = ['Year', 'Cost center', 'Total amount', "Law firm"];
const inputTypes = ['number', 'text', 'number', 'text'];

export interface IFees{
    Edited: boolean;
}

export const Fees: FC<IFees> = (props) => {
    
    const [rows, setRows] = useState<(string | number)[][]>([]);

    useEffect(() => {
        setRows(tableRows);
      }, []);

    const addRow = () => {
        setRows(rows => [...rows, [new Date().getFullYear(), 'Cost Center', 'Total Amount', "Law firm"]]);
    }

    const removeRow = (index: number) => {
        let tempTab = [...rows];
        tempTab.splice(index, 1);
        setRows(tempTab);
    }
    
    const editData = (rowIndex: number, dataIndex: number, event: any) => {
        let tempTab = [...rows];
        let value: string;
        if(!event.target.value) value="empty"
        else value = event.target.value;
        tempTab[rowIndex][dataIndex] = value;
        setRows(tempTab);
    }
    
    const sortRowsByYear = () =>{
        const sortedRows = [...rows].sort(function(a: any, b: any){
            return b[0] - a[0];
        })
        return sortedRows;
    }  

    const createTable = (numberOfDisplayRows: number) => {
        let renderRows: (string | number)[][] = [];       
        props.Edited ?  renderRows = rows : renderRows = sortRowsByYear();
        
        return(
            <>
                <table>
                    <tbody>
                        <tr>
                            {headers.map((header: string, headerIndex: number) => {
                                return <th key={headerIndex}>{header}</th>
                            })}
                        </tr>
                        {renderRows.map((row: (string | number)[], rowIndex: number) => {
                            if(rowIndex<numberOfDisplayRows){
                                return(
                                    <tr key={rowIndex}>
                                        {row.map((data: string | number, dataIndex: number) => {
                                            return(
                                                props.Edited ? <td key={dataIndex}><input type={inputTypes[dataIndex]} value={data} placeholder={data.toString()} onChange={(event)=>editData(rowIndex, dataIndex, event)}/></td>
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
            <h2>Amount of fees</h2>
            {createTable(rows.length)}         
        </Wrapper>
    )
}

