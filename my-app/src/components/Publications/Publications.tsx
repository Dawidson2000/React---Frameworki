import { FC, Component } from 'react';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizes';
import {Link} from 'react-router-dom';
import {Colors} from '../../styledHelpers/Colors'
import {media} from '../../styledHelpers/Breakpoints';

import {Publication} from './Publication';

const Wrapper = styled.div`
    background-color: white;
    min-height: 300px;
    margin-bottom: 10px;
    width: 100%; 
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
`;

const LeftPhoto = styled.div`
    min-width: 300px;
    min-height: 300px;
    color: white;
    position: relative;
    background-image:
    linear-gradient(to bottom, rgba(17, 33, 39, 0.1), rgba(13, 23, 26, 0.85)),
    url('../../media/photo/skyscrapers.jpg');
    background-size: cover;
    border-radius: 5px;
`;

const TextContainer = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: 20px;
    
    & > a{
        text-decoration: none;
    }
    & > a > p {
        padding: 0 10px;
        color: white;
        transition: 0.2s;

        &:hover{
            background-color: hsla(0, 0%, 0%, 0.2);            
        }
    }
`;
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: ${fontSize[12]};
    font-weight: 200;
    & > span{
        margin: 10px;
    }
`;

const ProfilePhotoWrapper = styled.div`
    background-color: grey;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

const PublicationsContainer = styled.div`
    & > h1{
        margin: 10px;
    }
    & > a{
        margin: 10px;
        font-size: ${fontSize[14]};
        text-decoration: none;
        color: ${Colors.blue};
    }
`;

export interface PublicationsProps{
    username: string,
}

class Publications extends Component<PublicationsProps> { 
    
   state = {
        posts: [],
    }

    async componentDidMount(){
        /* //fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then((response) => response.json())
        .then((data) =>{ 
            this.setState({
                posts: data,
            })
            console.log("user.posts")
        });*/
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const json = await res.json();
        
        this.setState({
            posts: [json[0].title, json[1].title, json[2].title, json[3].title]
        })
    }

    render(){
        return (
            <Wrapper>
                <LeftPhoto>
                    <TextContainer>
                        <Link to="/TestPage"><p>{this.state.posts[0]}</p></Link>
                        <InfoContainer>
                            <span> 7 jan. 2020</span>
                            <ProfilePhotoWrapper/>
                            <span>{this.props.username}</span>
                        </InfoContainer>    
                    </TextContainer>
                </LeftPhoto>           
                <PublicationsContainer>
                    <h1>Latest publications</h1>
                    <Publication name={this.props.username} title={this.state.posts[1]}/>
                    <Publication name={this.props.username} title={this.state.posts[2]}/>
                    <Publication name={this.props.username} title={this.state.posts[3]}/>
                    <Link to="/TestPage">See more publications</Link>
                </PublicationsContainer>
            </Wrapper>
        )
    }
}
export default Publications;