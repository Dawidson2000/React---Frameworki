import { FC } from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styledHelpers/Components';
import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

import {DropDown} from './DropDown';

export const ExpandedMenu: FC = () => {
    return(
        <div>
        <DropDown/>
        </div>
    )
}