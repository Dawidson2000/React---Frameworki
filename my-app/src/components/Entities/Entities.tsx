import {ChangeEvent, FC, useEffect, useState} from 'react';
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

export const Entities: FC<IEntitiesProps> = (props) => {

    const [posts, setPosts] = useState<Entity[]>([]);
    const [isList, setisList] = useState(false);
    const [inputText, setinputText] = useState("");
    const [photosJson, setphotosJson] = useState<any>([]);

    const inputHandler = (e: any) => {
        const text = e.target.value;
        setinputText(text);
    }
    
    useEffect(() => {
        fetchData();
      }, []);
    
    async function fetchData() {    
        const post = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30');
        const postJson = await post.json();

        const photos = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30');
        const photosJson = await photos.json();
        setphotosJson(photosJson);
       
        const posts: Entity[] = postJson.map((element: any) => {
            return({userId: element.userId, PhotoId: element.id})       
        })    
        setPosts(posts);
    };

    const entitiesTiles = posts.map((entity: Entity, index: number) => {
        const title = props.users[entity.userId]?.company.name;
            return(
                <div key={index}>
                    {title?.toLowerCase().includes(inputText.toLowerCase()) &&
                        <Tile>
                            <img src={photosJson[entity.userId]?.url}/>
                            <TextWrap>
                                <h2>{title}</h2>
                                <>
                                    <span>{props.users[entity.userId]?.address.street}</span>
                                    <span>{props.users[entity.userId]?.address.city}</span>
                                </>
                            </TextWrap>
                        </Tile>
                        }
                </div>
            )
    })

    const handleListView = () =>{
        setisList(true);
    }

    const handleMosaicView = () =>{
        setisList(false);
    }


        return (
            <>
             <InputWrapper>
                <FilterInput placeholder="Filter by title..." type="text" value={inputText} onChange={inputHandler}/>
                <CustomIcon src='../../media/icons/search.svg'/>
            </InputWrapper>   
            <ListStyleButtons>
                <MosaicButton toggle={isList} onClick={handleMosaicView}>Mosaic</MosaicButton>
                <ListButton toggle={isList} onClick={handleListView}>List</ListButton>
            </ListStyleButtons>
            <Wrapper toggle={isList}>
                {entitiesTiles}         
            </Wrapper>
            </>
        )
   
}