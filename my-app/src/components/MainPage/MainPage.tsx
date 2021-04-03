import React, {FC} from 'react';
import styled from 'styled-components';

import {TopBar} from '../TopBar/TopBar';

const Tak = () =>{
    return <div>Tak</div>
}

const Wrap = styled.div `
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
`;

const MainPage: FC = () => {
    return (
        <Wrap>
            <TopBar/>
            <Content>
                <div>content</div>
            </Content>
        </Wrap>
    )
}

/*function MainPage() {
    return (
        <Wrap>
            <TopBar/>
            <Content>
                <div>content</div>
            </Content>
        </Wrap>
    );
  }*/

export default MainPage;
