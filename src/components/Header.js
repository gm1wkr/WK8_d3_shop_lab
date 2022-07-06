import React from 'react';
import UserDetails from './UserDetail';
import styled from 'styled-components';


const HeadArea = styled.header`
    text-align: center;
    background-color: #575c00;
    color: rgba(255,255,255, 0.95);
    padding: 2rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
    `

const Heading1 = styled.h1`
    font-size: 1.6rem;
`

const Header = ({ user }) => {
    return(
        <HeadArea>
            <Heading1>Barry's Bush and Flower</Heading1>
            <UserDetails user={user}/>
        </HeadArea>
    )
}

export default Header;