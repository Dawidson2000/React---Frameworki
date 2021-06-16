import {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'
import {media} from '../../styledHelpers/Breakpoints';
import {Entity} from './EntitiesType';
import {InputWrapper, FilterInput, CustomIcon} from '../Common/SearchInput'
import {ExpandedFollow} from '../ResumeYourWork/ExpandedFollow';

import {ISingleUser} from '../../entities/users';

import { FaListUl } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { BiShare, BiFilterAlt, BiSort, BiDotsHorizontalRounded } from 'react-icons/bi';

import {FollowedWrapper} from '../Common/FollowedWrapper'
import useDropdown from 'react-dropdown-hook';
import {Button} from '../Common/Button';
import {SettingBtn} from '../Common/SettingButton';

interface IWrapperProps{
    toggle: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    background-color: white;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 5px;
    transition: linear 0.1s;
    margin-top: 20px;
    margin-right: 0;
    overflow: hidden;
    transition: linear 0.1s;
   ${props => {
    if (props.toggle) {
      return ` 
        position: absolute;
        width: calc(100% - 30px);
        top: 50px;
        left: 0;
        min-height: calc(100vh - 110px);
        margin-left: 5px;
      `;
    } else {
      return `
       width: calc(100% - 20px);
      `;
    }
  }}

    ${media.tablet`
        margin-right: 20px;
    `}
`;

const EntitiesWrapper = styled.div<IWrapperProps>`
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
        grid-template-columns: 1fr  1fr  1fr;
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
    align-items: center;

    & > label{
        display: flex;
        margin-right: auto;
        align-items: center;
    }

`;
const ListButton = styled.button<IWrapperProps>`
        height: 30px;
        padding: 0 10px;
        font-weight: 600;
        background-color: #eaecf5;
        border-radius: 5px;
        border: none;
        transition: linear 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        & > span{
            margin: 0 5px;
        }

        & > label{
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
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
            width: 30px;
            overflow: hidden;
            
            & > span{
            display: none;
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
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: #b8c1e7;
            color: ${Colors.blue};
        }

        &:active{
           transform: scale(0.9);
        }

        & > span{
            margin: 0 5px;
        }

        & > label{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin: 0;
            padding: 0;
        }

        ${props => {
        if (props.toggle) {
        return `
            color: gray;
            transform: scale(0.9);
            width: 30px;
            overflow: hidden;
            
            & > span{
            display: none;
        }
        `;
        } else {
        return `
            color: ${Colors.blue};
      `;
    }
  }}
`;

const FiltersWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    width: 100%;
`;

export interface IEntitiesProps{
    users: ISingleUser[]
}

export const Entities: FC<IEntitiesProps> = (props) => {

    const [posts, setPosts] = useState<Entity[]>([]);
    const [isList, setisList] = useState(false);
    const [inputText, setinputText] = useState("");
    const [photosJson, setphotosJson] = useState<any>([]);
    const [fullScreen, setFullScreen] = useState(false);
    const [alphabeticallySort, setAlphabeticallySort] = useState(true);
    const [followedItem, setFollowedItem] = useState<string>('All items');

    const inputHandler = (e: any) => {
        const text = e.target.value;
        setinputText(text);
    }
    
    useEffect(() => {
        fetchData();
      }, [alphabeticallySort]);
    
    async function fetchData() {    
        const post = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=30');
        const postJson = await post.json();

        const photos = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30');
        const photosJson = await photos.json();
        setphotosJson(photosJson);
       
        const posts: Entity[] = postJson.map((element: any) => {
            return({userId: element.userId, PhotoId: element.id})       
        })
        
        const sortedPosts = posts.sort(function(a, b){
            let sortType: number;
            alphabeticallySort ? sortType = 1 : sortType = -1;
            if(props.users[a.userId]?.company.name < props.users[b.userId]?.company.name) { return -1 * sortType; }
            if(props.users[a.userId]?.company.name > props.users[b.userId]?.company.name) { return 1 * sortType; }
            return 0;  
        })
        
        setPosts(sortedPosts);
    };

    let entitiesTiles = posts.map((entity: Entity, index: number) => {
        const title = props.users[entity.userId]?.company.name;
        return(
            title?.toLowerCase().includes(inputText.toLowerCase()) &&
            <div key={index}>            
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
            </div>               
        )
    })

    const handleListView = () =>{
        setisList(true);
    }

    const handleMosaicView = () =>{
        setisList(false);
    }

    const handleFullScreen = () =>{
        setFullScreen(!fullScreen);
    }

    const handleAlphabeticallySort = () =>{
        setAlphabeticallySort(!alphabeticallySort);
    }
    
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () =>{
        toggleDropdown();
    };

        return (
            <Wrapper toggle={fullScreen}>
                <ListStyleButtons>
                    <label>
                        <h2>Entities</h2>
                        <SettingBtn style={{position: 'relative'}}><img src='../../media/icons/cog.svg' alt='settings'/></SettingBtn>
                    </label>   
                    <MosaicButton toggle={isList} onClick={handleMosaicView}><label><BsFillGridFill /></label><span>Mosaic</span></MosaicButton>
                    <ListButton toggle={isList} onClick={handleListView}><label><FaListUl /></label><span>List</span></ListButton>
                </ListStyleButtons>
                <FiltersWrapper>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Button type="button"><BiDotsHorizontalRounded/></Button>
                        <Button onClick={handleAlphabeticallySort} type="button" ><BiSort />Sort</Button>
                        <Button type="button"><BiFilterAlt />Filters</Button>
                        <Button onClick={handleFullScreen} type="button"><AiOutlineFullscreen /></Button>
                        <Button type="button"><BiShare />Share</Button>
                    </div>
                   
                   <div style={{display: 'flex'}}>
                    <InputWrapper>
                        <FilterInput placeholder="Filter by title..." type="text" value={inputText} onChange={inputHandler}/>
                        <CustomIcon src='../../media/icons/search.svg'/>
                    </InputWrapper>
                    <FollowedWrapper ref={wrapperRef} onClick={menuHandler}>
                        <CustomIcon src='../../media/icons/followed.svg' style={{width: '12px'}}/>
                        <span>{followedItem}</span>
                        <CustomIcon src ='../../media/icons/arrow-down-blue.svg' style={{width: '9px'}}/>
                        {dropdownOpen && <ExpandedFollow passfollowedItem={setFollowedItem}/>}
                    </FollowedWrapper>
                    </div>
                
                </FiltersWrapper>
                <EntitiesWrapper toggle={isList}>
                    {entitiesTiles}         
                </EntitiesWrapper>
            </Wrapper>
        )
   
}