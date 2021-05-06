import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import {media} from '../../styledHelpers/Breakpoints';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {WorkspaceCard} from "./WorkspaceCard"

import {WorkspacesTab} from './WorkspacesTab';


const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0px;

    ${media.phoneXL`
      padding: 30px;
    `}

    & > h2{
        margin: 15px;
        font-size: 20px;
    }

`;

const Item = styled.div`   
`;
const Content = styled.div`
    width: 255px;
    height: 220px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: 0.15s;

    ${media.phoneM`
    width: 270px;
    `}

    &:hover{
      transform: scale(0.95);
    }
`;

const StyledSlider = styled(Slider)`
.slick-slide{
    
}
.slick-prev:before{
    color: grey !important;
}
.slick-next:before{
    color: grey !important;
}
`;

export class Workspaces extends Component {

  state = {
    workspaces: WorkspacesTab
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 425,
          settings: {
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false
          }}]
    }

    const workspaces = this.state.workspaces.map((workspace: any, index: number) => {
      let title = workspace[0].toString();
      let link = workspace[1].toString();
      return(    
        <div key={index}> 
          <Item>
            <Content>
              <WorkspaceCard title={title} iconLink={link}/>
            </Content>
          </Item>
        </div>
    )})

    return (
      <Wrapper>
        <h2> Workspaces</h2>
        <StyledSlider {...settings}>
            {workspaces}
        </StyledSlider>
      </Wrapper>
    );
  }
}