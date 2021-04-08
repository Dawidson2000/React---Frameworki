import { FC } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors'
import {fontSize} from '../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${fontSize[12]};
`;

const TopCard = styled.div`
    width: 210px;
    height: 220px;
    background-color: ${Colors.white};
    margin: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BottonIcons = styled.div`
    width: 100%;
    height: 70px;
    border-top: solid 2px #e1e3e6;
`;

const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50%;
`;

const CustomIconTop = styled.img`
    width: 20px;
    height: 20px;
    color: black;
    margin: 0 10px;
`;

const CustomIconBotton = styled.img`
    width: 25px;
    height: 25px;
    color: black;
    margin: 10px 15px;
`;

const RightButton = styled.button`
    height: 20px;
    width: 30px;
    margin-left: 5px;
    margin-right: 15px;
    background-color: ${Colors.white};
    border: solid 1px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
`;

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const BottonCard = styled.div`
    margin: 0 20px 20px 20px;
    width: 210px;
`;

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => json.filter((user: any) => user.id===1)
                           .map((userName: any) => userName.name));

const UserHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CustomImg = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: grey;
    margin-top: 15px;
    margin-bottom: 15px;
`;
let UserName = styled.div`
    font-size: ${fontSize[14]};
    color: ${Colors.blue};
`;
const UserCompany = styled.div`
    color: lightgray;
    margin-top: 15px;
`;


export const LeftMenu: FC = () => {
    return(
        <Wrapper>
            <TopCard>
                <UserHolder>
                    <CustomImg/>
                    <UserName>Elon Musk</UserName>
                    <UserCompany>CEO - SpaceX</UserCompany>
                </UserHolder>
                
                <BottonIcons>
                    <Panel>
                        <InnerWrapper>
                            <CustomIconTop src='../../media/icons/network.png' />
                            <div>Your network</div>
                        </InnerWrapper>
                        <RightButton>
                            <img src='../../media/icons/user-plus.png' alt="User plus icon"/>    
                        </RightButton>
                    </Panel>
                    <Panel>
                        <InnerWrapper>
                            <CustomIconTop src='../../media/icons/publications.png' />
                            <div>Your Publications</div>
                        </InnerWrapper>
                        <RightButton>
                            <img src='../../media/icons/plus.png' alt='Plus icon'/>    
                        </RightButton>
                    </Panel>
                </BottonIcons>
            </TopCard>
            
            <BottonCard>
                <InnerWrapper>
                    <CustomIconBotton src='../../media/icons/publications.png' />
                    <div>Publications</div>
                </InnerWrapper>
                <InnerWrapper>
                    <CustomIconBotton src='../../media/icons/ecosystem.png' />
                    <div>Ecosystem</div>
                </InnerWrapper> 
                <InnerWrapper>
                    <CustomIconBotton src='../../media/icons/entities2.png' />
                    <div>Entities</div>
                </InnerWrapper>   
            </BottonCard>
        </Wrapper>
    )
}