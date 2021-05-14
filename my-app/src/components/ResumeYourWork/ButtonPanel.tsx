import { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    height: 26px;
    border-radius: 5px;
    background-color: lightblue;
    border: none;
    margin: 5px;
    white-space: nowrap;
    padding: 0 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ButtonPanel: FC = () => {
    
    const renderbtn = (text: string) =>{
        return(
            <Button>{text}</Button>
        )
    }

    return (
      <Wrapper>
          {renderbtn('All')}
          {renderbtn('SAS')}
          {renderbtn('SARL')}
          {renderbtn('Secondary business')}
          {renderbtn('Communities')}
          {renderbtn('POA')}
          {renderbtn('Survey')}
          {renderbtn('...')}
      </Wrapper>
    )
}