import { Component } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'
import {media} from '../../styledHelpers/Breakpoints';
import {Entity} from './EntitiesType';
import {InputWrapper, FilterInput, CustomIcon} from '../Common/SearchInput'

import {ISingleUser} from '../../entities/users';

interface IWrapperProps{
    toggle: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    display: grid;
    width: 100%;
    
    overflow-x: scroll;

    ${media.desktop`
        overflow: hidden;
    `}

    ${props => {
    if (props.toggle) {
      return `
        grid-template-columns: 1fr;
      `;
    } else {
      return `
        grid-template-columns: 1fr 1fr 1fr;
      `;
    }
  }}
`;

const Tile = styled.div`
    display: flex;
    margin: 5px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

    &>img{
        max-width: 75px;
        max-height: 75px;
    }
    & > div > h2{
        color: ${Colors.blue};
        font-size: ${fontSize[20]};
        margin: 5px;
    }
    & > div > span{
        color: ${Colors.grey};
        font-size: ${fontSize[12]};
        margin: 0 5px;
    }
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ListStyleButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    width: 100%;
    justify-content: flex-end;
`;
const ListButton = styled.button<IWrapperProps>`
    height: 30px;
        padding: 0 10px;
        font-weight: 600;
        background-color: #eaecf5;
        border-radius: 5px;
        border: none;
        transition: linear 0.1s;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        ${props => {
        if (props.toggle) {
        return `
            color: ${Colors.blue};
        `;
        } else {
        return `
            color: gray;
            transform: scale(0.9);
      `;
    }
  }}
`;
const MosaicButton = styled.button<IWrapperProps>`
        height: 30px;
        padding: 0 10px;
        color: ${Colors.blue};
        font-weight: 600;
        background-color: #eaecf5;
        border-radius: 5px;
        border: none;
        transition: linear 0.1s;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        ${props => {
        if (props.toggle) {
        return `
            color: gray;
            transform: scale(0.9);
        `;
        } else {
        return `
            color: ${Colors.blue};
      `;
    }
  }}
`;
export interface IEntitiesProps{
    users: ISingleUser[]
}

class Entities extends Component<IEntitiesProps> {

    state = {
        entitiesTiles: [],
        isList: false,
        inputText: "",
    }

    inputHandler = (e: any) => {
        const text = e.target.value;
        this.setState((prevState) => ({
            inputText: text
        }))
    }
    
    async componentDidMount(){    
        const post = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30');
        const postJson = await post.json();

        const photos = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30');
        const photosJson = await photos.json();
       
        const posts: Entity[] = postJson.map((element: any) => {
            return({userId: element.userId, PhotoId: element.id})       
        })
       
        const entitiesTiles = posts.map((entity: Entity, index: number) => {
            const title = this.props.users[entity.userId].company.name;
                return(
                    <div key={index}>
                        {title?.toLowerCase().includes(this.state.inputText.toLowerCase()) &&
                            <Tile>
                                <img src={photosJson[entity.userId]?.url}/>
                                <TextWrap>
                                    <h2>{title}</h2>
                                    <>
                                        <span>{this.props.users[entity.userId].address.street}</span>
                                        <span>{this.props.users[entity.userId].address.city}</span>
                                    </>
                                </TextWrap>
                            </Tile>
                            }
                    </div>
                )
        })

        this.setState((prevState) => ({
            entitiesTiles: entitiesTiles
        }))
    }

    componentDidUpdate(){
    }

    handleListView = () =>{
        this.setState((prevState) => ({
            isList: true,
        }))
    }

    handleMosaicView = () =>{
        this.setState((prevState) => ({
            isList: false,
        }))
    }


    render(){
        return (
            <>
             <InputWrapper>
                <FilterInput placeholder="Filter by title..." type="text" value={this.state.inputText} onChange={this.inputHandler}/>
                <CustomIcon src='../../media/icons/search.svg'/>
            </InputWrapper>   
            <ListStyleButtons>
                <MosaicButton toggle={this.state.isList} onClick={this.handleMosaicView}>Mosaic</MosaicButton>
                <ListButton toggle={this.state.isList} onClick={this.handleListView}>List</ListButton>
            </ListStyleButtons>
            <Wrapper toggle={this.state.isList}>
                {this.state.entitiesTiles}         
            </Wrapper>
            </>
        )
    }
}
export default Entities;