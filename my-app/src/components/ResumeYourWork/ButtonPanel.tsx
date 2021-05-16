import { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
    height: 26px;
    border-radius: 5px;
    background-color: ${props => props.theme.main};
    border: none;
    margin: 5px;
    white-space: nowrap;
    padding: 0 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;

    &>span{
        color: ${props => props.theme.main};
        filter: brightness(30%);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin: 6px;
`;

const CustomIcon = styled.img`
    width: 15px;
    margin-left: 2px;
    margin-right: 5px;
`;

const theme = {
    main: "lightgreen"
};

export const ButtonPanel: FC = () => {
    
    const renderbtn = (text: string) =>{
        return(
            <>
            
            <Button>
                <CustomIcon src='../../media/icons/search.svg'/>
                <span>{text}</span>
            </Button>
            </>    
        )
    }

    return (
      <Wrapper>
          <ThemeProvider theme={{ main: "aquamarine" }}>
            {renderbtn('All')}
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            {renderbtn('SAS')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "lightblue" }}>
            {renderbtn('SARL')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "orange" }}>
             {renderbtn('Secondary business')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "grey" }}>
            {renderbtn('Communities')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "lightgray" }}>
            {renderbtn('POA')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "white" }}>
            {renderbtn('Survey')}
          </ThemeProvider>
          <ThemeProvider theme={{ main: "white" }}>
            {renderbtn('...')}
          </ThemeProvider>
      </Wrapper>
    )
}