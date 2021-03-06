import {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'
import { runInThisContext } from 'node:vm';
import "./styles.css";
import useDropdown from 'react-dropdown-hook';
import {ExpandedFollow} from './ExpandedFollow';
import {media} from '../../styledHelpers/Breakpoints';
import {ButtonPanel} from "./ButtonPanel";

import {useSelector} from 'react-redux';
import {IState} from '../../reducers';
import {IUsersReducer} from '../../reducers/usersReducer';

import {FollowedWrapper} from '../Common/FollowedWrapper'

const Wrapper = styled.div`
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100px;
`;

const Comment = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
    box-sizing: border-box;
    margin: 5px 0;
    border-radius: 5px;

    & > a {
        padding: 10px 10px 5px 10px;
        color: ${Colors.blue};
        text-decoration: none;

        &:hover{
            
        }
    }  
    & > p{
        padding: 5px 10px 10px 10px;
        font-size: ${fontSize[14]};
        font-weight: 600;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize[10]};
    color: ${Colors.grey};
    margin: 0px 5px;

    & > span{
        margin: 5px;
    }

    & > p{
        margin: 5px;
        color: lightgray;
    }
`;

const CustomIcon = styled.img`
    width: 15px;
    margin: 5px;
    height: auto;
`;
const Circle = styled.div`
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${Colors.grey};
    margin: 5px;
`;
const FilterInput = styled.input`
    width: 120px;
    height: 20px;
    border: none;
    border-radius: 6px;
    padding-left: 5px;
    outline: none;
`;
const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    & > h1{
        margin: 15px;
    }

    ${media.tablet`
        flex-direction: row;

        & > h1{
            margin: 0;
        }

    `}
`;
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-right: 10px;
`;

export interface ITitleProps{
    title: string,
    buttonPanel: boolean;
    userId: number;
}

const PER_PAGE = 10;

export const ResumeYourWork: FC<ITitleProps> = (props) => {
   
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([[]]);
    const [currentData, setCurrentData] = useState([[]]);
    const [followedItems, setFollowedItems] = useState<string>('All items');

    useEffect(() => {
        fetchData();
      }, []);

      async function fetchData() {
        const com = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comJson = await com.json();
        console.log(comJson);

        const post = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postJson = await post.json();
        
        const posts = postJson.map((element: any) => {
            return([element.id, element.userId])
        })

        const comments = comJson.map((element: any) => {
            return([element.id, element.name, element.body, posts[element.postId-1][1]-1]);
        })

        setData(comments);
        setCurrentData(comments);
      }

    function handlePageClick({ selected: selectedPage }:any) {
        setCurrentPage(selectedPage);
      }  

    const offset = currentPage * PER_PAGE;
      
    const pageCount = Math.ceil(currentData.length / PER_PAGE);

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
       
    const {usersList} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const filterData = () => {
        let currentfilteredData: any[] = [];
        [...data].map((element: any) =>{
            if(element[1]?.toLowerCase().includes(inputText.toLowerCase())){
                if(followedItems==="My items"){
                    (element[3] === props.userId) && 
                        currentfilteredData.push(element);
                }
                else if(followedItems==="All items")
                    currentfilteredData.push(element);
            }
        })
        console.log(currentfilteredData);
        setCurrentData(currentfilteredData);
    }

    useEffect(() => {
        filterData();
        setCurrentPage(0);
      }, [inputText, followedItems]);

    //const [follow, setFollow] = useState<boolean>(true); 

    const currentPageData = currentData
        .slice(offset, offset + PER_PAGE)
        .map((element: any, index: number) => {
            const title: string = currentData[index+offset][1];
            const body: string = currentData[index+offset][2];
            const userId: number = currentData[index+offset][3];
            return(
                <div key={index} style={{width: '100%'}}>           
                        <Comment> 
                            <Link to="/TestPage"><h1>{title}</h1></Link>
                            <p>{body}</p>

                            <InfoContainer>
                                <CustomIcon src='../../media/icons/house.svg'/>
                                <span>{usersList[userId]?.company.name}</span>
                                <Circle/>
                                <CustomIcon src='../../media/icons/entities2.svg'/>
                                <span>{usersList[userId]?.company.catchPhrase}</span>
                                <Circle/>
                                <p>Updated 3 days ago by {usersList[userId]?.name}</p>
                            </InfoContainer>
                        </Comment>                
                </div>       
        )})

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () =>{
        toggleDropdown();
    };
        
        return (
            <Wrapper>            
                <HeaderWrapper>
                    <h1>{props.title}</h1>
                    <div style={{display: 'flex'}}>
                    <InputWrapper>
                        <FilterInput placeholder="Filter by title..." type="text" value={inputText} onChange={inputHandler}/>
                        <CustomIcon src='../../media/icons/search.svg'/>
                    </InputWrapper>                   
                    <FollowedWrapper ref={wrapperRef} onClick={menuHandler}>
                        <CustomIcon src='../../media/icons/followed.svg' style={{width: '12px'}}/>
                        <span>{followedItems}</span>
                        <CustomIcon src ='../../media/icons/arrow-down-blue.svg' style={{width: '9px'}}/>
                        {dropdownOpen && <ExpandedFollow passfollowedItem={setFollowedItems}/>}
                    </FollowedWrapper>
                    </div>
                </HeaderWrapper>
                {props.buttonPanel && <ButtonPanel/>}
                
                {currentPageData}
                <ReactPaginate
                previousLabel={'PREVIOUS'}
                nextLabel={'NEXT'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
                />           
            </Wrapper>
        ) 
}   

