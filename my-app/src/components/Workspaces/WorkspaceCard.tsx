import React, { Component } from "react";
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: white;
    border-radius: 5px;
`;
const CustomIcon = styled.img`
    width: 50%;
    height: auto;
`;
const ImgWrapper = styled.div`
    height: 40%;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
`;
const CustomImg = styled.img`
    height: auto;
    width: 100%;
`;

const MiddleWrapper = styled.div`
    height: 40%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    color: black;
    & > span{
        margin-left: 10px;
    }
`;
const IconWrapper=styled.div`
    height: 90px;
    width: 90px;
    background-color: white;
    border-radius: 5px;
    margin-left: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StatsContainer = styled.div`
    font-size: ${fontSize[12]};
    height: 20%;
    display: flex;
    align-items: center;
`;
const StatsIcon = styled.img`
    height: 13px;
    margin: 0 10px;
`;
const UpdateContainer=styled.div`
    font-size: ${fontSize[12]};
    margin: 10px;
    color: lightgrey;
`;
const BottomWrapper=styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
`;

export interface WorkspaceProps{
    title: string,
    iconLink: string
}

export class WorkspaceCard extends Component<WorkspaceProps> {

    setCategory(){
        if(this.props.title.toLocaleLowerCase().includes('contract')) return <span>Contract</span>
        else if(this.props.title.toLocaleLowerCase().includes('corporate')) return <span>Corporate</span>
        else return <span>Norms</span>
    }
    setPhoto(){
        if(this.props.title.toLocaleLowerCase().includes('contract')) return '../../media/photo/contract.jpg';
        else if(this.props.title.toLocaleLowerCase().includes('corporate')) return '../../media/photo/corporate.jpg';
        else return '../../media/photo/norms.jpg'
    }

    render() {
      return (
        <Wrapper>
            <ImgWrapper>
                <CustomImg src={this.setPhoto()}/>
            </ImgWrapper>
            <Link to="/TestPage">
                <MiddleWrapper>
                    <IconWrapper>
                        <CustomIcon src={this.props.iconLink}/> 
                    </IconWrapper>
                    <span>{this.props.title}</span>
                </MiddleWrapper>
            </Link>
            <BottomWrapper>
                <StatsContainer>
                    <StatsIcon src={this.props.iconLink}/> 
                    {this.setCategory()}
                    <StatsIcon src='../../media/icons/people.svg'/>
                    <span>2137 users</span>                
                </StatsContainer>
                <UpdateContainer>
                    <span>Last update 2 days ago</span>
                </UpdateContainer> 
            </BottomWrapper>          
        </Wrapper>
      );
    }
  }

 /* <p>{this.props.title}</p>
            <CustomIcon src={this.props.iconLink}/>*/