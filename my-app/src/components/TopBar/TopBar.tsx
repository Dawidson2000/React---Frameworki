import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
    width: 100px;
    height: 100px;
    background-color: red;
`;

export const TopBar: FC = () => {
    return(
        <Wrapper2>
            fdgdfgsgsdfgssdf
        </Wrapper2>
    );
};   